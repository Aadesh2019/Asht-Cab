<template>
<span><d-comp entity_id="1000254t1731134448308c32" comp_name="home4"/>
</span>
</template>
<script>
 export default {

head() {
    return { 
      title: 'Asht Cab Service | 24×7 Reliable Taxi Booking',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/api/getCdnFile/1000254/icons/favicon.ico' }
      ],
      meta: [
        // Basic Meta Tags
        { hid: 'description', name: 'description', content: 'Asht Cab Service provides 24×7 reliable taxi services with professional drivers. Book a cab anytime and travel with comfort and safety.' },
        { hid: 'keywords', name: 'keywords', content: 'cab service, taxi booking, 24x7 cab service, Ahmedabad taxi, online cab booking, city taxi, airport transfer, reliable taxi' },

        // Open Graph Meta Tags (Social Sharing)
        { hid: 'og:title', property: 'og:title', content: 'Asht Cab Service | 24×7 Reliable Taxi Booking' },
        { hid: 'og:description', property: 'og:description', content: 'Book a taxi with ease through Asht Cab Service. Reliable drivers, 24×7 availability, and seamless travel.' },
        { hid: 'og:image', property: 'og:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`},
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: this.$store.state.variable.websitelink },

        // Twitter Card Meta Tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Asht Cab Service | 24×7 Reliable Taxi Booking' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Book a taxi anytime through our hassle-free platform. Reliable drivers and 24x7 availability.' },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`},

        // Robots Meta Tag
        { hid: 'robots', name: 'robots', content: 'index, follow' },

        // Canonical Link for SEO
        { rel: 'canonical', href: this.$store.state.variable.websitelink }
      ],
      script: [
        // Google Structured Data (JSON-LD)
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Asht Cab Service",
            "description": "Asht Cab Service provides reliable 24×7 taxi booking services in Ahmedabad and beyond. Book a cab anytime for safe and comfortable travel.",
            "image": `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`,
            "@id": this.$store.state.variable.websitelink,
            "url": this.$store.state.variable.websitelink,
            "telephone": "+919925566614",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "13 Ratnaraj Green , B/H. HP Petrol Pump, Nana Chiloda",
              "addressLocality": "Ahmedabad",
              "addressRegion": "Gujarat",
              "postalCode": "382330",
              "addressCountry": "India"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            ],
          }
        }
      ]
    };
  }

}
</script>
<style>
</style>