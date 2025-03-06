<template>
<span><v-container fluid>
    <!-- Page Heading -->
    <v-card class="mb-4" style="border-radius: 12px;">
      <v-card-title style="font-size: 28px; font-weight: bold;">User Management</v-card-title>
    </v-card>

    <!-- User Management Table -->
    <v-data-table
      :headers="headers"
      :items="users"
      class="elevation-1"
      style="border-radius: 12px;"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Manage Users</v-toolbar-title>
        </v-toolbar>
      </template>

      <template v-slot:[`item.analyze`]="{ item }">
        <v-btn color="primary" @click="openDialog(item)">Analyze</v-btn>
      </template>
    </v-data-table>

    <!-- User Analysis Dialog -->
    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title style="font-size: 24px; font-weight: bold;">User Details</v-card-title>
        <v-card-text>
          <div><strong>UserName:</strong> {{ selectedUser.username}}</div>
          <div><strong>Email:</strong> {{ selectedUser.email }}</div>
          <div><strong>Total Bookings:</strong> {{ userBookings.length }}</div>

          <v-divider class="my-4"></v-divider>

          <v-card-title style="font-size: 20px; font-weight: bold;">Bookings</v-card-title>
          <v-data-table
            :headers="bookingHeaders"
            :items="userBookings"
            class="elevation-1"
            style="border-radius: 12px;"
          ></v-data-table>
        </v-card-text>

        <v-card-actions>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-container></span>
</template>
<script>
 export default {

created() {
    this.fetchTotalUser();
  },
  data() {
    return {
      // Table headers for users
      headers: [
        { text: "FirstName", value: "first_name" },
        { text: "LirstName", value: "last_name" },
        { text: "Email", value: "email" },
        { text: "Contact", value: "contact" },
        { text: "username", value: "username" },
        { text: "Analyze", value: "analyze", sortable: false },
      ],
      users: [],

      // Booking headers
      bookingHeaders: [
        { text: "Booking ID", value: "booking_id" },
        { text: "Car ID", value: "car_id" },
        { text: "Start Location", value: "start_location" },
        { text: "End Location", value: "end_location" },
        { text: "Booking Type", value: "booking_type" },
        { text: "Fare", value: "fare" },
        { text: "Status", value: "status" },
      ],

      // Dialog state
      dialog: false,

      // Selected user data
      selectedUser: {},
      userBookings: [],
    };
  },
  methods: {
    async openDialog(user) {
      this.selectedUser = user;
      this.getbookingofuser(user);
      this.dialog = true;
    },
    async fetchTotalUser() {
      try {
        const response = await this.$axios.post('/getalluser', { f_name: 'getalluser' });
        this.users = response.data.data;
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        this.users = [];
      }
    },
    async getbookingofuser(user) {
      const data = {
        f_name: 'getbookingofuser',
        userId: user.id
      }
      try {
        const response = await this.$axios.post('/getbookingofuser', data);
        this.userBookings = response.data.data || [];
        console.log(this.userBookings);
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        this.userBookings = [];
      }
    }
  },

}
</script>
<style>
</style>