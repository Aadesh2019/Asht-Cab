<template>
<span><v-app-bar
    app
    dense
    flat
    color="white"
    elevate-on-scroll
    style=" z-index: 20;"
  >
    <!-- Logo Section (Leftmost) -->
<v-container class="d-flex mt-3 align-center logo-container navy--text">
  <v-img 
    src="/api/getCdnFile/1000254/ashtlogo.png"
    max-width="140" 
    max-height="80"
    contain
  ></v-img>
</v-container>


    <!-- Center Section (Options) -->
    <v-spacer></v-spacer>
    <div class="d-flex nav-center mr-12">
      <v-btn
        text
        class="nav-item"
        :class="{ 'active-nav': $route.path === '/' }"
        to="/"
      >
        Home
      </v-btn>
      <v-btn
        text
        class="nav-item"
        :class="{ 'active-nav': $route.path === '/about' }"
        to="/about"
      >
        About Us
      </v-btn>

      <!-- Services Dropdown -->
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" class="nav-item">
            Services
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(service, index) in services"
            :key="index"
            @click="$router.push(service.link)"
          >
            <v-list-item-title>{{ service.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn
        text
        class="nav-item"
        :class="{ 'active-nav': $route.path === '/best-tourist-place' }"
        to="/best-tourist-place"
      >
        Best Tourist Place
      </v-btn>
      <v-btn
        text
        class="nav-item"
        :class="{ 'active-nav': $route.path === '/contact' }"
        to="/contact"
      >
        Contact
      </v-btn>
    </div>
    <v-spacer></v-spacer>

    <!-- Right Section (Bookings Button and Profile Icon with Dropdown) -->
    <v-btn
      class="navy-btn mr-4"
      elevation="0"
      to="/bookings"
      :style="{ backgroundColor: '#046bd2', color: 'white' }"
    >
      Bookings
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
          class="people-icon"
        >
          <v-icon size="40" >mdi-account-circle</v-icon>
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

</span>
</template>
<script>
 export default {

data() {
    return {
      email: "",
      password: "",
      valid: false,
      rules: {
        required: (value) => !!value || "Required",
      },
      services: [
        { title: "Local Taxi Cab Service in Ahmedabad", link: "/services/local-taxi-cab-service-in-ahmedabad" },
        { title: "Ahmedabad to Mumbai Taxi Cab Service", link: "/services/ahmedabad-to-mumbai-taxi-cab-service" },
        { title: "Rajkot to Hirasar Airport Taxi Service", link: "/services/rajkot-to-hirasar-airport-taxi-service" },
        { title: "Taxi Service in Gujarat", link: "/services/taxi-service-in-gujarat" },
        { title: "Taxi Service in Ahmedabad Airport", link: "/services/taxi-service-in-ahmedabad-airport" },
        { title: "Rajkot Airport Taxi", link: "/services/rajkot-airport-taxi" },
        { title: "Cab Service in Ahmedabad for Outstation", link: "/services/cab-service-in-ahmedabad-for-outstation" },
      ],
    };
  },
  methods: {
  },

}
</script>
<style>@media (min-width: 600px) {
  .hide-on-mobile {
    display: none;
  }
}
.nav-bar {
  border-bottom: 4px solid #413939 !important;
}

.logo-container {
  max-width: fit-content;
}


.car-icon {
  font-size: 64px; 
}

.nav-item {
  position: relative;
  padding: 8px 16px;
}

.active-nav {
  color: #001f3f; 
  border-bottom: 2px solid #001f3f; 
}

.navy-btn {
  border-radius: 28px !important;
  background-color: #046bd2 !important;
  color: white !important;
  padding: 12px 24px;
  font-weight: bold;
  text-transform: uppercase;
}

.people-icon {
  cursor: pointer;
  margin-left: 16px;
}

.nav-center {
  justify-content: center;
  align-items: center;
}

/* Profile Icon */
.people-icon {
  cursor: pointer;
  margin-left: 16px;
  color: #046bd2;
}

/* Dropdown Items */
.v-list-item-title {
  cursor: pointer;
  color: #001f3f;
  font-weight: bold;
}

.v-list-item-title:hover {
  color: #bc2a2a;
}

.pointer {
  cursor: pointer;
}

</style>