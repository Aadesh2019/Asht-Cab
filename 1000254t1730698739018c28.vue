<template>
<span><v-container fluid>
  <!-- About Us Section -->
  <v-row align="center" justify="space-between" class="py-6">
    <!-- Image Section -->
    <v-col cols="12" md="6" class="position-relative">
      <v-img src="/api/getCdnFile/1000254/aboutus.jpg" alt="About Us - Asht Cab Services" class="rounded-img"
        max-height="500" max-width="100%"></v-img>
    </v-col>

    <!-- Text Section -->
    <v-col cols="12" md="6" class="d-flex flex-column justify-space-between">
      <!-- About Us -->
      <v-card class=" mb-4"
        style="box-shadow:none;border: 2px solid #046bd2;background-color: white;border-radius: 12px;padding: 16px;">
        <v-card-title class="about-us-title">
          About Us: <span>Asht Cab Services</span>
        </v-card-title>
        <v-card-text>
          <p>
            Welcome to Asht Cab Services, your reliable and trustworthy partner
            for all your transportation needs in and around Ahmedabad. We are
            dedicated to providing exceptional cab services that combine
            convenience, comfort, and safety, ensuring a seamless travel
            experience for our customers. Whether you need a quick local ride
            or a long-distance journey, our fleet of well-maintained vehicles
            and professional drivers is at your service, making your trips as
            smooth as possible.
          </p>
        </v-card-text>
      </v-card>

      <!-- Our Story -->
      <v-card
        style="box-shadow:none;border: 2px solid #046bd2;background-color: white;border-radius: 12px;padding: 16px;">
        <v-card-title>
          <h2 class="story-title">Our Story</h2>
        </v-card-title>
        <v-card-text>
          <p>
            Founded with a vision to simplify travel, Asht Cab Services aims
            to bridge the gap between customer expectations and transportation
            services in Ahmedabad. We started our journey with a commitment
            to offering top-notch services, catering to various travel needs
            such as local commutes, airport transfers, and outstation trips.
            Over the years, we have earned the trust of our customers through
            punctuality, professionalism, and a customer-centric approach.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>




  <v-row>
    <v-col cols="12">
      <v-card
        style="box-shadow: none; border: 2px solid #046bd2; background-color: white; border-radius: 12px; padding: 16px;">
        <v-card-title>
          <h2 style="font-size: 24px; color: #046bd2; font-weight: bold; text-align: center;">
            Our Services
          </h2>
        </v-card-title>
        <v-card-text>
          <p style="font-size: 16px; line-height: 1.6; color: #333;">
            At Asht Cab Services, we offer a variety of services to meet your
            diverse travel needs:
          </p>
          <v-list dense>
            <!-- Local Taxi Service -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong style="color: #046bd2;">
                  Local Taxi Service In Ahmedabad
                </strong>
                  <v-icon color="primary" class="ms-2" small href="/local-taxi-service" style="cursor: pointer;"
                    title="Learn more about Local Taxi Service">
                    mdi-arrow-right-circle
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Need to get around the city? Our local taxi service ensures that
                  you travel comfortably within Ahmedabad, whether you’re heading
                  to work, a shopping spree, or a night out. With our
                  well-maintained cabs and experienced drivers, you can enjoy a
                  hassle-free ride.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- Outstation Cab Service -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong style="color: #046bd2;">
                  Cab Service In Ahmedabad For Outstation
                </strong>
                  <v-icon color="primary" class="ms-2" small href="/outstation-cab-service" style="cursor: pointer;"
                    title="Learn more about Outstation Cab Service">
                    mdi-arrow-right-circle
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                  For those planning to travel outside Ahmedabad, we offer
                  convenient and affordable outstation cab services. Whether it’s
                  a family vacation, business trip, or a weekend getaway, we
                  ensure that you reach your destination safely and on time.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- Rajkot Airport Taxi -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong style="color: #046bd2;">
                  Rajkot Airport Taxi
                </strong>
                  <v-icon color="primary" class="ms-2" small href="/rajkot-airport-taxi" style="cursor: pointer;"
                    title="Learn more about Rajkot Airport Taxi">
                    mdi-arrow-right-circle
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Traveling to or from Rajkot airport? Our dedicated Rajkot
                  airport taxi service ensures that you reach your flight without
                  any delays. We understand the importance of punctuality and
                  strive to make your airport transfers smooth and efficient.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- Rajkot To Hirasar Airport Taxi -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong style="color: #046bd2;">
                  Rajkot To Hirasar Airport Taxi
                </strong>
                  <v-icon color="primary" class="ms-2" small href="/rajkot-hirasar-taxi" style="cursor: pointer;"
                    title="Learn more about Rajkot To Hirasar Airport Taxi">
                    mdi-arrow-right-circle
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                  We also provide specialized taxi services between Rajkot and
                  Hirasar Airport. With our well-maintained vehicles and skilled
                  drivers, you can enjoy a comfortable ride between these two
                  destinations, whether for business or personal travel.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <!-- Ahmedabad To Mumbai Cab -->
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  <strong style="color: #046bd2;">
                  Ahmedabad To Mumbai Cab
                </strong>
                  <v-icon color="primary" class="ms-2" small href="/ahmedabad-mumbai-cab" style="cursor: pointer;"
                    title="Learn more about Ahmedabad To Mumbai Cab">
                    mdi-arrow-right-circle
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle>
                  Traveling between Ahmedabad and Mumbai is now easier than ever
                  with our reliable cab service. We offer safe and convenient
                  transportation between these two major cities, ensuring you
                  reach your destination without any stress or hassle.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>





