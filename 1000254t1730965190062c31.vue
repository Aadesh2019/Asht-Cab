<template>
<span><v-container>
  <v-row>
    <!-- Benefits of Taxi Services -->
    <v-col cols="12">
      <v-card style="box-shadow:none;border: 2px solid #046bd2;background-color: #f9f9ff;border-radius: 12px;padding: 24px;">
        <v-card-title class="text-h4 font-weight-bold" style="color: #046bd2; text-align: center;">
          <v-icon style="color: #046bd2; font-size: 32px;" class="mr-2">mdi-taxi</v-icon> Benefits of Taxi Services
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-calendar</v-icon> Corporate Outings
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Book our cab service for the best travel experience. You can book company trips and enjoy a hassle-free journey.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-clock</v-icon> Availability
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Customers can book taxi services 24/7 and travel comfortably at any time.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-refresh</v-icon> Flexible Booking
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Book or cancel your cab services anytime with our quick and convenient booking facilities.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-steering</v-icon> Experienced Drivers
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Our professional drivers ensure safe and efficient travel with extensive route knowledge.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-currency-usd</v-icon> Affordable
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Enjoy cost-effective travel solutions tailored to your needs.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-clock-outline</v-icon> Save Time
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Avoid waiting for public transport. Book your taxi online and enjoy an effortless travel experience.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Book Your Ride -->
    <v-col cols="12">
      <v-card style="box-shadow:none;border: 2px solid #046bd2;background-color: #f0f8ff;border-radius: 12px;padding: 24px;">
        <v-card-title class="text-h4 font-weight-bold" style="color: #046bd2; text-align: center;">
          <v-icon style="color: #046bd2; font-size: 32px;" class="mr-2">mdi-car</v-icon> Book Your Ride!
        </v-card-title>
        <v-card-text style="color: #333;">
          <p>
            Book your journey today! Choose a comfortable and budget-friendly taxi service, available 24/7. Rent a cab and enjoy a stress-free ride to your destination.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- About Us -->
    <v-col cols="12">
      <v-card style="box-shadow:none;border: 2px solid #046bd2;background-color: #fff;border-radius: 12px;padding: 24px;">
        <v-card-title class="text-h4 font-weight-bold" style="color: #046bd2; text-align: center;">
          <v-icon style="color: #046bd2; font-size: 32px;" class="mr-2">mdi-road</v-icon> About Us
        </v-card-title>
        <v-card-text style="color: #333;">
          <p>
            Our mission is to provide reliable, affordable, and eco-friendly transportation options. We embrace technology to ensure customer satisfaction and deliver smooth, efficient services.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Why Choose Us -->
    <v-col cols="12">
      <v-card style="box-shadow:none;border: 2px solid #046bd2;background-color: #e6f7ff;border-radius: 12px;padding: 24px;">
        <v-card-title class="text-h4 font-weight-bold" style="color: #046bd2; text-align: center;">
          <v-icon style="color: #046bd2; font-size: 32px;" class="mr-2">mdi-star-circle</v-icon> Why Choose Us?
        </v-card-title>
        <v-card-text>
          <p style="color: #333;">
            We leverage advanced technologies to offer a seamless and exceptional travel experience.
          </p>
          <v-list>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-shield-check</v-icon> Safe Journey
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Travel securely with well-maintained vehicles and experienced drivers following all safety regulations.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-timer</v-icon> Expedition Services
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Reach your destination on time with our punctual and efficient cab services.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item style="margin-bottom: 12px;">
              <v-list-item-content>
                <v-list-item-title class="text-h6 font-weight-medium" style="color: #333;">
                  <v-icon class="mr-2">mdi-translate</v-icon> Multilingual Drivers
                </v-list-item-title>
                <v-list-item-subtitle style="color: #555;">
                  Our drivers are fluent in various languages, helping you navigate new cities effortlessly.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Conclusion -->
    <v-col cols="12">
      <v-card style="box-shadow:none;border: 2px solid #046bd2;background-color: #f5f5f5;border-radius: 12px;padding: 24px;">
        <v-card-title class="text-h4 font-weight-bold" style="color: #046bd2; text-align: center;">
          <v-icon style="color: #046bd2; font-size: 32px;" class="mr-2">mdi-check-circle</v-icon> Conclusion
        </v-card-title>
        <v-card-text style="color: #333;">
          <p>
            Asht Cab Service is your trusted partner for all travel needs in Gujarat. From Ahmedabad to Rajkot or Mumbai, enjoy seamless travel with online booking and comfortable vehicles. Hire a cab today for a hassle-free journey!
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</span>
</template>
<script>
 export default {

}
</script>
<style>h2 {
  font-size: 24px;
}

p.body-1 {
  line-height: 1.6;
}


</style>