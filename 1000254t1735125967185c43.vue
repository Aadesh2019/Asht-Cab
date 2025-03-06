<template>
<span><b-comp entity_id="1000254t1731139329639c34" comp_name="adminCarsManagement"
  v-if="$route.path.startsWith('/admin/Cars-Mangement')" />
<a-comp entity_id="1000254t1735126504708c44" comp_name="adminDashboard" v-if="$route.path=='/admin'" />
<c-comp entity_id="1000254t1735126523011c45" comp_name="adminAllBookings"
  v-if="$route.path.startsWith('/admin/all-booking')" />
<d-comp entity_id="1000254t1735188053882c47" comp_name="adminUserManagement" v-if="$route.path.startsWith('/admin/users-management')" />
<e-comp entity_id="1000254t1736940235214c57" comp_name="adminmoneymanagement" v-if="$route.path.startsWith('/admin/money-management')" /> 
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