<template>
<span>
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="auto">
      
  <v-img style="width:600px; height:350px;" src="/api/getCdnFile/1000254/images tp/12 places.png"  alt="Centered Image"> </v-img>

    </v-col>
  </v-row>
  <br /> 
  <br /> 
  
  <v-row class="d-flex justify-space-between">
    <!-- First Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered1 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered1 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered1 = true"
        @mouseleave="isHovered1 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">
        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Gandhi.png"
        ></v-img>

      </v-card-text>
        <v-card-title class="text-h5 font-weight-bold text-center">
            Gandhi Ashram
        </v-card-title>
      </v-card>
    </v-col>

    <!-- Second Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered2 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered2 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered2 = true"
        @mouseleave="isHovered2 = false"
      >
      <v-card-text class="pa-4" style="padding-bottom: 0;">
        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Sabarmati.png"
        ></v-img>
      </v-card-text>
        <v-card-title class="text-h5 font-weight-bold text-center">
            Sabarmati Riverfront
        </v-card-title>
      </v-card>
    </v-col>



    <!-- 3 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered3 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered3 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered3 = true"
        @mouseleave="isHovered3 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Adalaj.png"
        ></v-img>

      </v-card-text>
        <v-card-title class="text-h5 font-weight-bold text-center">
            Adalaj Step-Well
        </v-card-title>
      </v-card>
    </v-col>


    <!-- 4 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered4 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered4 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered4 = true"
        @mouseleave="isHovered4 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Hatheee.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Hathee Singh Jain Temple
        </v-card-title>
      </v-card>
      
    </v-col>


    <!-- 5 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered5 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered5 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered5 = true"
        @mouseleave="isHovered5 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Kankaria.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Kankaria Lake
        </v-card-title>
      </v-card>
      
    </v-col>


    <!-- 6 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered6 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered6 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered6 = true"
        @mouseleave="isHovered6 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Gujarat .png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Gujarat Science City
        </v-card-title>
      </v-card>
      
    </v-col>


    <!-- 7 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered7 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered7 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered7 = true"
        @mouseleave="isHovered7 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Iskcon.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Iskcon Temple
        </v-card-title>
      </v-card>
      
    </v-col>



    <!-- 8 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered8 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered8 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered8 = true"
        @mouseleave="isHovered8 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Dada.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Dada Temple
        </v-card-title>
      </v-card>
      
    </v-col>



    <!-- 9 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered9 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered9 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered9 = true"
        @mouseleave="isHovered9 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Sidi.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Sidi Saiyyed Mosque
        </v-card-title>
      </v-card>
      
    </v-col>



    <!-- 10 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered10 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered10 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered10 = true"
        @mouseleave="isHovered10 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Statue .png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Statue Of Unity
        </v-card-title>
      </v-card>
      
    </v-col>




    <!-- 11 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered11 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered11 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered11 = true"
        @mouseleave="isHovered11 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Sun.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Sun Temple
        </v-card-title>
      </v-card>
      
    </v-col>




    <!-- 12 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered12 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered12 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered12 = true"
        @mouseleave="isHovered12 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/White.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            White Desert
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 13 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered13 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered13 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered13 = true"
        @mouseleave="isHovered13 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Somnath.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Somnath Temple
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 14 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered14 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered14 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered14 = true"
        @mouseleave="isHovered14 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Patan.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Patan Rani Satapwell
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 15 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered15 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered15 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered15 = true"
        @mouseleave="isHovered15 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Dwarka.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Dwarka
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 16 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered16 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered16 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered16 = true"
        @mouseleave="isHovered16 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Betdwarka.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Betdwarka
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 17 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered17 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered17 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered17 = true"
        @mouseleave="isHovered17 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Girnar.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
           Girnar
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 18 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered18 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered18 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered18 = true"
        @mouseleave="isHovered18 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Ambaji.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Ambaji
        </v-card-title>
      </v-card>
      
    </v-col>





    <!-- 19 Card -->
    <v-col cols="auto">
      <v-card
        outlined
        max-width="340"
        :style="{
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isHovered19 ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: isHovered19 ? '0px 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
        }"
        @mouseenter="isHovered19 = true"
        @mouseleave="isHovered19 = false"
      >

      <v-card-text class="pa-4" style="padding-bottom: 0;">

        <v-img
          
          src="/api/getCdnFile/1000254/images tp/Porbandar.png"
        ></v-img>

      </v-card-text>
      <v-card-title class="text-h5 font-weight-bold text-center">
            Porbandar (Gandhi Smruti Mandir)
        </v-card-title>
      </v-card>
      
    </v-col>
  </v-row>  
</v-container>




<!-- style="width:400px; height:350px;" --></span>
</template>
<script>
 export default {

head() {
    return {
      title: 'Best Tourist Places in Gujarat | Asht Cab Service',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/api/getCdnFile/1000254/icons/favicon.ico' }
      ],
      meta: [
        // Basic Meta Tags
        { hid: 'description', name: 'description', content: 'Explore the best tourist places in Gujarat with Asht Cab Service. Discover historical landmarks, natural beauty, and must-visit destinations. Book a taxi today for your travel convenience.' },
        { hid: 'keywords', name: 'keywords', content: 'tourist places in Gujarat, best tourist destinations, Gujarat tourism, sightseeing in Gujarat, cab for tourist places, travel in Gujarat, Asht Cab Service' },

        // Open Graph Meta Tags (Social Sharing)
        { hid: 'og:title', property: 'og:title', content: 'Best Tourist Places in Gujarat | Asht Cab Service' },
        { hid: 'og:description', property: 'og:description', content: 'Discover the top tourist attractions in Gujarat with our reliable cab services. Explore historical landmarks, natural wonders, and more.' },
        { hid: 'og:image', property: 'og:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.variable.websitelink}/best-tourist-place` },

        // Twitter Card Meta Tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Best Tourist Places in Gujarat | Asht Cab Service' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Explore Gujarat\'s top tourist destinations with Asht Cab Service. Reliable travel options for your journey.' },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },

        // Robots Meta Tag
        { hid: 'robots', name: 'robots', content: 'index, follow' },

        // Canonical Link for SEO
        { rel: 'canonical', href: `${this.$store.state.variable.websitelink}/best-tourist-place`}
      ],
      script: [
        // Google Structured Data (JSON-LD)
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Best Tourist Places in Gujarat | Asht Cab Service",
            "description": "Explore the top tourist attractions in Gujarat with Asht Cab Service. Book cabs for historical landmarks, natural wonders, and more.",
            "url": `${this.$store.state.variable.websitelink}/best-tourist-place`,
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Asht Cab Service",
              "logo": `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`,
              "telephone": "+919925566614",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "13 Ratnaraj Green , B/H. HP Petrol Pump, Nana Chiloda",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382330",
                "addressCountry": "India"
              },
            }
          }
        }
      ]
    };
  },

  data() {
    return {
      isHovered1: false,
      isHovered2: false,
      isHovered3: false,
      isHovered4: false,
      isHovered5: false,
      isHovered6: false,
      isHovered7: false,
      isHovered8: false,
      isHovered9: false,
      isHovered10: false,
      isHovered11: false,
      isHovered12: false,
      isHovered13: false,
      isHovered14: false,
      isHovered15: false,
      isHovered16: false,
      isHovered17: false,
      isHovered18: false,
      isHovered19: false,

    };
  },

}
</script>
<style>
</style>