<template>
  <div>
    <nuxt />
    <v-app v-if="$store.state.project_id">
      <a-comp :entity_id="$store.state.p.info.main_component_id" />
    </v-app>
    <allScripts />
  </div>
</template>
    <script>
export default {
  mounted() {
    if (!this.$store.state.p.info.app_id) {
      var api_server = this.$store.state.api_server;
      if (
        api_server &&
        !api_server.includes("https://") &&
        !api_server.includes("localhost")
      ) {
        api_server = "https://" + api_server;
      }
      this.$axios.setBaseURL(api_server + "/api");
      this.setHeaders();
    } else {
      this.getInfoForApp();
    }
    this.$store.state.client = true;
  },
  methods: {
    setHeaders() {
      this.$axios.defaults.headers.common["project_id"] =
        this.$store.state.project_id;
      this.$axios.defaults.headers.common["api_server"] =
        this.$store.state.api_server;
    },

  },
};
</script>
    