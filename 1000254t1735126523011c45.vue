<template>
<span><v-container fluid>
    <!-- All Bookings Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">All Bookings</v-card-title>
      <v-data-table
        :headers="headers"
        :items="allBookings"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Confirmed Bookings Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Confirmed Bookings</v-card-title>
      <v-data-table
        :headers="headers"
        :items="confirmedBookings"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Pending Bookings Table -->
    <v-card style="margin-bottom: 24px; border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Pending Bookings</v-card-title>
      <v-data-table
        :headers="headers"
        :items="pendingBookings"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>

    <!-- Cancelled Bookings Table -->
    <v-card style="border-radius: 12px;">
      <v-card-title style="font-size: 24px; font-weight: bold;">Cancelled Bookings</v-card-title>
      <v-data-table
        :headers="headers"
        :items="cancelledBookings"
        class="elevation-1"
        style="border-radius: 12px;"
      ></v-data-table>
    </v-card>
</v-container>



</span>
</template>
<script>
 export default {

  created() {
    this.fetchUserBookings();
  },
  data() {
    return {
      // Table headers
      headers: [
        { text: "Booking ID", value: "booking_id" },
        { text: "Car ID", value: "car_id" },
        { text: "Start Location", value: "start_location" },
        { text: "End Location", value: "end_location" },
        { text: "Booking Type", value: "booking_type" },
        { text: "Fare", value: "fare" },
        { text: "Status", value: "status" },
      ],

      // All bookings
      allBookings: [],

      // Confirmed bookings
      confirmedBookings: [],

      // Pending bookings
      pendingBookings: [],

      // Cancelled bookings
      cancelledBookings: [],
    };
  },
    methods: {
    async fetchUserBookings() {
      try {
        const response = await this.$axios.post("/getUserBookings", { f_name: 'getbookings' });

        // Process the bookings data
        const bookings = response.data.data
        

        // Update the counts based on booking status
        this.allBookings = bookings;
        this.pendingBookings = bookings.filter(booking => booking.status === 'Pending');
        this.confirmedBookings = bookings.filter(booking => booking.status === 'Confirm');
        this.cancelledBookings = bookings.filter(booking => booking.status === 'Cancel');
      } catch (error) {
        console.error("Error fetching user bookings:", error);
      }
    },
  },

}
</script>
<style>
</style>