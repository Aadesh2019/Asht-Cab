<template>
<span><v-card
    class="elevation-3"
    style="
      max-width: 800px;
      margin: auto;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    "
  >
    <!-- Card Header -->
    <v-card-title
      class="d-flex justify-space-between align-center"
      style="
        background-color: #f5f5f5;
        border-bottom: 1px solid #e0e0e0;
        padding: 16px 24px;
      "
    >
      <span style="font-size: 22px; font-weight: 600; color: #424242;">
        User Profile
      </span>
      <v-icon color="primary" size="28">mdi-account</v-icon>
    </v-card-title>

    <!-- Card Content -->
    <v-card-text style="padding: 24px;">
      <v-row>
        <!-- Left Column -->
        <v-col cols="6">
          <p style="margin-bottom: 12px;">
            <strong>First Name:</strong>
            <span style="color: #3f51b5;">{{ user.first_name }}</span>
          </p>
          <p style="margin-bottom: 12px;">
            <strong>Last Name:</strong>
            <span style="color: #3f51b5;">{{ user.last_name }}</span>
          </p>
          <p style="margin-bottom: 12px;">
            <strong>Email:</strong>
            <span style="color: #3f51b5;">{{ user.email }}</span>
          </p>
        </v-col>

        <!-- Right Column -->
        <v-col cols="6">
          <p style="margin-bottom: 12px;">
            <strong>Contact:</strong>
            <span style="color: #3f51b5;">{{ user.contact }}</span>
          </p>
          <p style="margin-bottom: 12px;">
            <strong>Username:</strong>
            <span style="color: #3f51b5;">{{ user.username }}</span>
          </p>
          <p style="margin-bottom: 12px;">
            <strong>Role:</strong>
            <v-chip
              :color="user.role === 1 ? 'blue' : 'red'"
              dark
              style="font-weight: 600;"
            >
              {{ user.role === 1 ? "User" : "Admin" }}
            </v-chip>
          </p>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- Card Actions -->
    <v-card-actions
      class="d-flex justify-center"
      style="
        background-color: #f5f5f5;
        border-top: 1px solid #e0e0e0;
        padding: 16px;
      "
    >
      <v-btn
        color="primary"
        outlined
        style="
          font-weight: 600;
          text-transform: capitalize;
          transition: box-shadow 0.3s ease;
        "
        @mouseover="hoverEffect = true"
        @mouseleave="hoverEffect = false"
        :style="hoverEffect ? 'box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);' : ''"
        @click="$router.push('/profile/userupdatedetails')"
      >
        Edit Details
      </v-btn>
    </v-card-actions>
</v-card>



</span>
</template>
<script>
 export default {

created() {
    this.fetchUserProfile();
  },
data() {
    return {
        user: {
        first_name: "",
        last_name: "",
        email: "",
        contact: "",
        username: "",
        role: 1,
      },
      hoverEffect: false,
    };
  },
  methods: {
    async fetchUserProfile() {
      this.user = this.$auth.user; // Ensure user data is available
    },
  },

}
</script>
<style>
</style>