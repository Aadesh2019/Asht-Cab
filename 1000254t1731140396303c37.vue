<template>
<span>
  <v-dialog v-model="$store.state.variable.signupDialog" max-width="600">
    <v-card>
      <!-- Card Title -->
      <v-card-title class="text-center">Sign Up</v-card-title>

      <!-- Card Text -->
      <v-card-text>
        <v-form v-model="validSignup" ref="signupForm">
          <!-- Name Input -->
          <v-text-field
            v-model="name"
            label="Full Name"
            outlined
            required
            :rules="[rules.required]"
          ></v-text-field>

          <!-- Email Input -->
          <v-text-field
            v-model="email"
            label="Email Address"
            outlined
            required
            :rules="[rules.required, rules.email]"
          ></v-text-field>

          <!-- Contact Input -->
          <v-text-field
            v-model="contact"
            label="Contact Number"
            outlined
            required
            :rules="[rules.required]"
          ></v-text-field>

          <!-- Username Input -->
          <v-text-field
            v-model="username"
            label="Username"
            outlined
            required
            :rules="[rules.required]"
          ></v-text-field>

          <!-- Password Input -->
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            outlined
            required
            :rules="[rules.required, rules.password]"
          ></v-text-field>

          <!-- Confirm Password Input -->
          <v-text-field
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            outlined
            required
            :rules="[rules.matchPassword]"
          ></v-text-field>

          <!-- Buttons -->
          <v-col class="mt-4">
            <v-btn block color="primary" :disabled="!validSignup" @click="signup">
              Sign Up
            </v-btn>
            <v-btn block outlined color="primary" class="mt-2" @click="$store.state.variable.signupDialog = false">
              Cancel
            </v-btn>
          </v-col>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</span>
</template>
<script>
 export default {

  data() {
    return {
      validSignup: false,
      name: '',
      email: '',
      contact: '',
      username: '',
      password: '',
      confirmPassword: '',
      rules: {
        required: value => !!value || 'Required.',
        email: value => /.+@.+\..+/.test(value) || 'E-mail must be valid.',
        password: value => value.length >= 6 || 'Password must be at least 6 characters.',
        matchPassword: value => value === this.password || 'Passwords must match.',
      },
    };
  },
  methods: {
    async signup() {
      if (this.password !== this.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      if (this.$refs.signupForm.validate()) {
        // Prepare user details
        const userDetails = {
          first_name: this.name.split(' ')[0],
          last_name: this.name.split(' ').slice(1).join(' ') || '',
          email: this.email,
          contact: this.contact,
          username: this.username,
          password: this.password,
          role: 1, // Default role for regular users
        };

        // Convert to FormData for API call
        const formData = new FormData();
        formData.append('f_name', 'addUser');
        formData.append('first_name', userDetails.first_name);
        formData.append('last_name', userDetails.last_name);
        formData.append('email', userDetails.email);
        formData.append('contact', userDetails.contact);
        formData.append('username', userDetails.username);
        formData.append('password', userDetails.password);
        formData.append('role', userDetails.role);

        // Make the API request to add the user
        try {
          const response = await this.$axios.post('/addOrEditUser', formData);
          console.log('User added successfully:', response.data);
          this.$store.state.variable.signupDialog = false; // Close the dialog
        } catch (error) {
          console.error('Error adding user:', error);
        }
      }
    },

  },

}
</script>
<style>
</style>