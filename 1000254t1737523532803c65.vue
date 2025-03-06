<template>
<span><div>
    <h1>Loding...</h1>
    <p> Cheking payment status for  Merchant Transaction ID: {{ $route.query.id}}</p>
</div>


</span>
</template>
<script>
 export default {

  props: ['props'], // Ensure props are passed correctly

  data() {
    return {
      id: null, // Initialize `id`
    };
  },

  created() {
    // Set `id` from query params when the component is created
    this.id = this.$route.query.id || null;

    // Call `checkstatus` only if `id` exists
    if (this.id) {
      this.checkstatus();
    } else {
      alert("Transaction ID not found. Redirecting to the home page.");
      this.$router.push('/');
    }
  },

  methods: {
    async checkstatus() {
      try {
        const obj = {
          f_name: 'paymentstatus',
          paymentid: this.id, // Use `this.id` correctly
        };

        
        const response = await this.$axios.post('/checkstatus', obj);
       
        
        const data = response.data; 
       
        console.log("Check Status Response:", data);

        if (data.success) {
          alert("Payment confirmed successfully.");
        } else {
          alert("Payment failed. Please try again.");
        }

        
        this.$router.push('/');
      } catch (error) {
        console.error("Error during checkstatus:", error.response || error.message || error);
        alert("An error occurred while checking payment status. Please try again later.");
      }
    },
  },

}
</script>
<style>
</style>