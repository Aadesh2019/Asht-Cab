<template>
<span><v-container>
  <!-- Header Section -->
  <v-row>
    <v-col cols="12">
      <v-card elevation="3" class="pa-4" style="box-shadow: 0px 6px 18px rgba(0,0,0,0.1); border-radius: 16px;">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 36px;">mdi-taxi</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">24/7 Taxi Services at Your Fingertips</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            At <strong>Asht Cab Service</strong>, we understand that your travel needs can arise at any time. That’s why we offer
            <strong>24×7 taxi services</strong> to ensure you can book a cab whenever you need it. Whether it’s early morning or late at night, our reliable drivers are just a call away.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" outlined rounded style="font-weight: bold; letter-spacing: 1px;">
            Book Now
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Main Features Section -->
  <v-row>
    <!-- Booking a Taxi -->
    <v-col cols="12" md="6">
      <v-card elevation="3" class="pa-4" style="background-color: #f3f5ff; border-radius: 12px;">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 32px;">mdi-book-open-variant</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">Booking a Taxi Made Easy</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            Booking a taxi has never been easier. Our <strong>user-friendly website</strong> allows you to quickly book a taxi without any hassle. Simply enter your pickup location, destination, and select the type of cab you need.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="secondary" outlined rounded style="font-weight: bold; letter-spacing: 1px;">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Best Cab Service -->
    <v-col cols="12" md="6">
      <v-card elevation="3" class="pa-4" style="background-color: #e8f5e9; border-radius: 12px;">
        <v-card-title>
          <v-icon color="success" class="mr-2" style="font-size: 32px;">mdi-star</v-icon>
          <h2 class="font-weight-bold" style="color: #388e3c;">Hire the Best Cab Service in Ahmedabad</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            <strong>Asht Cab Service</strong> stands out with our commitment to safety, comfort, and punctuality. Our <strong>well-trained drivers</strong> ensure a seamless experience for every trip.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" outlined rounded style="font-weight: bold; letter-spacing: 1px;">
            Explore Now
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

  <!-- Additional Features Section -->
  <v-row>
    <v-col cols="12" md="4">
      <v-card elevation="3" class="pa-4" style="border-radius: 12px;">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 32px;">mdi-wallet</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">Affordable Cabs Within Budget</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            Enjoy competitive pricing for all our taxi services. Whether you need a quick ride or a full-day rental, our <strong>transparent pricing</strong> ensures no hidden fees.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card elevation="3" class="pa-4" style="background-color: #f9f9ff; border-radius: 12px;">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 32px;">mdi-airplane</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">Reliable Taxi Hire Online</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            With just a few clicks, reserve a cab that suits your needs. Our wide range of vehicles ensures the perfect ride for solo travelers or families.
          </p>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card elevation="3" class="pa-4" style="border-radius: 12px;">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 32px;">mdi-clock</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">Taxi Service Online: Always Available</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            Our <strong>24/7 taxi services</strong> ensure that you can travel comfortably and on time. Whether it’s an early flight or a late-night meeting, we’ve got you covered.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

  <!-- Dialog Section -->
  <v-row>
    <v-col cols="12">
      <v-card elevation="3" class="pa-4" style="border-radius: 12px; box-shadow: 0px 8px 24px rgba(0,0,0,0.1);">
        <v-card-title>
          <v-icon color="primary" class="mr-2" style="font-size: 36px;">mdi-car</v-icon>
          <h2 class="font-weight-bold" style="color: #3f51b5;">Asht Cab Services: Local & Outstation Taxi Solutions</h2>
        </v-card-title>
        <v-card-text>
          <p class="body-1" style="color: #555;">
            From <strong>Ahmedabad to Mumbai</strong> to Rajkot Airport transfers, we prioritize your safety, comfort, and affordability. Our local and outstation services ensure a stress-free journey for every traveler.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" outlined @click="dialog = true" style="font-weight: bold; letter-spacing: 1px;">
            Discover More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Dialog Content -->
 <!-- Dialog Content -->
