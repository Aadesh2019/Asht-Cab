<template>
<span><v-container class="pa-4" fluid
  :class="{'mx-auto': $vuetify.breakpoint.smAndDown, 'ml-50': $vuetify.breakpoint.mdAndUp}">
  <!-- Cab Selection Overlay Section -->
  <a-comp entity_id="1000254t1735916282686c49" comp_name="Cabselection" />

  <!-- Customer Details Section -->
  <b-comp entity_id="1000254t1736500291375c50" comp_name="customerDetail" />

  <!-- Main Booking Section -->
  <g-comp entity_id="1000254t1737101152082c58" comp_name="bookingForm" /> 



  <!-- Additional Components -->
  <d-comp entity_id="1000254t1731408462789c39" comp_name="home5" />
  <f-comp entity_id="1000254t1730457553252c15" comp_name="home2" />
  <c-comp entity_id="1000254t1730457521438c14" comp_name="home1" />
  <e-comp entity_id="1000254t1730965190062c31" comp_name="home3" />
</v-container></span>
</template>
<script>
 export default {

  

}
</script>
<style>
</style>