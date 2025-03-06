<template>
<span><v-card class="my-5 elevation-5" :style="{ background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)' }">
  <v-card-title class="text-h5 font-weight-bold blue--text">
    📝 User Bookings
  </v-card-title>

  <v-card-text>
    <v-data-table :headers="bookingHeaders" :items="bookings" item-key="booking_id" class="elevation-3 rounded-lg"
      :style="{ backgroundColor: '#ffffff' }">
      <!-- No Data Slot -->
      <template v-slot:no-data>
        <v-alert type="info" elevation="2" class="blue--text">
          📄 No bookings available. Please check back later!
        </v-alert>
      </template>

      <!-- Status Slot with Enhanced Chips -->
      <template v-slot:item.status="{ item }">
        <v-chip :color="item.status === 'Pending' ? 'orange' : item.status === 'Confirm' ? 'green' : 'red'" dark
          class="elevation-2">
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card-text>

  <!-- Footer Actions -->
  <v-card-actions>
    <v-btn :loading="isLoading" color="primary" class="font-weight-bold white--text" elevation="3"
      @click="refreshBookings">
      Refresh Bookings
    </v-btn>
  </v-card-actions>

</v-card></span>
</template>
<script>
 export default {

props: ['props'],

  created() {
    this.fetchUserBookings();
  },

  data() {
    return {
      bookings: [], // Ensure this is an array
      bookingHeaders: [
        { text: "Booking ID", value: "booking_id" },
        { text: "Car ID", value: "car_id" },
        { text: "Start Location", value: "start_location" },
        { text: "End Location", value: "end_location" },
        { text: "Booking Type", value: "booking_type" },
        { text: "Fare", value: "fare" },
        { text: "Status", value: "status" },
      ],
      isLoading: false, // Added loading state
    };
  },

  methods: {
    // Fetch Bookings Function
    async fetchUserBookings() {
      this.isLoading = true; // Start loading
      try {
        const response = await this.$axios.post("/getUserBookings", { f_name: 'getbookings' });
        console.log("Bookings Data:", response.data.data[0]); // Debugging the raw response
        const fetchedBookings = response.data.data;

        // Ensure bookings is always an array
        this.bookings = Array.isArray(fetchedBookings) ? fetchedBookings : [fetchedBookings];
        console.log("Processed Bookings:", this.bookings); // Verify the result
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        this.bookings = [];
      } finally {
        this.isLoading = false; // Stop loading
      }
    },

    // Refresh Bookings Function
    refreshBookings() {
      this.fetchUserBookings();
    },
  },

}
</script>
<style>
</style>