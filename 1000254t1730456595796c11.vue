<template>
<span><a-comp v-if="$route.path=='/services'"entity_id="1000254t1730459819475c16" comp_name="service1" /> 
<b-comp v-if="$route.path=='/services/local-taxi-cab-service-in-ahmedabad'"entity_id="1000254t1730461929062c17" comp_name="localTaxiCabServiceInAhmedabad" />  
<c-comp v-if="$route.path=='/services/ahmedabad-to-mumbai-taxi-cab-service'" entity_id="1000254t1730473182139c18" comp_name="ahmedabadToMumbaiTaxiCabService" />
<d-comp v-if="$route.path=='/services/rajkot-to-hirasar-airport-taxi-service'"entity_id="1000254t1730512370351c19" comp_name="rajkotToHirasarAirportTaxiService" />
<e-comp v-if="$route.path=='/services/taxi-service-in-gujarat'"entity_id="1000254t1730521816793c20" comp_name="taxiServiceInGujarat" />  
<f-comp v-if="$route.path=='/services/taxi-service-in-ahmedabad-airport'"entity_id="1000254t1730523848316c21" comp_name="taxiServiceInAhmedabadAirport" />
<g-comp v-if="$route.path=='/services/rajkot-airport-taxi'"entity_id="1000254t1730527015007c22" comp_name="rajkotAirportTaxi" /> 
<h-comp v-if="$route.path=='/services/cab-service-in-ahmedabad-for-outstation'"entity_id="1000254t1730533232557c23" comp_name="cabServiceInAhmedabadForOutstation" /></span>
</template>
<script>
 export default {

}
</script>
<style>
</style>