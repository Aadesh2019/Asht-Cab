<template>
<span><v-main>
  <a-comp v-if="$route.path=='/'" entity_id="1000254t1730456574727c9" comp_name="homePage" />
  <b-comp v-if="$route.path=='/about'" entity_id="1000254t1730456582074c10" comp_name="aboutPage" />
  <c-comp entity_id="1000254t1730456595796c11" comp_name="servicesPage" />
  <d-comp v-if="$route.path=='/best-tourist-place'" entity_id="1000254t1730456616686c12" comp_name="touristPage" />
  <e-comp v-if="$route.path=='/contact'" entity_id="1000254t1730456628537c13" comp_name="contactPage" />
  <f-comp entity_id="1000254t1735108087180c40" comp_name="login" v-if="$route.path=='/login'" />
  <g-comp entity_id="1000254t1736830434090c53" comp_name="userProfilepage" v-if="isProfilePage" />
  <h-comp v-if="$route.path=='/terms-and-conditions'" entity_id="1000254t1737395638026c62" comp_name="termandcondition" />
  <i-comp v-if="$route.path=='/privacy-policy'" entity_id="1000254t1737397126591c63" comp_name="privicypolicy" />
  <j-comp v-if="$route.path=='/Refund-Cancellation'" entity_id="1000254t1737404207865c64" comp_name="refundandcancelletion" />
  <k-comp 
    entity_id="1000254t1737523532803c65" 
    comp_name="paymentstatus" 
    v-if="$route.path=='/status' && $route.query.id" 
  />
</v-main>
</span>
</template>
<script>
 export default {

  computed: {
    isProfilePage() {
      // Checks if the current route starts with '/profile'
      return this.$route.path.startsWith('/profile');
    }
  }

}
</script>
<style>
</style>