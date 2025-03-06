<template>
<span><v-container v-if="$store.state.variable.selectedOption === 'Outstation'">
  <v-row v-for="car in cars" :key="car.id" class="mb-4">
    <!-- Image Section -->
    <v-col cols="12" md="4">
      <v-img :src="car.image_url" height="220px" class="rounded" style="box-shadow: none;" contain></v-img>
    </v-col>

    <!-- Info Section -->
    <v-col cols="12" md="8">
      <v-card class="pa-3 vehicle-card" :class="{ selected: car.car_name === selectedVehicle }"
        style="border-radius: 12px; background: #e3f2fd; transition: all 0.3s ease;" @click="selectVehicle(car)">
        <!-- Name, Passenger Count, and Total Price -->
        <div class="d-flex justify-space-between align-center mb-3">
          <h3 style="color: #046bd2; font-weight: bold; margin: 0;">
            {{ car.car_name }}
            <span style="font-size: 16px; color: #555;">
                or Equivalent
            </span>
          </h3>
        </div>

        <!-- Description and Total Price -->
        <div class="d-flex justify-space-between align-center mb-3"
          style="border-top: 1px solid #ccc; padding-top: 8px;">
          <p style="font-size: 16px; color: #555; line-height: 1.5; margin: 0;">
            Model: {{ car.model }} | Variant: {{ car.variant }} | max <v-icon>mdi-account-group</v-icon>
            {{car.passenger}} and max <v-icon>mdi-bag-suitcase</v-icon>{{car.luggage}}
          </p>
        </div>

        <!-- Price per KM and Calculated Price -->
        <div class="d-flex justify-space-between align-center" style="border-top: 1px solid #ccc; padding-top: 8px;">
          <p style="font-size: 16px; color: #046bd2; margin: 0;">
            Total Price :
            <span style="font-weight: bold;">
            <span v-if="car.calculatedPrice === null || car.calculatedPrice === undefined">Loading...</span>
            <span v-else>₹{{ car.calculatedPrice.toFixed(2) }}</span>
            </span>
          </p>
          <span style="font-size: 14px; color: #555;">
            (Calculated Price)
          </span>
        </div>
      </v-card>
    </v-col>
  </v-row>
</v-container></span>
</template>
<script>
 export default {

props: ['props'],

  created() {
    this.fetchTotalCar();
  },

  data() {
    return {
      cars: [],
      selectedVehicle: null,
      loading: true,
    };
  },
  methods: {


    async fetchTotalCar() {
      try {
        // Fetch the cars data from the API
        const response = await this.$axios.post('/getallcars', { f_name: 'getallcars' });
        let cars = response.data.data;

        // Filter cars based on members and luggage
        const members = this.$store.state.variable.members;
        const luggage = this.$store.state.variable.luggage;

        this.cars = cars.filter((car) => car.passenger >= members && car.luggage >= luggage);

        // Iterate through the filtered cars and calculate the price for each
        for (const car of this.cars) {
          car.calculatedPrice = await this.calculateTotalPrice(car);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
        this.cars = [];
      }
    },


   async calculateTotalPrice(car) {
  let extraprice = 0;
  const distance = this.$store.state.variable.totaldistance / 1000;

  if (this.$store.state.variable.selectedOption === "Outstation" && this.$store.state.variable.localTripType === "Roundtrip") {
    const pikupdate = this.$store.state.variable.date; // Pickup date in string format
    const pikuptime = this.$store.state.variable.time; // Pickup time in string format
    const dropdate = this.$store.state.variable.dropdate; // Drop date in string format
    const droptime = this.$store.state.variable.droptime; // Drop time in string format

    // Combine dates and times into Date objects
    const pickupDateTime = new Date(`${pikupdate}T${pikuptime}`);
    const dropDateTime = new Date(`${dropdate}T${droptime}`);

    // Calculate the total duration in hours
    const totalDurationInHours = (dropDateTime - pickupDateTime) / (1000 * 60 * 60);

    // Define day and night hours
    const dayStart = 6;  // 6:00 AM
    const dayEnd = 18;   // 6:00 PM

    let totalDays = 0;
    let totalNights = 0;

    let currentDateTime = new Date(pickupDateTime);

    // Loop through each hour between pickup and drop to categorize as day or night
    while (currentDateTime < dropDateTime) {
      const currentHour = currentDateTime.getHours();

      if (currentHour >= dayStart && currentHour < dayEnd) {
        // Daytime
        totalDays++;
      } else {
        // Nighttime
        totalNights++;
      }

      // Increment current time by 1 hour
      currentDateTime.setHours(currentDateTime.getHours() + 1);
    }

    // Calculate day and night charges
    const dayCharge = Math.floor(totalDays / 12) * 300; // 12 hours = 1 day
    const nightCharge = Math.floor(totalNights / 12) * 250; // 12 hours = 1 night

    extraprice += dayCharge + nightCharge;
  }

  // Calculate price based on distance
  if (distance <= 115) {
    return car.outstation_min + extraprice;
  } else {
    return car.outstation_min + (distance - 115) * car.outstation_perkm + extraprice;
  }
},


    selectVehicle(car) {
      this.$store.state.variable.grandTotal = car.calculatedPrice.toFixed(2);
      this.$store.state.variable.selectedvichicle = car.car_name;
    },
  },

}
</script>
<style>
</style>