<template>
<span><!-- Cab Selection Overlay Section -->
<v-card v-if="$store.state.variable.cabSelectionVisible" class="pa-4 d-flex flex-column justify-center align-center"
  style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background: transparent;
    height: 100vh;
    z-index: 200;
  ">
  <!-- Close Button -->
  <v-btn icon class="close-btn" style="
      position: absolute;
      top: 65px;
      right: 20px;
      color: black;
      border-radius: 50%;
      padding: 8px;
      background-color: gray;
      font-size: 24px;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
      cursor: pointer;
    " @click="toggleCabSelection">
    <v-icon>mdi-close</v-icon>
  </v-btn>


  <!-- Main Card -->
  <v-card style="
      background: rgba(255, 255, 255, 0.9);
      width: 80%;
      border-radius: 12px;
      max-height: 80vh;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    ">
    <!-- Title -->
    <h1 class="text-center mb-4" style="font-size: 36px; font-weight: bold; color: #046bd2;">
      Choose a Ride for
      <span style="color: #ff9800;">{{$store.state.variable.selectedOption }}</span>
      <span v-if="$store.state.variable.localTripType" style="color: #ff9800;">{{$store.state.variable.localTripType }}</span>
    </h1>


    <p v-if="$store.state.variable.selectedOption === 'Outstation'" class="text-center mb-4" style="font-size: 18px; color: #555;">
      Driver Allownce Per Day Rs: 300 and 
      Night Allownce Per Night Rs: 250
      <span>Distance: <strong>{{ $store.state.variable.totaldistanceinword }}</strong></span>
    </p>


   
    <p v-if="$store.state.variable.selectedOption === 'Rental'" class="text-center mb-4" style="font-size: 18px; color: #555;">
       Choose sutable car and package for your journey
    </p>
    <p v-if="$store.state.variable.selectedOption === 'Local'" class="text-center mb-4" style="font-size: 18px; color: #555;">
      <v-icon>mdi-map-marker</v-icon>
      <v-icon>mdi-arrow-right-bold</v-icon>
      <v-icon>mdi-map-marker-radius</v-icon>
      <span > Total - </span>
      Distance: <strong>{{ $store.state.variable.totaldistanceinword }}</strong>
    </p>

    <!-- Local Cards -->
    <a-comp entity_id="1000254t1737223679145c59" comp_name="localbooking" />

    <!-- Rental Cards -->
    <b-comp entity_id="1000254t1737314664500c60" comp_name="rentalbooking" />

    <!-- outstation card  -->
    <c-comp entity_id="1000254t1737355190192c61" comp_name="outstationbooking" />


    <!-- Grand Total -->
    <v-card class="d-flex justify-end pa-6"
      style="width: 100%; background: #f5f5f5; box-shadow: none; position: relative;">
      <div style="text-align: right;">
        <h2 style="font-size: 40px; color: #4caf50; font-weight: bold;">
          Grand Total: ₹{{ $store.state.variable.grandTotal }}
        </h2>
        

        <!-- Confirm Booking Button -->
        <div class="text-center mt-4">
          <v-btn large color="primary" class="pa-4"
            style="font-size: 20px; font-weight: bold; border-radius: 8px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);"
            @click="confirmBooking">
            Confirm Booking
          </v-btn>
        </div>
      </div>
    </v-card>


  </v-card>
</v-card></span>
</template>
<script>
 export default {

  data() {
    return {
      selectedVehicle: null,
      selectedPackage: null,
    };
  },
  methods: {
    toggleCabSelection() {
      this.$store.state.variable.cabSelectionVisible = false;
      this.$store.state.variable.date = null;
      this.$store.state.variable.time = null;
      this.$store.state.variable.pickup = "";
      this.$store.state.variable.pickupCity = "";
      this.$store.state.variable.localTripType = null;
      this.$store.state.variable.members = null;
      this.$store.state.variable.luggage = null;
      this.$store.state.variable.allfieldfill = false;
      this.$store.state.variable.additionalCities = [];
      this.$store.state.variable.grandTotal = 0;
      this.$store.state.variable.costomerinfo = false;
    },
    calculateTotalPrice(pricePerKm) {
      return pricePerKm * this.$store.state.variable.totaldistance || 0;
    },
    selectVehicle(vehicle) {
      this.$store.state.variable.selectedvichicle = vehicle.name;
      this.updateGrandTotal(this.calculateTotalPrice(vehicle.price));
    },
    selectVehiclerental(vehicle) {
      this.$store.state.variable.selectedvichicle = vehicle.name;
    },
    selectPackage(vehicle, packageName) {
      this.selectedVehicle = vehicle.name;
      this.selectedPackage = packageName;
      this.updateGrandTotal(packageName.baseFare);
    },
    updateGrandTotalrental(pakage) {
      this.updateGrandTotal(pakage.baseFare);
      this.$store.state.variable.selectedpakagehr = pakage.hours;
      this.$store.state.variable.selectedpakagekm = pakage.kms;
    },
    updateGrandTotal(value) {
      console.log("Clicked package with base fare:", value);
      this.$store.state.variable.grandTotal = value;
    },
    confirmBooking() {
      console.log("Booking confirmed");

      // Ensure `grandTotal` is treated as a number before calculations
      const grandTotal = parseFloat(this.$store.state.variable.grandTotal);

      // Calculate updated values
      const updatedGrandTotal = (grandTotal + grandTotal * 0.05).toFixed(2); // Convert to a string with 2 decimal places
      const payableAmount = (updatedGrandTotal * 0.3).toFixed(2); // Also convert to 2 decimal places

      // Update the store values
      this.$store.state.variable.grandTotal = parseFloat(updatedGrandTotal); // Store it back as a number
      this.$store.state.variable.paybleamount = parseFloat(payableAmount); // Store it back as a number
      this.$store.state.variable.costomerinfo = true;
      this.$store.state.variable.cabSelectionVisible = false;

    },
  }
  
}
</script>
<style>.vehicle-card {
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.vehicle-card:hover {
  transform: scale(1.03);
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
}
.vehicle-card.selected {
  transform: scale(1.03);
  border: 2px solid #4caf50;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background: #e8f5e9;
}
.vehicle-card.selected {
  border: 2px solid #4caf50;
  background: #e8f5e9;
}

.package-card.selected-package {
  border: 2px solid #ff9800;
  background: #fff3e0;
}

</style>