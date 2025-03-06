<template>
<span><!-- Mobile Header -->
<v-app-bar app dense color="white" style=" z-index: 20;">
  <!-- Left: Logo and Title -->
  <v-container class="d-flex mt-3 align-center logo-container navy--text">
  <v-img 
    src="/api/getCdnFile/1000254/ashtlogo.png"
    max-width="140" 
    max-height="80"
    contain
  ></v-img>
</v-container>

  <!-- Right: Bookings Button and Menu Icon -->
  <v-spacer></v-spacer>
  <v-btn
    class="navy-btn mr-2"
    elevation="0"
    to="/bookings"
    :style="{ backgroundColor: '#046bd2', color: 'white' }"
  >
    Bookings
  </v-btn>
  <v-btn icon @click="toggleDrawer">
    <v-icon>mdi-menu</v-icon>
  </v-btn>
</v-app-bar>

<!-- Navigation Drawer (Mobile Menu) -->
<v-navigation-drawer right v-model="drawer" app>
  <v-list>
    <v-list-item-group>
      <!-- Navigation Links -->
      <v-list-item @click="navigate('/')">
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item>
      <v-list-item @click="navigate('/about')">
        <v-list-item-title>About Us</v-list-item-title>
      </v-list-item>

      <!-- Services Dropdown -->
      <v-list-group value="servicesOpen" no-action>
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-title>Services</v-list-item-title>
            <v-icon>{{ servicesOpen ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-list-item>
        </template>
      <v-list-item @click="$router.push('/services/ahmedabad-to-mumbai-taxi-cab-service')">
        <v-list-item-title>Ahmedabad to Mumbai Taxi Cab Service</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$router.push('/services/rajkot-to-hirasar-airport-taxi-service')">
        <v-list-item-title>rajkot to hirasar airport taxi service</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$router.push('/services/taxi-service-in-gujarat')">
        <v-list-item-title>Taxi Service in Gujarat</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$router.push('/services/taxi-service-in-ahmedabad-airport')">
        <v-list-item-title>Taxi Service in Ahmedabad Airport</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$router.push('/services/rajkot-airport-taxi')">
        <v-list-item-title>Rajkot Airport Taxi</v-list-item-title>
      </v-list-item>
      <v-list-item @click="$router.push('/services/cab-service-in-ahmedabad-for-outstation')">
        <v-list-item-title>Cab Service in Ahmedabad for Outstation</v-list-item-title>
      </v-list-item>
      </v-list-group>
      <!-- Contact -->
      <v-list-item @click="navigate('/contact')">
        <v-list-item-title>Contact</v-list-item-title>
      </v-list-item>

      <!-- Login / Logout / Profile Options -->
      <v-list-item v-if="!$auth.loggedIn" @click="$store.state.variable.registerDialog = true">
        <v-list-item-title>Register</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="!$auth.loggedIn" @click="$store.state.variable.loginDialog = true">
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="$auth.loggedIn" @click="$router.push('/profile')">
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="$auth.loggedIn" @click="$auth.logout()">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</v-navigation-drawer></span>
</template>
<script>
 export default {

data() {
    return {
      drawer: false,
      servicesOpen: false,
    };
  },
  methods: {
    navigate(route) {
      this.$router.push(route);
      this.drawer = false; // Close the drawer after navigation
    },
    toggleServices() {
      this.servicesOpen = !this.servicesOpen;
    },
    toggleDrawer() {
      this.drawer = !this.drawer; // Toggle the navigation drawer
    },
  },

}
</script>
<style>@media (mix-width: 599px) {
  .hide-on-desktop {
    display: none;
  }
}

.v-app-bar {
  box-shadow: none;
}

.hide-on-mobile {
  display: block;
}

@media (min-width: 600px) {
  .hide-on-desktop {
    display: none;
  }
}

.navy-btn {
  background-color: #046bd2;
  color: white;
  border-radius: 8px;
  padding: 8px 16px;
}

</style>