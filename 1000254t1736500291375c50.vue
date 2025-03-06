<template>
<span><!-- Cab Selection Overlay Section -->
<v-card v-if="$store.state.variable.costomerinfo" class="pa-4 d-flex flex-column justify-center align-center" style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    z-index: 200;
    backdrop-filter: blur(5px);
  ">
  <!-- Close Button -->
  <v-btn icon class="close-btn" style="
      position: absolute;
      top: 65px;
      right: 20px;
      color: #fff;
      border-radius: 50%;
      padding: 10px;
      background-color: #f44336;
      font-size: 24px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      z-index:2000;
    " @click="toggleCabSelection">
    <v-icon>mdi-close</v-icon>
  </v-btn>

  <!-- Main Card -->
  <v-card class="pa-4 customer-details-card" style="
      background: #fff;
      width: 90%;
      max-width: 800px;
      border-radius: 20px;
      max-height: 85vh;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    ">
    <v-row>
      <!-- Left Column: Booking Details -->
      <v-col cols="12" md="6" class="pr-md-3">
        <h2 style="color: #046bd2; font-weight: bold; font-size: 24px; text-transform: uppercase;">
          Booking Details
        </h2>
        <v-divider class="mb-3"></v-divider>
        <v-col cols="12">
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Booking Type:</strong> {{ $store.state.variable.selectedOption }}
            <span v-if="$store.state.variable.selectedOption === 'Outstation'">{{this.$store.state.variable.localTripType}}</span>
          </p>
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Pickup Location:</strong> {{ $store.state.variable.pickup }}
          </p>
          <p v-if="$store.state.variable.selectedOption !== 'Rental'" style="font-size: 18px; line-height: 1.6;">
            <strong>Drop Location:</strong> {{ $store.state.variable.pickupCity }}
            <template v-if="$store.state.variable.additionalCities.length > 0">
              <span v-for="(city, index) in $store.state.variable.additionalCities" :key="index">
                {{ index > 0 ? ', ' : '' }}{{ city.cityName }}
              </span>
            </template>

          </p>
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Booking Date and Time:</strong> {{ $store.state.variable.date }} at {{ $store.state.variable.time }}
          </p>
          <p v-if="$store.state.variable.selectedOption ==='Outstation' && $store.state.variable.localTripType === 'Roundtrip'"
            style="font-size: 18px; line-height: 1.6;">
            <strong>Drop Date and Time:</strong> {{ $store.state.variable.dropdate }} at {{
            $store.state.variable.droptime }}
          </p>
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Selected Vehicle:</strong> {{ $store.state.variable.selectedvichicle }}
          </p>
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Total Distance:</strong> {{ $store.state.variable.totaldistanceinword }}
          </p>
          <p v-if="$store.state.variable.selectedOption ==='Rental'" style="font-size: 18px; line-height: 1.6;">
            <strong>Selected Package:</strong> {{ $store.state.variable.selectedpakagehr }} hr and
            {{$store.state.variable.selectedpakagekm}} km
          </p>
          <p style="font-size: 18px; line-height: 1.6;">
            <strong>Members</strong> and <strong>Luggage:</strong> {{ $store.state.variable.members }} and
            {{ $store.state.variable.luggage }}
          </p>
          <p style="font-size: 24px; font-weight: bold; color: #f44336;">
            <strong>Total Price:</strong> ₹{{ $store.state.variable.grandTotal }}
            <p style="font-size: 16px; color: #555;">(Includes all taxes)</p>
          </p>
        </v-col>
      </v-col>

      <!-- Right Column: Personal Details and Payment Methods -->
      <v-col cols="12" md="6" class="pl-md-3">
        <div v-if="!detailsConfirmed">
          <h2 style="color: #046bd2; font-weight: bold; font-size: 24px; text-transform: uppercase;">
            Personal Details
          </h2>
          <v-divider class="mb-3"></v-divider>
          <v-text-field v-model="$store.state.variable.customername" label="Full Name" outlined dense :rules="[rules.required]" class="mb-3">
          </v-text-field>
          <v-text-field v-model="$store.state.variable.customernumber" label="Contact Number" outlined dense :rules="[rules.required]"
            class="mb-3">
          </v-text-field>
          <v-text-field v-model="$store.state.variable.customeremail" label="Email" outlined dense :rules="[rules.required]" class="mb-3">
          </v-text-field>
          <v-btn color="primary" class="mt-2" @click="savebookings" block large>
            Confirm Details
          </v-btn>
        </div>

        <div v-else style="padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
          <p style="font-size: 18px; margin-bottom: 8px;">
            <strong>Full Name:</strong>
            <span style="color: #333;">{{ $store.state.variable.customername }}</span>
          </p>
          <p style="font-size: 18px; margin-bottom: 8px;">
            <strong>Contact Number:</strong>
            <span style="color: #333;">{{ $store.state.variable.customernumber }}</span>
          </p>
          <p style="font-size: 18px; margin-bottom: 8px;">
            <strong>Email:</strong>
            <span style="color: #333;">{{ $store.state.variable.customeremail }}</span>
          </p>
          <p style="font-size: 18px; margin-bottom: 8px;">
            <strong>You have to pay 30% of the Booking in Advanced:</strong>
            <span style="color: green; font-weight: bold;">
            ₹{{ $store.state.variable.paybleamount }} 
            <p style="font-size: 16px; color: #555;">(Includes all taxes)</p>
          </span>
          </p>
          <a-comp entity_id="1000254t1735127729934c46" comp_name="paymentsection" />
        </div>

      </v-col>
    </v-row>
  </v-card>
