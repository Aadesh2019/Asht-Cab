<template>
<span><v-container>
  <div v-if="$auth.loggedIn && $auth.user.role == 0">
    <c-comp entity_id="1000254t1735120681413c41" comp_name="adminTopsection" />
    <d-comp entity_id="1000254t1735121535499c42" comp_name="adminDrawer" />
    <v-main class="mt-14">
      <a-comp entity_id="1000254t1735125967185c43" comp_name="adminSections" class="mt-5" />
    </v-main>
  </div>
</v-container></span>
</template>
<script>
 export default {

head() {
    return { 
      title: 'Admin Profile | Asht Cab Service Dashboard',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/api/getCdnFile/1000254/icons/favicon.ico' }
      ],
      meta: [
        { hid: 'description', name: 'description', content: 'Admin profile and dashboard for managing Asht Cab Service operations, bookings, and user data.' },
        { hid: 'keywords', name: 'keywords', content: 'admin profile, Asht Cab Service dashboard, admin panel, manage bookings, user data' },
        { hid: 'og:title', property: 'og:title', content: 'Admin Profile | Asht Cab Service Dashboard' },
        { hid: 'og:description', property: 'og:description', content: 'Access and manage Asht Cab Service bookings, user profiles, and operational data from the admin dashboard.' },
        { hid: 'og:image', property: 'og:image', content: `${this.$store.state.variable.websitelink}/api/getCdnFile/1000254/ashtlogo.png` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: `${this.$store.state.variable.websitelink}/admin/profile` },
        { hid: 'robots', name: 'robots', content: 'noindex, nofollow' },
        { rel: 'canonical', href: `${this.$store.state.variable.websitelink}/admin/profile` }
      ],
      script: [
        {
          hid: 'structured-data',
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Admin Profile Page",
            "description": "Admin profile and dashboard for managing Asht Cab Service operations.",
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
  }

}
</script>
<style>
</style>