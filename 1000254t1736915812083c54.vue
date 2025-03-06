<template>
<span><a-comp v-if="$route.path=='/profile/userdetails'" entity_id="1000254t1736767158609c52" comp_name="userdetails" /> 
<c-comp v-if="$route.path=='/profile/userupdatedetails'" entity_id="1000254t1736916678759c55" comp_name="updateuserdetails" /> 
<d-comp v-if="$route.path=='/profile/userbookings'" entity_id="1000254t1736916721555c56" comp_name="userbookings" /> 

</span>
</template>
<script>
 export default {

  props:['props'],

  created() {

  },

  mounted() {

  },

  data() {return {

  }},

  computed:{

  },

  watch:{

  },

  methods:{

  }

}
</script>
<style>
</style>