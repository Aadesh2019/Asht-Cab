<template>
<span><v-app-bar color='#8a01df' class="admin-head" dark app>
  <v-app-bar-nav-icon @click.stop="$store.state.variable.drawer = !$store.state.variable.drawer"></v-app-bar-nav-icon>
  <v-spacer></v-spacer>
  <v-btn color="white" text to='/'>
    <v-icon left>mdi-web</v-icon>
    Website 
  </v-btn>

  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text color="white">
        <v-avatar size="36" class="mr-2">
          <v-icon left>mdi-account</v-icon>
        </v-avatar>
        <span>{{$auth.user.username}}</span>
      </v-btn>
    </template>

    <v-list>
      <v-list-item>
        <v-btn text to="/profile">
          <v-icon left>mdi-account</v-icon> Profile
        </v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn text @click="logout()" color="red">
          <v-icon left>mdi-logout</v-icon> Logout
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</v-app-bar>

<v-row justify="center">
  <v-col cols="12" md="10">
    <v-card outlined class="px-16 text-center dashboard-card overlap-card">
      <v-card-title>
        <h3 :to="`/${sectionName}`" class="section-link">{{readableSectionName}}</h3>
      </v-card-title>
    </v-card>
  </v-col>
</v-row></span>
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
<style>.overlap-card {
  width: 80%;
  margin-top: 40px;
  position: fixed !important;
  z-index: 6;
  /* Ensure it appears on top of the app bar */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  background-color: white;
}
.admin-head{
  padding-bottom: 100px;
}
</style>