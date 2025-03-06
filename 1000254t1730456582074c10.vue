<template>
<span><a-comp entity_id="1000254t1730698739018c28" comp_name="aboutAshtCab" /></span>
</template>
<script>
 export default {

head() { 
    return {
      title: 'About Us | Asht Cab Service',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/api/getCdnFile/1000254/icons/favicon.ico' }
      ],
      meta: [
        // Basic Meta Tags
        { hid: 'description', name: 'description', content: 'Learn more about Asht Cab Service, your trusted partner for reliable and 24×7 taxi booking services in Ahmedabad. Dedicated to comfort, safety, and customer satisfaction.' },
        { hid: 'keywords', name: 'keywords', content: 'about Asht Cab Service, cab company Ahmedabad, taxi services, reliable taxi booking, 24x7 cab services, safe travel' },

        // Open Graph Meta Tags (Social Sharing)
        { hid: 'og:title', property: 'og:title', content: 'About Us | Asht Cab Service' },
        { hid: 'og:description', property: 'og:description', content: 'At Asht Cab Service, we are dedicated to providing reliable and professional taxi booking services. Learn more about our mission and commitment to customers.' },
        { hid: 'og:image', property: 'og:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.variable.websitelink}/about`},

        // Twitter Card Meta Tags
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'About Us | Asht Cab Service' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Discover more about Asht Cab Service, a trusted cab service provider offering 24×7 taxi booking for safe and convenient travel.' },
        { hid: 'twitter:image', name: 'twitter:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },

        // Robots Meta Tag
        { hid: 'robots', name: 'robots', content: 'index, follow' },

        // Canonical Link for SEO
        { rel: 'canonical', href: `${this.$store.state.variable.websitelink}/about` }
      ],
      script: [
        // Google Structured Data (JSON-LD)
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us | Asht Cab Service",
            "description": "Asht Cab Service is dedicated to providing reliable, professional taxi services in Ahmedabad and surrounding areas. Learn more about our mission and values.",
            "url": `${this.$store.state.variable.websitelink}/about`,
            "mainEntity": {
              "@type": "Organization",
              "name": "Asht Cab Service",
              "logo": `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png`,
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
            }
          }
        }
      ]
    };
  }

}
</script>
<style>
</style>