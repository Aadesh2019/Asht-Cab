<template>
<span><v-card elevation="8" class="mx-auto my-12 pa-4" max-width="600" :style="{ borderRadius: '12px', background: 'linear-gradient(135deg, #f4f4f8, #e8f0fe)' }">
  
  <!-- Card Title -->
  <v-card-title class="text-h5 font-weight-bold navy--text justify-center">
    ✨ Edit User Profile
  </v-card-title>

  <!-- Card Subtitle (Optional) -->
  <v-card-subtitle class="justify-center grey--text text--darken-1">
    Update your profile details below
  </v-card-subtitle>

  <!-- Card Content -->
  <v-card-text>
    <v-form ref="updateForm" lazy-validation>

      <!-- First Name -->
      <v-text-field
        v-model="user.first_name"
        label="First Name"
        :rules="[rules.required]"
        required
        color="primary"
        outlined
        dense
      ></v-text-field>

      <!-- Last Name -->
      <v-text-field
        v-model="user.last_name"
        label="Last Name"
        :rules="[rules.required]"
        required
        color="primary"
        outlined
        dense
      ></v-text-field>

      <!-- Email -->
      <v-text-field
        v-model="user.email"
        label="Email"
        :rules="[rules.required, rules.email]"
        required
        color="primary"
        outlined
        dense
      ></v-text-field>

      <!-- Contact -->
      <v-text-field
        v-model="user.contact"
        label="Contact"
        :rules="[rules.required, rules.numeric]"
        required
        color="primary"
        outlined
        dense
      ></v-text-field>

      <!-- Username -->
      <v-text-field
        v-model="user.username"
        label="Username"
        :rules="[rules.required]"
        required
        color="primary"
        outlined
        dense
      ></v-text-field>

    </v-form>
  </v-card-text>

  <!-- Card Actions (Buttons) -->
  <v-card-actions class="justify-center">
    <v-btn color="success" elevation="5" class="white--text font-weight-bold" @click="updateUser">
      💾 Save Changes
    </v-btn>
    <v-btn color="error" elevation="5" class="white--text font-weight-bold" @click="resetForm">
      ❌ Cancel
    </v-btn>
  </v-card-actions>

</v-card>
</span>
</template>
<script>
 export default {

  data() {
    return {
      user: {
        f_name: "updateuser",
        first_name: this.$auth.user.first_name || "",
        last_name: this.$auth.user.last_name || "",
        email: this.$auth.user.email || "",
        contact: this.$auth.user.contact || "",
        username: this.$auth.user.username || "",
        role: this.$auth.user.role || 1,
        id: this.$auth.user.id,
      },
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
        numeric: (value) => !isNaN(value) || "Must be a number.",
      },
    };
  },
  methods: {
    // ✅ Method to update user profile
    async updateUser() {
      if (this.$refs.updateForm.validate()) {
        try {
          const response = await this.$axios.post("/updateuser", this.user);
          this.updatelogin();
          console.log("User updated successfully:", response.data.message);
        } catch (error) {
          console.error(
            "Error updating user:",
            error.response?.data || error.message
          );
        }
      }
    },

    // ✅ Method to handle login after updating user details
    async updatelogin() {
      console.log("email:", this.user.email);
      console.log("Password:", this.$auth.user.password);

      const loginObj = {
        username: this.user.email,
        password: this.$auth.user.password,
      };

      await this.$login(loginObj);
    },

    // ✅ Method to reset the form fields
    resetForm() {
      this.user = {
        first_name: this.$auth.user.first_name || "",
        last_name: this.$auth.user.last_name || "",
        email: this.$auth.user.email || "",
        contact: this.$auth.user.contact || "",
        username: this.$auth.user.username || "",
        role: this.$auth.user.role || 1,
        id: this.$auth.user.id,
      };

      // ✅ Reset form validation
      if (this.$refs.updateForm) {
        this.$refs.updateForm.reset();
      }
    },
  },

}
</script>
<style>
</style>