<template>
<span><v-navigation-drawer v-model="$store.state.variable.drawer" temporary style="
    position: fixed;
    z-index: 1200;
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    overflow-y: auto; /* Ensures content inside the drawer is scrollable"
    class="custom-scrollbar">
  <v-container class="d-flex mt-3 align-center logo-container navy--text">
    <v-img src="/api/getCdnFile/1000254/ashtlogo.png" max-width="140" max-height="80" contain></v-img>
  </v-container>

  <v-list dense v-for="link in $store.state.variable.links" :key="link.text">
      <!-- Parent Link -->
      <v-list-group v-if="link.children" :prepend-icon="link.icon" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <!-- Sub-links -->
        <v-list-item v-for="sublink in link.children" :key="sublink.text" router
          @click="navigate(link.route + sublink.route); $store.state.variable.drawer =!$store.state.variable.drawer">
          <v-list-item-content>
            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <!-- Single Link -->
      <v-list-item v-else router
        @click="navigate(link.route); $store.state.variable.drawer = !$store.state.variable.drawer">
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-list>
</v-navigation-drawer></span>
</template>
<script>
 export default {

  created() {
    this.$store.dispatch('setVariable', {
      key: 'links', value:
        [
          {
            icon: 'mdi-home-variant', text: 'Home', route: '/', entityid: '', compname: '', open: false
          },
          {
            icon: 'mdi-car-info', text: 'About Us', route: '/about', entityid: '', compname: '', open: false,
          },
          {
            icon: 'mdi-briefcase', text: 'Services', route: '/services', entityid: '', compname: '', open: false,
            children: [
              { text: "Local Taxi Cab Service in Ahmedabad", route: "/local-taxi-cab-service-in-ahmedabad" },
              { text: "Ahmedabad to Mumbai Taxi Cab Service", route: "/ahmedabad-to-mumbai-taxi-cab-service" },
              { text: "Rajkot to Hirasar Airport Taxi Service", route: "/rajkot-to-hirasar-airport-taxi-service" },
              { text: "Taxi Service in Gujarat", route: "/taxi-service-in-gujarat" },
              { text: "Taxi Service in Ahmedabad Airport", route: "/taxi-service-in-ahmedabad-airport" },
              { text: "Rajkot Airport Taxi", route: "/rajkot-airport-taxi" },
              { text: "Cab Service in Ahmedabad for Outstation", route: "/cab-service-in-ahmedabad-for-outstation" },
            ]
          },
          {
            icon: 'mdi-phone', text: 'Contact Us', route: '/contact', entityid: '', compname: '', open: false,
          },
          {
            icon: 'mdi-map-marker-multiple', text: 'Tourist Place', route: '/best-tourist-place', entityid: '', compname: '', open: false,
          }

        ]
    });
  },
  data() {
    return {
      openItems: []
    }
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },

}
</script>
<style>
</style>