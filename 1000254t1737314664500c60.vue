<template>
<span><v-container v-if="$store.state.variable.selectedOption === 'Rental'">
  <v-row v-for="car in cars" :key="car.id" class="mb-4">
    <!-- Car Image -->
    <v-col cols="12" md="4">
      <v-img :src="car.image_url" height="220px" class="rounded" style="box-shadow: none;" contain></v-img>
    </v-col>

    <!-- Car Info and Hourly Packages -->
    <v-col cols="12" md="8">
      <v-card 
        class="pa-3 vehicle-card"
        style="border-radius: 12px; background: #e3f2fd; transition: all 0.3s ease;"
        @click="selectVehicleRental(car)"
      >
        <!-- First Line: Car Name and Model -->
        <div class="d-flex justify-space-between align-center mb-3">
          <h3 style="color: #046bd2; font-weight: bold; margin: 0;">
            {{ car.car_name }}
            <span style="font-size: 16px; color: #555;"> or Equivalent</span>
          </h3>
        </div>

        <!-- Second Line: Rental Packages -->
        <div class="d-flex justify-space-between align-center mb-3"
          style="border-top: 1px solid #ccc; padding-top: 8px;">
          <p style="font-size: 16px; color: #555; line-height: 1.5; margin: 0;">
            Model: {{ car.model }} | Variant: {{ car.variant }} | max <v-icon>mdi-account-group</v-icon>
            {{car.passenger}} and max <v-icon>mdi-bag-suitcase</v-icon>{{car.luggage}}
          </p>
        </div>

        <!-- Third Line: Extra Charges -->
        <p style="font-size: 14px; color: #555; margin: 0;">
          packages:
        </p>

        <!-- Render Individual Packages -->
        <v-row>
          <v-col
            v-for="(package2, index) in parseRentalPackages(car.rental_price)"
            :key="index"
            cols="12"
            md="6"
            class="mb-2"
          >
            <v-card 
              class="pa-3 package-card"
              :class="{ 'selected-package': package2 === selectedPackage }"
              style="border-radius: 8px; border: 1px solid #ccc; background: #fff; transition: all 0.3s ease;"
              @click="selectPackage(package2, car.car_name)"
            >
              <!-- Package Details -->
              <div class="d-flex justify-space-between align-center">
                <p style="font-size: 18px; font-weight: bold; color: #ff9800; margin: 0;">
                  {{ package2.hours }} / {{ package2.kms }} Km
                </p>
                <p style="font-size: 16px; color: #4caf50; margin: 0;">
                  ₹{{ package2.baseFare }}
                </p>
              </div>

              <!-- Extra Charges -->
              <p style="font-size: 14px; color: #555; margin: 0;">
                Extra distance: {{ package2.extraKm }}km | Extra Time: {{ package2.extraHours }}min
              </p>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container></span>
</template>
<script>
 export default {

props: ['props'],

  data() {
    return {
      cars: [],
      selectedPackage: null,
    };
  },

  created() {
    this.fetchTotalCar();
  },

  methods: {
    // Fetch cars and filter based on conditions
    async fetchTotalCar() {
      try {
        const response = await this.$axios.post('/getallcars', { f_name: 'getallcars' });
        let cars = response.data.data;

        // Filter cars based on members and luggage
        const members = this.$store.state.variable.members;
        const luggage = this.$store.state.variable.luggage;

        this.cars = cars.filter((car) => car.passenger >= members && car.luggage >= luggage);
      } catch (error) {
        console.error('Error fetching cars:', error);
        this.cars = [];
      }
    },

    // Parse rental_price string into a structured array
    parseRentalPackages(rentalPrice) {
      if (!rentalPrice) return [];
      const prices = rentalPrice.split(' ');

      // Parse into structured packages
      const packages = [];
      if (prices.length === 4) {
        packages.push(
          { hours: '8hr', kms: '80km', baseFare: prices[0], extraKm: prices[2], extraHours: prices[3] },
          { hours: '12hr', kms: '120km', baseFare: prices[1], extraKm: prices[2], extraHours: prices[3] }
        );
      } else if (prices.length === 5) {
        packages.push(
          { hours: '6hr', kms: '60km', baseFare: prices[0], extraKm: prices[3], extraHours: prices[4] },
          { hours: '8hr', kms: '80km', baseFare: prices[1], extraKm: prices[3], extraHours: prices[4] },
          { hours: '12hr', kms: '120km', baseFare: prices[2], extraKm: prices[3], extraHours: prices[4] }
        );
      }
      return packages;
    },

    // Handle package selection
    selectPackage(packageDetails, carName) {
         this.$store.state.variable.grandTotal = packageDetails.baseFare;
         this.$store.state.variable.selectedvichicle = carName;
         this.$store.state.variable.selectedpakagehr = packageDetails.hours;
         this.$store.state.variable.selectedpakagekm = packageDetails.kms;
    },

  },

}
</script>
<style>
</style>