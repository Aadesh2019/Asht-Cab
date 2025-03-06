<template>
<span><v-container fluid>
  <!-- First Row -->
  <v-row>
    <!-- Box 1: All Bookings -->
    <v-col cols="12" sm="4">
      <v-card class="mx-auto" style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">All Bookings</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">{{totalbooking}}</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <v-row>
          <v-btn color="primary" class="mt-5 mx-auto">Manage Bookings</v-btn>
        </v-row>
      </v-card>
    </v-col>

    <!-- Box 2: Total Users -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Total Users</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">{{totaluser}}</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <v-btn color="primary" class="mt-5 mx-auto">Manage users</v-btn>
      </v-card>
    </v-col>

    <!-- Box 3: Total Transactions -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Total Transactions</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">300</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <div class="text-center"><strong>Total Amount:</strong> ₹90,000</div>
        <v-btn color="primary" class="mx-auto">Manage Transactions</v-btn>
      </v-card>
    </v-col>
  </v-row>

  <!-- Second Row -->
  <v-row>
    <!-- Box 4: Pending Booking -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Pending Booking</v-card-title>
        <v-divider class="my-2"></v-divider>
        <div class="text-center" style="font-size: 32px;"><strong>{{pendingbooking}}</strong></div>
      </v-card>
    </v-col>

    <!-- Box 5: Cancel Transactions -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Cancel Transactions</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">450</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <div class="text-center"><strong>Total Amount:</strong> ₹90,000</div>
      </v-card>
    </v-col>

    <!-- Box 6: Pending Transactions -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Pending Transactions</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">300</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <div class="text-center"><strong>Total Pending:</strong> ₹50,000</div>
      </v-card>
    </v-col>
  </v-row>

  <!-- Third Row -->
  <v-row>
    <!-- Box 7: Confirmed Bookings -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Confirm Booking</v-card-title>
        <v-divider class="my-2"></v-divider>
        <div class="text-center" style="font-size: 32px;"><strong>{{confirmbooking}}</strong></div>
      </v-card>
    </v-col>

    <!-- Box 8: Cancel Bookings -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Cancel Bookings</v-card-title>
        <v-divider class="my-2"></v-divider>
        <div class="text-center" style="font-size: 32px;"><strong>{{cancelbooking}}</strong></div>
      </v-card>
    </v-col>

    <!-- Box 9: Confirmed Transactions -->
    <v-col cols="12" sm="4">
      <v-card style="height: 200px; background-color: #f5f5f5; border-radius: 12px; text-align: left; padding: 16px;">
        <v-card-title style="font-size: 20px; font-weight: bold;">Confirmed Transactions</v-card-title>
        <v-card-subtitle class="text-center" style="font-size: 32px; font-weight: bold;">450</v-card-subtitle>
        <v-divider class="my-2"></v-divider>
        <div class="text-center"><strong>Total Amount:</strong> ₹90,000</div>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</span>
</template>
<script>
 export default {

  props: ['props'],

  created() {
    this.fetchUserBookings();
    this.gettotaluser();
  },

  data() {
    return {
      totalbooking: 0,
      pendingbooking: 0,
      confirmbooking: 0,
      cancelbooking: 0,
      totaluser:0,
    };
  },

  methods: {
    async fetchUserBookings() {
      try {
        const response = await this.$axios.post("/getUserBookings", { f_name: 'getbookings' });

        // Process the bookings data
        const bookings = response.data.data;

        // Update the counts based on booking status
        this.totalbooking = bookings.length;
        this.pendingbooking = bookings.filter(booking => booking.status === 'Pending').length;
        this.confirmbooking = bookings.filter(booking => booking.status === 'Confirm').length;
        this.cancelbooking = bookings.filter(booking => booking.status === 'Cancel').length;

        console.log("Processed Bookings:", {
          totalbooking: this.totalbooking,
          pendingbooking: this.pendingbooking,
          confirmbooking: this.confirmbooking,
          cancelbooking: this.cancelbooking,
        });
      } catch (error) {
        console.error("Error fetching user bookings:", error);
      }
    },
    async gettotaluser(){
        const response = await this.$axios.post('/getalluser',{f_name:'getalluser'});
        const users = response.data.data;
        this.totaluser = users.length;
    }
  },

}
</script>
<style>
.v-card-title {
  font-weight: bold;
}
.text-h4 {
  font-size: 28px;
  font-weight: bold;
}

</style>