<v-row>
  <v-col cols="12">
    <v-card
      style="box-shadow: none; border: 2px solid #046bd2; background-color: white; border-radius: 12px; padding: 16px;"
    >
      <v-card-title>
        <h2
          style="font-size: 24px; color: #046bd2; font-weight: bold; text-align: center;"
        >
          Why Choose Asht Cab Services?
        </h2>
      </v-card-title>
      <v-card-text>
        <v-list dense>
          <!-- Comfortable and Clean Vehicles -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" small>mdi-car-clean</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong style="color: #046bd2;">Comfortable and Clean Vehicles</strong>
              </v-list-item-title>
              <v-list-item-subtitle style="line-height: 1.6; color: #333;">
                Our fleet of vehicles is regularly maintained, ensuring cleanliness and comfort for all our passengers.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- Professional Drivers -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" small>mdi-steering</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong style="color: #046bd2;">Professional Drivers</strong>
              </v-list-item-title>
              <v-list-item-subtitle style="line-height: 1.6; color: #333;">
                Our drivers are experienced, courteous, and knowledgeable, ensuring a smooth and safe ride every time.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- 24/7 Availability -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" small>mdi-clock-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong style="color: #046bd2;">24/7 Availability</strong>
              </v-list-item-title>
              <v-list-item-subtitle style="line-height: 1.6; color: #333;">
                We operate round the clock, ensuring that you can book a ride whenever you need it, whether it’s a
                late-night airport transfer or an early-morning meeting.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- Affordable Pricing -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" small>mdi-currency-inr</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong style="color: #046bd2;">Affordable Pricing</strong>
              </v-list-item-title>
              <v-list-item-subtitle style="line-height: 1.6; color: #333;">
                We believe in offering high-quality service at reasonable rates. No hidden fees, just straightforward,
                competitive pricing.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- Customer-Centric Approach -->
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="primary" small>mdi-account-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <strong style="color: #046bd2;">Customer-Centric Approach</strong>
              </v-list-item-title>
              <v-list-item-subtitle style="line-height: 1.6; color: #333;">
                Your satisfaction is our priority. We go the extra mile to ensure that your travel experience with us
                is nothing short of excellent.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>





  <v-row>
  <v-col cols="12">
    <v-card
      style="box-shadow: none; border: 2px solid #046bd2; background-color: white; border-radius: 12px; padding: 16px;"
    >
      <!-- Card Title -->
      <v-card-title style="text-align: center; padding-bottom: 16px;">
        <h2 style="font-size: 28px; font-weight: bold; color: #046bd2;">
          Reviving the Comfort of Flexible Transport
        </h2>
      </v-card-title>

      <!-- Card Content -->
      <v-card-text>
        <v-container>
          <v-row>
            <!-- Section 1 -->
            <v-col cols="12" class="d-flex align-start">
              <v-icon color="primary" size="32px" style="margin-right: 16px;">mdi-car</v-icon>
              <p style="line-height: 1.8; font-size: 16px; color: #333;">
                Experience the ultimate comfort of traveling with <strong>ASHT Cab Services</strong>. At ASHT Cab, we
                provide the most accessible and relaxing cab services. With meticulous supervision and a commitment to
                excellence, our goal is to meet and exceed customer expectations.
              </p>
            </v-col>

            <!-- Section 2 -->
            <v-col cols="12" class="d-flex align-start">
              <v-icon color="primary" size="32px" style="margin-right: 16px;">mdi-calendar-check</v-icon>
              <p style="line-height: 1.8; font-size: 16px; color: #333;">
                Our journey of delivering exceptional cab services began in <strong>2014</strong>. Having reached a
                significant milestone of <strong>10 years</strong>, we have earned the trust of over
                <strong>1,100 satisfied customers</strong>. Our services extend to more than <strong>250 major cities</strong>, with our regional office located in
                <strong>Ahmedabad</strong>. With steadfast support, ASHT became a corporate entity and was officially
                incorporated on <strong>February 15, 2024</strong>.
              </p>
            </v-col>

            <!-- Section 3 -->
            <v-col cols="12" class="d-flex align-start">
              <v-icon color="primary" size="32px" style="margin-right: 16px;">mdi-handshake</v-icon>
              <p style="line-height: 1.8; font-size: 16px; color: #333;">
                <strong>Aadesh Cab Services</strong>, our sister firm, has recently joined us on this journey. Together, we aim to create lasting memories with our customers.
              </p>
            </v-col>

            <!-- Section 4 -->
            <v-col cols="12" class="d-flex align-start">
              <v-icon color="primary" size="32px" style="margin-right: 16px;">mdi-clock-outline</v-icon>
              <p style="line-height: 1.8; font-size: 16px; color: #333;">
                With the increasing demand for the fastest taxi services, <strong>ASHT Cab</strong> is dedicated to
                offering a wide variety of options, available around the clock.
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-col>
</v-row>

  <!-- Row 1: Vision and Mission -->
  <v-row>
    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #046bd2; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #046bd2; font-weight: bold; font-size: 20px;">
          <v-icon color="primary" size="28px" style="margin-right: 12px;">mdi-eye-outline</v-icon>
          Our Vision
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            Our vision is to make every customer’s journey more meaningful and delightful. We strive to enhance safety
            and professionalism in our service while incorporating the most innovative solutions through technology and
            the dedication of our hardworking teams.
          </p>
          <p>
            Our commitment to delivering exceptional service is driven by the goal of providing a smooth and seamless
            journey experience. Additionally, our vision is to offer technology-driven, cost-effective services to our
            loyal customers.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #ffc107; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #ffc107; font-weight: bold; font-size: 20px;">
          <v-icon color="warning" size="28px" style="margin-right: 12px;">mdi-target</v-icon>
          Our Mission
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            Our mission is to build strong relationships and maintain long-term bonds with our customers. We are
            committed to understanding their needs and meeting those diverse demands with exceptional solutions.
          </p>
          <p>
            With the growing demand for our cab services, we aspire to expand across various cities and towns.
            Additionally, we aim to redefine our services using advanced technology that will elevate our cab operations
            to new heights.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- Row 2: Team Members and Our Fleet -->
  <v-row class="mt-6">
    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #4caf50; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #4caf50; font-weight: bold; font-size: 20px;">
          <v-icon color="success" size="28px" style="margin-right: 12px;">mdi-account-group</v-icon>
          Team Members
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            The remarkable journey of ten years began with the bold leadership of our Company Director, Mr. Hiren
            Pankhaniya, and our Company CEO, Mrs. Nirmalaben Pankhaniya. Alongside these two visionary leaders, we have
            a highly professional and hardworking team that is dedicated to delivering exceptional service to our
            customers.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #03a9f4; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #03a9f4; font-weight: bold; font-size: 20px;">
          <v-icon color="info" size="28px" style="margin-right: 12px;">mdi-car-multiple</v-icon>
          Our Fleet
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            When traveling with ASHT Cabs, you will enjoy the latest automobile models that align with your standards
            and provide a luxurious travel experience. Our vehicles are equipped with cutting-edge technology to enhance
            the comfort and elegance of your journey.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- Row 3: Contact Us Now and Contact Us -->
  <v-row class="mt-6">
    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #f44336; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #f44336; font-weight: bold; font-size: 20px;">
          <v-icon color="error" size="28px" style="margin-right: 12px;">mdi-phone</v-icon>
          Contact Us Now!
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            Stop worrying and enjoy the most reliable and comfortable cab service with ASHT. If you have any questions
            about your trip, contact us, and we will help turn your journey into a memorable adventure.
          </p>
          <p>
            Book now for reliable, safe, and convenient travel. Ride with ASHT Cab and enjoy the experience!
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        style="box-shadow: none; border: 2px solid #9c27b0; background-color: white; border-radius: 12px; padding: 16px;"
      >
        <v-card-title style="color: #9c27b0; font-weight: bold; font-size: 20px;">
          <v-icon color="purple" size="28px" style="margin-right: 12px;">mdi-map-marker</v-icon>
          Contact Us
        </v-card-title>
        <v-card-text style="color: #333; font-size: 15px;">
          <p>
            If you are looking for a taxi in Ahmedabad or need reliable transportation for your next trip, look no
            further than Asht Cab Services. We are here to cater to all your travel needs with professionalism and
            quality.
          </p>
          <p>
            Book your next ride with Asht Cab Services and experience a new standard of comfort and convenience!
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</v-container></span>
</template>
<script>
 export default {

}
</script>
<style>

.about-us-title span,
.story-title {
  color: black;
}

/* Image Styling */
.rounded-img {
  border-radius: 12px;
  box-shadow: none;
  position: relative;
  z-index: 0;
}

</style>