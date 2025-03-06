<template>
<span><v-navigation-drawer v-model='$store.state.variable.drawer' app class="custom-scrollbar">

  <v-list dense v-for="link in $store.state.variable.links" :key="link.text">
      <v-list-group v-if="link.children" :prepend-icon="link.icon" no-action>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title class="px-0">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="sublink in link.children" :key="sublink.text" router
          @click="navigate(link.route + sublink.route)">

          <v-list-item-content>
            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
      <v-list-item v-else router @click="navigate(link.route)" active-class="border">
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
            icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/admin', entityid: '', compname: '', open: false
          },
          {
            icon: 'mdi-car', text: 'Cars Mangement', route: '/admin/Cars-Mangement', entityid: '', compname: '', open: false,
          },
          {
            icon: 'mdi-cart', text: 'All Bookings', route: '/admin/all-bookings', entityid: '', compname: '', open: false,
          },
          {
            icon: 'mdi-account-group', text: 'Users Management', route: '/admin/users-management', entityid: '', compname: '', open: false
          },
          {
            icon: 'mdi-currency-rupee', text: 'Money Management', route: '/admin/money-management', entityid: '', compname: '', open: false
          },
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
<style>.custom-scrollbar {

  max-height: 80vh;
  overflow-y: auto;
}


.custom-scrollbar::-webkit-scrollbar {
  width: 3px !important;
  opacity: 0;
  transition: opacity 0.2s;
  border-radius: 25px !important;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.custom-scrollbar:hover::-webkit-scrollbar {
  opacity: 1;
}


.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: #888 transparent;
}


.custom-scrollbar:hover {
  scrollbar-color: #888 transparent;
}
</style>