<template>
<span><v-row>
    <!-- Sidebar -->
    <v-col
      cols="3"
      class="pa-4"
      style="
        background: linear-gradient(135deg, #f5f5f5, #e0e0e0);
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
        border-right: 1px solid #ccc;
        z-index:1;
      "
    >
      <!-- User Icon -->
      <v-avatar size="96" class="mb-4" style="margin-top: 20px; background: #ffffff; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <v-icon size="96" color="primary">mdi-account-circle</v-icon>
      </v-avatar>

      <!-- Greeting -->
      <div class="text-center mb-4" style="color: #424242;">
        <h3 style="font-weight: 600;">Hello, {{ user.first_name }}</h3>
      </div>

      <!-- Navigation Options -->
      <v-list dense style="width: 100%;">
        <v-list-item-group color="primary" active-class="custom-active">
          <!-- Your Details -->
          <v-list-item @click="$router.push('/profile/userdetails')" class="hoverable">
            <v-list-item-icon>
              <v-icon color="primary">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Your Details</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Edit Your Details -->
          <v-list-item @click="$router.push('/profile/userupdatedetails')" class="hoverable">
            <v-list-item-icon>
              <v-icon color="primary">mdi-pencil</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Edit Your Details</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Your Bookings -->
          <v-list-item @click="$router.push('/profile/userbookings')" class="hoverable">
            <v-list-item-icon>
              <v-icon color="primary">mdi-calendar-check</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Your Bookings</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Book Your Ride -->
          <v-list-item @click="$router.push('/')" class="hoverable">
            <v-list-item-icon>
              <v-icon color="primary">mdi-car</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Book Your Ride</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <!-- Logout -->
          <v-list-item @click="logout" class="hoverable">
            <v-list-item-icon>
              <v-icon color="error">mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>

    <!-- Main Content Area -->
    <v-col cols="9" class="pa-4">
      <a-comp entity_id="1000254t1736915812083c54" comp_name="userinfo" />
    </v-col>
  </v-row></span>
</template>
<script>
 export default {

head() {
  return { 
    title: 'User Profile | Asht Cab Service',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/api/getCdnFile/1000254/icons/favicon.ico' }
    ],
    meta: [
      { hid: 'description', name: 'description', content: 'View and manage your Asht Cab Service profile, booking history, and account settings.' },
      { hid: 'keywords', name: 'keywords', content: 'user profile, Asht Cab Service, booking history, account settings' },
      { hid: 'og:title', property: 'og:title', content: 'User Profile | Asht Cab Service' },
      { hid: 'og:description', property: 'og:description', content: 'Manage your profile and view your booking history on Asht Cab Service.' },
      { hid: 'og:image', property: 'og:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `${this.$store.state.variable.websitelink}/user/profile` },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
      { rel: 'canonical', href: `${this.$store.state.variable.websitelink}/user/profile`}
    ],
    script: [
      {
        hid: 'structured-data',
        type: 'application/ld+json',
        json: {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "User Profile Page",
          "description": "User profile page to view and manage personal details and booking history on Asht Cab Service.",
          "publisher": {
            "@type": "Organization",
            "name": "Asht Cab Service",
            "logo": {
              "@type": "ImageObject",
              "url": `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`
            }
          }
        }
      }
    ]
  };
},

created() {
    this.fetchUserProfile();
    this.fetchUserBookings();
  },
  data() {
    return {
      updateDialog: false,
      formValid: false,
      user: {
        f_name: 'updateuser',
        first_name: "",
        last_name: "",
        email: "",
        contact: "",
        username: "",
        role: 1,
      },
      bookings: [], // Ensure this is an array
      bookingHeaders: [
        { text: "Booking ID", value: "booking_id" }, // Added booking_id for clarity
        { text: "Car ID", value: "car_id" },
        { text: "Start Location", value: "start_location" },
        { text: "End Location", value: "end_location" },
        { text: "Booking Type", value: "booking_type" },
        { text: "Fare", value: "fare" },
        { text: "Status", value: "status" },
      ],
      rules: {
          required: (value) => !!value || "Required.",
          email: (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
          numeric: (value) => !isNaN(value) || "Must be a number.",
      },
    };
  },
  methods: {
    async fetchUserProfile() {
      this.user = this.$auth.user; // Ensure user data is available
    },
    async fetchUserBookings() {
      try {
        const response = await this.$axios.post("/getUserBookings", { f_name: 'getbookings' });
        console.log("Bookings Data:", response.data.data[0]); // Debugging the raw response
        const fetchedBookings = response.data.data[0];

        // Ensure bookings is always an array
        this.bookings = Array.isArray(fetchedBookings) ? fetchedBookings : [fetchedBookings];
        console.log("Processed Bookings:", this.bookings); // Verify the result
      } catch (error) {
        console.error("Error fetching user bookings:", error);
        this.bookings = [];
      }
    },

    openUpdateDialog() {
      this.updateDialog = true;
    },
    closeUpdateDialog() {
      this.updateDialog = false;
    },
    async updateUser() {
      if (this.$refs.updateForm.validate()) {
        try {
          const response = await this.$axios.post("/updateUser", this.user);
          console.log("User updated successfully:", response.data.message);
          this.fetchUserProfile();
          this.closeUpdateDialog();
        } catch (error) {
          console.error("Error updating user:", error.response?.data || error.message);
        }
      }
    },
    logout(){
      this.$auth.logout();
      this.$router.push('/');
    }
  },

}
</script>
<style>.hoverable {
  transition: background-color 0.2s, box-shadow 0.2s;
}
.hoverable:hover {
  background-color: rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1);
}
.custom-active {
  background-color: #e3f2fd !important;
  border-left: 4px solid #2196f3;
}

</style>