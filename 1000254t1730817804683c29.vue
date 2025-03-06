<template>
<span><v-container class="contact-section" fluid style="padding: 40px; background-color: #f4f6f9;">
  <!-- Contact Us Title -->
  <v-row class="text-center mb-6">
    <v-col cols="12">
      <h1 style="color: #0d47a1; font-weight: bold; font-size: 2.5em;">Contact Us</h1>
      <p style="font-size: 1.3em; color: #424242;">We’re here to help you! Get in touch with any queries or feedback.</p>
    </v-col>
  </v-row>

  <!-- Contact Form & Details with Equal Height -->
  <v-row justify="center" align="center" class="pa-4 d-flex align-stretch">

    <!-- Contact Form -->
    <v-col cols="12" md="5">
      <v-card class="pa-5" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background-color: #ffffff; height: 100%;">
        <v-form ref="contactForm" v-model="formValid" @submit.prevent="submitForm">
          <v-text-field v-model="name" label="Name" outlined required color="blue darken-3"></v-text-field>
          <v-text-field v-model="email" label="Email" outlined required color="blue darken-3"></v-text-field>
          <v-text-field v-model="phone" label="Phone" outlined required color="blue darken-3"></v-text-field>
          <v-textarea v-model="message" label="Message" outlined required color="blue darken-3"></v-textarea>
          <v-btn type="submit" block color="blue darken-2" class="mt-4" :disabled="!formValid" style="font-weight: bold;">Send Message</v-btn>
        </v-form>
      </v-card>
    </v-col>

    <!-- Contact Details -->
    <v-col cols="12" md="5">
      <v-card class="pa-5 d-flex flex-column justify-space-between" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); background-color: #0d47a1; height: 100%;">
        <div>
          <h2 class="mb-4" style="color: #fbc02d; text-align: center;">Get in Touch</h2>
          <v-divider style="background-color: #fbc02d;"></v-divider>

          <!-- Phone -->
          <v-row class="align-center my-3">
            <v-icon left color="yellow darken-2">mdi-phone</v-icon>
            <span style="color: #ffffff; font-size: 1.1em;">+91 9925566614</span>
          </v-row>

          <!-- Email -->
          <v-row class="align-center my-3">
            <v-icon left color="yellow darken-2">mdi-email</v-icon>
            <span style="color: #ffffff; font-size: 1.1em;">booking@ashtcabservices.in</span>
          </v-row>

          <!-- Address -->
          <v-row class="align-center my-3">
            <v-icon left color="yellow darken-2">mdi-map-marker</v-icon>
            <span style="color: #ffffff; font-size: 1.1em;">13, Ratnaraj Green, Nana Chiloda, Ahmedabad 382330, Gujarat, India</span>
          </v-row>
        </div>

        <!-- Social Media Links -->
        <div>
          <v-divider style="background-color: #fbc02d;" class="my-4"></v-divider>
          <div class="text-center">
            <h2 style="color: #fbc02d; font-weight: bold;">Follow Us</h2>
            <v-btn icon href="https://facebook.com" target="_blank">
              <v-icon color="white" style="opacity: 0.8;">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon href="https://twitter.com" target="_blank">
              <v-icon color="white" style="opacity: 0.8;">mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon href="https://instagram.com" target="_blank">
              <v-icon color="white" style="opacity: 0.8;">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon href="https://linkedin.com" target="_blank">
              <v-icon color="white" style="opacity: 0.8;">mdi-linkedin</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card>
    </v-col>

  </v-row>
</v-container>
</span>
</template>
<script>
 export default {

  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      formValid: false,
    };
  },
  methods: {
    submitForm() {
      if (this.formValid) {
        // Placeholder for actual form submission logic
        alert('Thank you for reaching out!');
        this.resetForm();
      }
    },
    resetForm() {
      this.name = '';
      this.email = '';
      this.phone = '';
      this.message = '';
      this.formValid = false;
    }
  },

}
</script>
<style>.contact-section {
  color: white;
}
.contact-title {
  font-size: 1.8em;
}
.contact-detail {
  font-size: 1.2em;
}
.contact-icon {
  font-size: 1.5em;
}
</style>