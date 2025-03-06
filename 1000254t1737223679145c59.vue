<template>
<span><v-container v-if="$store.state.variable.selectedOption === 'Local'">
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
      console.log('Location ID:', this.$store.state.variable.pickuplocationid);
      console.log('Car ID:', car.id);

      const distance = this.$store.state.variable.totaldistance / 1000;
      if (!this.$store.state.variable.pickuplocationid) {
        if (distance <= 5) {
          return car.local_minprice;
        } else {
          return car.local_minprice + (distance - 5) * car.local_pricreperkm;
        }
      } else if ((this.$store.state.variable.pickuplocationid === 3 && this.$store.state.variable.droplocationid === 4) || (this.$store.state.variable.pickuplocationid === 4 && this.$store.state.variable.droplocationid === 3)) {
        const obj = {
          f_name: 'getlocalbookingprice',
          carid: car.id,
          locatinid: this.$store.state.variable.pickuplocationid,
        };
        const response = await this.$axios.post('/getlocalbookingprice', obj);
        console.log('response: ' + response);
        const prices = response.data.data;

        console.log('prices: ' + prices);
        return prices[0];
      }
      else {
        const obj = {
          f_name: 'getlocalbookingprice',
          carid: car.id,
          locatinid: this.$store.state.variable.pickuplocationid,
        };
        try {
          const response = await this.$axios.post('/getlocalbookingprice', obj);
          const prices = response.data.data;
          if (prices.length == 3) {
            if (distance <= 15) {
              return prices[0];
            }
            else if (distance <= 20) {
              return prices[1];
            }
            else if (distance <= 25) {
              return prices[2];
            }
            else {
              return car.local_minprice + (distance - 5) * car.local_pricreperkm;
            }
          }
          else {
            if (distance <= 15) {
              return prices[0];
            }
            else if (distance <= 20) {
              return prices[1];
            }
            else if (distance <= 25) {
              return prices[2];
            }
            else if (distance <= 30) {
              return prices[3];
            }
            else {
              return prices[4];
            }
          }
        } catch (error) {
          console.error('Error fetching price:', error);
          return 0;
        }
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