</v-card></span>
</template>
<script>
 export default {

data() {
    return {
      fullname: "",
      contactNumber: "",
      email: "",
      detailsConfirmed: false,
      paymentMethod: "",
      paymentMethods: ["Credit/Debit Card", "UPI"],
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      upiId: "",
      rules: {
        required: (value) => !!value || "This field is required",
        validCardNumber: (value) =>
          /^\d{16}$/.test(value) || "Enter a valid 16-digit card number",
        validExpiryDate: (value) =>
          /^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(value) || "Enter a valid expiry date",
        validCVV: (value) => /^\d{3,4}$/.test(value) || "Enter a valid CVV",
      },
    };
  },
  methods: {

    async savebookings() {

      if(this.fullname==="" && this.contactNumber==="" && this.email===""){
        console.log("enter all details")
        this.detailsConfirmed = true;
      }

      const bookingPayload = {
        // booking_id	user_id	car_id	start_location	end_location	fare	status	booking_type

        f_name: 'savebookings',
        user_id: this.$auth.user.id,
        car_id:1,
        start_location: this.$store.state.variable.pickup,
        end_location:
          this.$store.state.variable.selectedOption === "Rental"
            ? "Not applicable"
            : this.$store.state.variable.pickupCity +
            (this.$store.state.variable.additionalCities.length > 0
              ? ", " + this.$store.state.variable.additionalCities.cityName.join(", ")
              : ""),
        fare:this.$store.state.variable.grandTotal,
        status:'Pending',
        booking_type: this.$store.state.variable.selectedOption,
      };

      try {
        const response = await this.$axios.post("/bookings", bookingPayload);
        console.log(response.data);
        if (response.data.success) {
          this.$store.state.variable.bookingid = response.data.bookingId;
          console.log("Booking confirmed with payment");
          this.detailsConfirmed = true;
        } else {
          console.error("Booking failed:", response.data.message);
        }
      } catch (error) {
        console.error("Error submitting booking:", error);
      }
    },
    submitBooking(){
            alert('payment start');
    },
    toggleCabSelection() {
      this.$store.state.variable.costomerinfo = false;
      this.$store.state.variable.cabSelectionVisible = false;
      this.$store.state.variable.date = null;
      this.$store.state.variable.time = null;
      this.$store.state.variable.pickup = "";
      this.$store.state.variable.pickupCity = "";
      this.$store.state.variable.localTripType = null;
      this.$store.state.variable.members = null;
      this.$store.state.variable.luggage = null;
      this.$store.state.variable.allfieldfill = false;
      this.$store.state.variable.additionalCities = [];
      this.$store.state.variable.grandTotal=0;
      this.$store.state.variable.costomerinfo = false;
      this.fullname = "";
      this.contactNumber = "";
      this.email = "";
      this.detailsConfirmed = false;
      this.paymentMethod = "";
      this.cardNumber = "";
      this.expiryDate = "";
      this.cvv = "";
      this.upiId = "";
    },
    validateBooking() {
      return (
        this.fullname &&
        this.contactNumber &&
        this.email &&
        this.paymentMethod &&
        (this.paymentMethod === "Credit/Debit Card"
          ? this.cardNumber && this.expiryDate && this.cvv
          : this.paymentMethod === "UPI"
            ? this.upiId
            : true)
      );
    },
  },

}
</script>
<style>
</style>