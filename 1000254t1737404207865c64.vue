<template>
<span><v-container class="pa-8" style="background: linear-gradient(135deg, #e3f2fd, #ffffff); min-height: 100vh;" fluid>
    <v-card flat class="pa-6" style="background: #ffffff; border-radius: 16px; box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);">
      <h1 class="text-h3 text-center mb-8" style="font-weight: 800; color: #1e88e5;">Refund and Cancellation Policies</h1>
      <v-divider></v-divider>

      <!-- Booking Policy Section -->
      <div class="mt-6">
        <h2 class="text-h5 mb-4" style="font-weight: 600; color: #3949ab;">Booking Policy</h2>
        <p style="color: #37474f; line-height: 1.8;">
          While booking the cab or using any services offered at <strong>complain@ashtcabservices.in</strong>, the following rules apply:
        </p>
        <ul style="list-style: disc; padding-left: 20px; color: #37474f; line-height: 1.8;">
          <li>A booking can be done for a maximum of 180 days before the trip start date and a minimum of 3 hours before the trip start time.</li>
          <li>Booking can be done through our website at <a href="https://ashtcabservices.in" style="color: #1e88e5;">https://ashtcabservices.in</a>, our mobile app, or by calling us at <strong>+91-9925566614</strong>.</li>
          <li>An advance amount needs to be paid to confirm the online cab booking, adjusted against the final amount payable at the trip's end.</li>
          <li>A car will be allotted at least 8 hours before the trip (2 hours for outstation One-Way).</li>
          <li>The customer should carry a printout of the booking voucher or booking confirmation SMS for identification.</li>
        </ul>
        <p style="color: #37474f; line-height: 1.8;">
          <strong>Note:</strong> In case of a vehicle accident or breakdown, an alternate vehicle will be provided, or the advance deposit will be refunded.
        </p>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- Modification Policy -->
      <div>
        <h2 class="text-h5 mb-4" style="font-weight: 600; color: #3949ab;">Modification Policy</h2>
        <p style="color: #37474f; line-height: 1.8;">
          Modifications to the booking can be made without any fee (subject to vehicle availability) up to 24 hours before the pickup time. Requests must be communicated via:
        </p>
        <ul style="list-style: none; padding-left: 0; color: #37474f; line-height: 1.8;">
          <li>- Phone: <strong>+91-9925566614</strong></li>
          <li>- Email: <a href="mailto:complai@ashtcabservices.in" style="color: #1e88e5;">complain@ashtcabservices.in</a></li>
        </ul>
        <p style="color: #37474f; line-height: 1.8;">
          Post-trip modifications may incur additional charges, subject to Asthcab Cab's discretion.
        </p>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- Cancellation Policy -->
      <div>
        <h2 class="text-h5 mb-4" style="font-weight: 600; color: #3949ab;">Cancellation Policy</h2>
        <ul style="list-style: disc; padding-left: 20px; color: #37474f; line-height: 1.8;">
          <li>Cancellation requests must be made via phone or email.</li>
          <li>
            Refund rules for online bookings:
            <ul style="list-style: circle; padding-left: 20px;">
              <li>More than 24 hours before pickup: 75% refund</li>
              <li>24-12 hours before pickup: 60% refund</li>
              <li>12-6 hours before pickup: 50% refund</li>
              <li>Less than 6 hours before pickup: No refund</li>
            </ul>
          </li>
          <li>In case of a cancellation from Asthcab Cab's end, a full refund will be issued.</li>
        </ul>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- Refund Policy -->
      <div>
        <h2 class="text-h5 mb-4" style="font-weight: 600; color: #3949ab;">Refund Policy</h2>
        <p style="color: #37474f; line-height: 1.8;">
          Refunds will be processed within 5-7 business days via the original payment method. Refund requests via WhatsApp or SMS will not be considered.
        </p>
      </div>

      <v-divider class="my-6"></v-divider>

      <!-- Contact Information -->
      <div>
        <h2 class="text-h5 mb-4" style="font-weight: 600; color: #3949ab;">Contact Us</h2>
        <p style="color: #37474f; line-height: 1.8;">
          For further queries, please contact us at:
        </p>
        <ul style="list-style: none; padding-left: 0; color: #37474f;">
          <li>Email: <a href="mailto:complain@ashtcabservices.in" style="color: #1e88e5;">complain@ashtcabservices.in</a></li>
          <li>Phone: <strong>+91-9925566614</strong></li>
        </ul>
      </div>
    </v-card>
  </v-container></span>
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