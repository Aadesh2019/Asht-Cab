<template>
<span><v-btn color="amber darken-3" class="mt-14" large block @click="payNow">
  Confirm & Pay
</v-btn></span>
</template>
<script>
 export default {

data() {
    return {
      amount: 0,
    };
  },
  methods: {
    async payNow() {
    console.log('calling the function')
    console.log(this.$store.state.variable.customername)
    console.log(this.$store.state.variable.customernumber)
    console.log(this.$store.state.variable.paybleamount)

  const obj = {
    f_name: 'phonepaypamentgateway',
    name: this.$store.state.variable.customername,
    number: this.$store.state.variable.customernumber,
    amount: this.$store.state.variable.paybleamount,
    MUID: "MUID" + Date.now(),
    transactionId: "ASTH" + Date.now(),
  };

  try {
    const response = await this.$axios.post('/createpayment', obj);

  
    const data = JSON.parse(response.data);
    console.log(data);

    // Check if the response indicates success
    if (data && data.data.instrumentResponse.redirectInfo.url) {
      // Redirect to the provided URL
      const redirectUrl = data.data.instrumentResponse.redirectInfo.url;
      window.location.href = redirectUrl;
    } else {
      console.error("Error initiating payment:");
      alert('"Error initiating payment')
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}


  }

}
</script>
<style>
</style>