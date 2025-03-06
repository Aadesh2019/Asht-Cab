<template>
<span><a-comp entity_id="1000254t1730456340385c3" comp_name="commonModules" /> 
<b-comp entity_id="1000254t1730456356166c4" comp_name="routeModules" v-if="!$route.path.startsWith('/admin')"/> 
<c-comp entity_id="1000254t1730456372594c5" comp_name="adminModules" v-if="$route.path.startsWith('/admin')" /></span>
</template>
<script>
 export default {

data() {
    return {
      scriptsList: [
        { src: "https://checkout.razorpay.com/v1/checkout.js", defer: true, }
      ]
    };
  },
  created() {
    this.scriptsList.forEach(s => {
      if (!this.$store.state.scripts.find(sc => sc.src == s.src)) {
        this.$store.state.scripts.push({ src: s.src })
      }
    })
    this.$store.dispatch('setVariable', { key: 'websitelink', value: 'https://1000254.site.guru' });
    this.$store.dispatch('setVariable', { key: 'addProductDialog', value: false });
    this.$store.dispatch('setVariable', { key: 'uploadProductImageToServer', value: false });
    this.$store.dispatch('setVariable', { key: 'lastUploadedProductId', value: null });
    this.$store.dispatch('setVariable', { key: 'reloadAllProducts', value: false });
    this.$store.dispatch('setVariable', { key: 'loginDialog', value: false })
    this.$store.dispatch('setVariable', { key: 'signupDialog', value: false })
    this.$store.dispatch('setVariable', { key: 'costomerinfo', value: false })
    this.$store.dispatch('setVariable', { key: 'cabSelectionVisible', value: false });
    this.$store.dispatch('setVariable', { key: 'drawer', value: false });
    this.$store.dispatch('setVariable', { key: 'totaldistance', value: 0 });
    this.$store.dispatch('setVariable', { key: 'grandTotal', value: 0 });
    this.$store.dispatch('setVariable', { key: 'locations', value: ["Location A", "Location B", "Location C", "Location D", "Location E"] });
    this.$store.dispatch('setVariable', { key: 'distances', value: { "Location A": 0, "Location B": 100, "Location C": 200, "Location D": 400, "Location E": 600 } });
    this.$store.dispatch('setVariable', { key: 'selectedOption', value: "Local" });
    this.$store.dispatch('setVariable', { key: 'totaldistanceinword', value: "" });
    this.$store.dispatch('setVariable', { key: 'pickupcitybyid', value: '' });
    this.$store.dispatch('setVariable', { key: 'dropcitybyid', value: '' });
    this.$store.dispatch('setVariable', { key: 'pickuplocationid', value: null });
    this.$store.dispatch('setVariable', { key: 'droplocationid', value: null });
    this.$store.dispatch('setVariable', { key: 'customername', value: '' });
    this.$store.dispatch('setVariable', { key: 'customernumber', value: '' });
    this.$store.dispatch('setVariable', { key: 'paybleamount', value: 0 });
    this.$store.dispatch('setVariable', { key: 'customeremail', value: '' });
    this.$store.dispatch('setVariable', { key: 'bookingid', value: null });
    this.$store.dispatch('setVariable', {
      key: 'options', value: [
        { label: "Local", content: "This is Local content." },
        { label: "Rental", content: "This is Rental content." },
        { label: "Outstation", content: "This is Outstation content." },
      ]
    });
    this.$store.dispatch('setVariable', { key: 'date', value: null });
    this.$store.dispatch('setVariable', { key: 'time', value: null });
    this.$store.dispatch('setVariable', { key: 'pickup', value: "" });
    this.$store.dispatch('setVariable', { key: 'pickupCity', value: "" });
    this.$store.dispatch('setVariable', { key: 'selectedvichicle', value: "" });
    this.$store.dispatch('setVariable', { key: 'selectedpakagehr', value: 0 });
    this.$store.dispatch('setVariable', { key: 'selectedpakagekm', value: 0 });
    this.$store.dispatch('setVariable', { key: 'localTripType', value: null });
    this.$store.dispatch('setVariable', { key: 'members', value: null });
    this.$store.dispatch('setVariable', { key: 'luggage', value: null });
    this.$store.dispatch('setVariable', { key: 'allfieldfill', value: false });
    this.$store.dispatch('setVariable', { key: 'additionalCities', value: [] });
    this.$store.dispatch('setVariable', { key: 'dropdate', value: null });
    this.$store.dispatch('setVariable', { key: 'droptime', value: null });
  }

}
</script>
<style>
</style>