<v-dialog v-model="dialog" max-width="800px">
  <v-card>
    <v-card-title class="text-h5 font-weight-bold">More About Asht Cab Services</v-card-title>
    <v-card-text>
      <p>
        Welcome to <strong>Asht Cab Services</strong>, your trusted partner for reliable, affordable, and comfortable taxi rides in Ahmedabad and beyond. Whether you're planning a quick trip within the city or a long-distance journey to another destination, we have you covered with our wide range of services.
      </p>

      <h3 class="font-weight-bold">🌟 Why Choose Asht Cab Services?</h3>
      <p>
        We understand that travel needs vary, and that's why we offer a <strong>comprehensive range of taxi services</strong> to meet your specific requirements. Here’s what makes us stand out:
      </p>

      <ul>
        <li><strong>24/7 Availability:</strong> No matter the time, our services are always available, ensuring you never have to worry about your travel needs.</li>
        <li><strong>Affordable Pricing:</strong> We believe in transparent and competitive pricing with no hidden charges.</li>
        <li><strong>Comfort & Safety:</strong> Our vehicles are well-maintained, and our drivers are professional, experienced, and background-checked to ensure a safe and comfortable journey.</li>
        <li><strong>Easy Booking:</strong> Our user-friendly booking platform allows you to book a cab in just a few clicks.</li>
      </ul>

      <h3 class="font-weight-bold">🚖 Our Services Include:</h3>
      <ul>
        <li><strong>Local Taxi Services:</strong> Ideal for short trips within Ahmedabad. Whether you’re heading to a meeting, running errands, or exploring the city, our local services are perfect for you.</li>
        <li><strong>Outstation Taxi Services:</strong> Planning a long-distance journey? Our outstation cabs are available for one-way or round trips to popular destinations like Mumbai, Rajkot, Surat, and more.</li>
        <li><strong>Airport Transfers:</strong> We offer reliable taxi services to and from major airports, including <strong>Ahmedabad Airport</strong> and <strong>Rajkot’s Hirasar Airport</strong>.</li>
        <li><strong>Corporate Taxi Services:</strong> We cater to businesses with our corporate taxi services, ensuring timely and comfortable transportation for employees and clients.</li>
        <li><strong>Full-Day Rentals:</strong> Need a cab for a full day? We offer affordable packages for sightseeing, business trips, or family outings.</li>
      </ul>

      <h3 class="font-weight-bold">🔒 Safety First</h3>
      <p>
        At Asht Cab Services, your safety is our top priority. All our vehicles are regularly inspected and maintained to ensure a smooth ride. Our drivers are trained to follow strict safety protocols and adhere to traffic rules at all times.
      </p>

      <h3 class="font-weight-bold">💼 Corporate Packages</h3>
      <p>
        We also provide customized corporate packages to suit business needs. Our corporate clients enjoy benefits such as priority bookings, invoicing options, and dedicated customer support.
      </p>

      <h3 class="font-weight-bold">📱 Easy Online Booking</h3>
      <p>
        Our online booking platform is designed to be <strong>simple and user-friendly</strong>. Whether you're booking a local cab or an outstation trip, just enter your details, select your vehicle, and confirm your booking in minutes.
      </p>

      <h3 class="font-weight-bold">🌆 Popular Routes We Serve</h3>
      <ul>
        <li><strong>Ahmedabad to Mumbai</strong> – A convenient, long-distance ride for business or leisure.</li>
        <li><strong>Ahmedabad to Rajkot</strong> – One of our most popular routes, including airport transfers to the new Hirasar Airport.</li>
        <li><strong>Ahmedabad to Surat</strong> – Whether it’s a family visit or a business trip, we ensure a smooth ride.</li>
        <li><strong>Ahmedabad to Vadodara</strong> – Quick, reliable transportation to one of Gujarat’s key cities.</li>
      </ul>

      <h3 class="font-weight-bold">💬 Customer Testimonials</h3>
      <p>
        Don’t just take our word for it! Here’s what our customers have to say about us:
      </p>
      <blockquote>
        "Excellent service! The driver was very professional and courteous. The ride from Ahmedabad to Mumbai was smooth and comfortable. Highly recommended!" – <em>Priya Patel</em>
      </blockquote>
      <blockquote>
        "I booked an outstation cab from Ahmedabad to Rajkot. The process was seamless, and the pricing was very transparent. Great experience overall!" – <em>Ramesh Shah</em>
      </blockquote>

      <h3 class="font-weight-bold">📞 Contact Us</h3>
      <p>
        Have any questions or need assistance? Reach out to our customer support team at:
      </p>
      <ul>
        <li><strong>Phone:</strong> +91 98765 43210</li>
        <li><strong>Email:</strong> support@ashtcabservices.com</li>
      </ul>

      <p class="body-1">
        At <strong>Asht Cab Services</strong>, we’re dedicated to providing a seamless, comfortable, and reliable travel experience for all our customers. Book your ride today and experience the difference!
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click="dialog = false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

  </v-row>
</v-container>
</span>
</template>
<script>
 export default {

  data() {
    return {
      dialog: false, // Controls the dialog visibility
    };
  },

}
</script>
<style>h2 {
  font-size: 24px;
}

p.body-1 {
  line-height: 1.6;
}

.v-card {
  background-color: #f9f9f9;
  border-radius: 8px;
}
</style>