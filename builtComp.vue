<template>
<component :is="buildedComp" @customevent="customevent" :props="props">
  <slot></slot>
</component>
</template>
<script>
export default { 
  beforeMount() {
    this.$store.state.componentLoaded = false
    if(this.entity_id) {this.loadComponent(this.entity_id)}
  },
  props: ['entity_id', 'props'],
  data () {return {
    buildedComp:null,
  }},
  mounted() {
    var api_server = this.$store.state.api_server
    if(api_server && !api_server.includes('https://') && !api_server.includes('localhost')) {api_server = 'https://'+api_server}
    this.$axios.setBaseURL(api_server+'/api')
    this.$store.state.componentLoaded = true
    
  },
  methods: {
    customevent(e) {this.$emit('customevent',e)},
    loadComponent(component_id) {
      import(`@/assets/projects/${this.$store.state.project_id}/comps/${component_id}.vue`)
      .then(component => {
        this.buildedComp = component.default;
      })
      .catch(error => {
        // console.log(error)
        if(location) {
          var splitted = this.entity_id.split('c')
          if(splitted[1] == '1') {
            const query = { ...this.$route.query };
            query.mode = 'dev';
            this.$router.push({ path: this.$route.path, query: query });
            window.localStorage.setItem('mode','dev')
            setTimeout(() => {
              location.reload()
            }, 100);
          }
        }
        // console.error(`Failed to load component: ${error}`);
      });
    },
  }
}
</script>