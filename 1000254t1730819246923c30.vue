<template>
<span><v-footer :style="{ background: 'linear-gradient(180deg, rgba(4, 107, 210, 0.8) 0%, rgba(255, 255, 255, 1) 100%)' }"
  class="footer" style="z-index:2;">
  <v-container style="font-weight: 800;" class="pa-4">
    <v-row justify="center">

      <!-- About Section -->
      <v-col cols="12" sm="4" class="text-center">
        <v-card flat
          style="background: rgba(255, 255, 255, 0.3); border-radius: 12px; padding: 10px; display: inline-block; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
          <v-img src="/api/getCdnFile/1000254/ashtlogo.png" max-width="140" max-height="80" contain></v-img>
        </v-card>
        <div style="margin-top: 10px;">
          <v-btn icon color="black" :href="social.link" v-for="(social, index) in socialMedia" :key="index"
            target="_blank" style="font-weight: 800;margin: 0 5px; transition: transform 0.3s;"
            @mouseover="$event.currentTarget.style.transform = 'scale(1.2)'"
            @mouseleave="$event.currentTarget.style.transform = 'scale(1)'">
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>

      <!-- Quick Links -->
      <v-col cols="12" sm="4">
        <v-card flat
          style="background: rgba(255, 255, 255, 0.3); border-radius: 12px; padding: 20px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
          <h3 class="text-h4" style="color: black; text-align: center; margin-bottom: 15px;">Quick Links</h3>
          <v-list-item-group>
            <v-list-item  v-for="(link, index) in quickLinks" :key="index" @click="$router.push(link.to)"
              style="cursor: pointer; padding: 3px; transition: background 0.3s, transform 0.3s; border-radius: 8px;"
              @mouseover="$event.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)'; $event.currentTarget.style.transform = 'scale(1.05)'"
              @mouseleave="$event.currentTarget.style.background = ''; $event.currentTarget.style.transform = 'scale(1)'">
              <v-list-item-title class="text-h7" style="color: black; font-weight: 700; text-align: center;">
                {{ link.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-col>

      <!-- Contact Details -->
      <v-col cols="12" sm="4">
        <v-card flat
          style="background: rgba(255, 255, 255, 0.3); border-radius: 12px; padding: 20px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
          <h3 class="text-h4" style="color: black; text-align: center; margin-bottom: 15px;">Contact Us</h3>
          <v-row class="align-center my-2">
            <v-icon class="mr-2" style="color: black;">mdi-phone</v-icon>
            <span class="text-h7" style="color: black; font-weight: 700;">+91 9925566614</span>
          </v-row>
          <v-row class="align-center my-2">
            <v-icon class="mr-2" style="color: black;">mdi-email</v-icon>
            <span class="text-h7" style="color: black; font-weight: 700;">booking@ashtcabservices.in</span>
          </v-row>
          <v-row class="align-center my-2">
            <v-icon class="mr-2" style="color: black;">mdi-email</v-icon>
            <span class="text-h7" style="color: black; font-weight: 700;">complain@ashtcabservices.in</span>
          </v-row>
          <v-row class="align-center my-2">
            <v-icon class="mr-2" style="color: black;">mdi-email</v-icon>
            <span class="text-h7" style="color: black; font-weight: 700;">info@ashtcabservices.in</span>
          </v-row>
          <v-row class="align-center my-2">
            <v-icon class="mr-2" style="color: black;">mdi-map-marker</v-icon>
            <span class="text-h7" style="color: black; font-weight: 700;">
              Nana Chiloda, Ahmedabad, Gujarat
            </span>
          </v-row>
        </v-card>
      </v-col>

    </v-row>

    <v-divider color="black" class="my-4"></v-divider>

    <!-- Terms and Policy Section -->
    <v-row justify="center" class="mt-4">
      <v-col class="text-center">
        <div>
          <span
            style="color: blue; text-decoration: underline; cursor: pointer; margin-right: 10px; font-weight: 600;"
            @click="$router.push('/terms-and-conditions')"
          >
            Terms and Conditions
          </span>
          |
          <span
            style="color: blue; text-decoration: underline; cursor: pointer; margin-left: 10px; font-weight: 600;"
            @click="$router.push('/privacy-policy')"
          >
            Privacy Policy
          </span>
          |
          <span
            style="color: blue; text-decoration: underline; cursor: pointer; margin-left: 10px; font-weight: 600;"
            @click="$router.push('/Refund-Cancellation')"
          >
            Refund and Cancellation policy
          </span>
        </div>
      </v-col>
    </v-row>

    <!-- Copyright Section -->
    <v-row justify="center">
      <v-col class="text-center mb-0 body-2 black--text">
        <p class="mb-0 body-2">&copy; 2024 Asht Cab Services. All rights reserved.</p>
      </v-col>
    </v-row>
  </v-container>
</v-footer></span>
</template>
<script>
 export default {

data() {
    return {
      quickLinks: [
        { title: "Home", to: "/" },
        { title: "About Us", to: "/about" },
        { title: "Services", to: "/services" },
        { title: "Best Tourist Place", to: "/best-tourist-place" },
      ],
      
      socialMedia: [
        { icon: "mdi-facebook", link: "https://www.facebook.com/share/1AGEETjpmj/?mibextid=wwXIfr" },
        { icon: "mdi-twitter", link: "https://www.twitter.com" },
        { icon: "mdi-instagram", link: "https://www.instagram.com/ashtcab?igsh=MXdsbHl6NjVpd25rYg%3D%3D&utm_source=qr" },
        { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/asht-cab-services-private-limited-7948a02a7" },
      ],
    };
  },

}
</script>
<style>.footer-upper {
  padding: 40px 0;
}

.footer-lower {
  padding: 10px 0;
}

.logo-container {
  max-width: 140px;
}

.v-list-item {
  cursor: pointer;
}

.v-list-item-title {
  color: #fbc02d;
  font-size: 14px;
}

h3.text-h6 {
  color: #fbc02d;
  font-weight: bold;
  margin-bottom: 16px;
}

</style>