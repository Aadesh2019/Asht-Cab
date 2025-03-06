<template>
<span><v-app-bar style="background-color: rgb(4, 136, 210); color: white; z-index: 2;" class="admin-head" dark>
  <v-app-bar-nav-icon @click.stop="$store.state.variable.drawer = !$store.state.variable.drawer" style="color: white;">
  </v-app-bar-nav-icon>

  <v-spacer></v-spacer>

  <v-btn text to="/profile/userbookings" style="color: white;">
    <v-icon left style="color: white;">mdi-cart</v-icon>
    Bookings
  </v-btn>

  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text style="color: white;">
        <v-avatar size="36" class="mr-2"
          style="background-color: rgba(255, 255, 255, 0.2); display: flex; align-items: center; justify-content: center;">
          <v-icon style="color: white;">mdi-account</v-icon>
        </v-avatar>

        <span v-if="$auth.loggedIn">{{$auth.user.username}}</span>
      </v-btn>
    </template>

    <v-list>
      <!-- If Not Logged In -->
      <v-list-item v-if="!$auth.loggedIn" class="pointer">
        <v-list-item-title @click="$store.state.variable.signupDialog = true">Register</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!$auth.loggedIn" class="pointer">
        <v-list-item-title @click="$store.state.variable.loginDialog = true">Login</v-list-item-title>
      </v-list-item>

      <!-- If Logged In -->
      <v-list-item v-if="$auth.loggedIn" class="pointer">
        <v-list-item-title @click="$router.push('/profile/userdetails')">Profile</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="$auth.loggedIn" class="pointer">
        <v-list-item-title @click="$auth.logout()">Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</v-app-bar>

  <!-- Login Dialog -->
<a-comp entity_id="1000254t1731139306034c33" comp_name="authDialog" /></span>
</template>
<script>
 export default {

name: 'BackgroundSection',
  computed: {
    sectionName() {
      // Extract the section name from the URL path
      return this.$route.params.name || this.$route.path.split('/').pop();
    },
    readableSectionName() {
      // Map URL path names to readable names
      const sectionMapping = {
        admin: 'Dashboard',
        allBookings: "All Bookings",
        approvals: 'Awaited Approvals',
        active: 'Active Bookings',
        completedBooking: 'Completed Booking',
        declineBooking: 'Decline Booking',
        notification: 'Subscription Plan',
        composeemail: 'Purchase History',
        composesms: 'Pending Payment',
        assignplan: 'Assign Plan',
        allservices: 'All Services',
        awaitedapprovals: 'Awaited for Approvals',
        activeservice: 'Active Service',
        bannedservices: 'Banned Service',
        servicereview: 'Service Review',
        coupon: 'Coupon',
        couponhis: 'Coupon History',
        categories: 'Categories',
        pendingprovider: 'Pending Provider',
        providerlist: 'Provider List',



        // Add more mappings as needed
      };

      // Return the readable name or default to the sectionName if not found in mapping
      return sectionMapping[this.sectionName] || this.sectionName;
    },
  },
  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/");
    },
  }

}
</script>
<style>
</style>