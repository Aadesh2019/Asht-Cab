<template>
<span><v-row class="mt-5" :class="{
      'justify-center align-center': $vuetify.breakpoint.smAndDown
    }">
  <!-- Left Column -->
  <v-col cols="12" md="4">
    <v-card flat class="mb-4"
      style="border-radius: 12px; max-width: 400px; position: relative; overflow: visible; z-index: 5">
      <!-- Button Options -->
      <div style="position: absolute; top: 10px; left: 5px; z-index: 10; display: flex; gap: 5px;">
        <v-btn v-for="(option, index) in $store.state.variable.options" :key="index"
          :class="['bordered-btn', { 'active-btn': $store.state.variable.selectedOption === option.label }]" text
          rounded small @click="selectOption(option.label)"
          style="font-weight: bold; transition: all 0.3s ease; min-width: 60px; height: 38px;">
          {{ option.label }}
          <!-- Outstation Options -->
          <div v-if="option.label === 'Outstation' && $store.state.variable.selectedOption === 'Outstation'"
            style="position: absolute; top: 40px; left: 0; width: 150px; background: rgba(255, 255, 255, 0.9); border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 10px; animation: slide-in 0.3s ease-out; z-index: 100;"
            @click.stop>
            <v-radio-group v-model="$store.state.variable.localTripType" column>
              <v-radio label="Oneway" value="Oneway" @click.stop></v-radio>
              <v-radio label="Roundtrip" value="Roundtrip" @click.stop></v-radio>
            </v-radio-group>
          </div>
        </v-btn>
      </div>
      <!-- Image Section -->
      <v-img src="/api/getCdnFile/1000254/bookingimg.jpg" width="97%" height="auto" max-height="380" contain
        style=" border-radius: 0; border-top-left-radius: 12px; border-top-right-radius: 12px;"></v-img>

      <!-- Form Section -->
      <v-card-text class="pa-3"
        style="background: linear-gradient(90deg, rgba(4, 107, 210, 0.8) 0%, rgba(255, 255, 255, 1) 100%);">
        <v-row>
          <!-- Date Picker -->
          <v-col cols="12" md="6">
            <v-menu v-model="dateMenu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
              offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="$store.state.variable.date" label="Select Date" prepend-icon="mdi-calendar"
                  readonly v-bind="attrs" v-on="on" outlined dense style="font-size: 12px; height: 36px;">
                </v-text-field>
              </template>
              <v-date-picker v-model="$store.state.variable.date" no-title @input="dateMenu = false"></v-date-picker>
            </v-menu>
          </v-col>

          <!-- Time Picker -->
          <v-col cols="12" md="6">
            <v-text-field v-model="$store.state.variable.time" label="Select Time" prepend-icon="mdi-clock" outlined
              dense readonly @click="openPickupTimePicker" style="font-size: 12px; height: 36px;"></v-text-field>
            <v-dialog v-model="pickupTimePickerDialog" persistent max-width="320">
              <v-card>
                <v-card-title class="text-center">Select Pickup Time</v-card-title>
                <v-card-text>
                  <v-time-picker v-model="pickupFormattedTime" format="ampm" @update:input="updatePickupTime">
                  </v-time-picker>
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn text color="primary" @click="pickupTimePickerDialog = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="savePickupTime">OK</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>

        <!-- Drop Date and Time Picker -->
        <v-row
          v-if="$store.state.variable.selectedOption === 'Outstation' && $store.state.variable.localTripType === 'Roundtrip'">
          <v-col cols="12" md="6">
            <v-menu v-model="dropDateMenu" :close-on-content-click="false" :nudge-right="40"
              transition="scale-transition" offset-y min-width="auto">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="$store.state.variable.dropdate" label="Select Drop Date"
                  prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on" outlined dense
                  style="font-size: 12px; height: 36px;">
                </v-text-field>
              </template>
              <v-date-picker v-model="$store.state.variable.dropdate" no-title @input="dropDateMenu = false">
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field v-model="$store.state.variable.droptime" label="Select Drop Time" prepend-icon="mdi-clock"
              outlined dense readonly @click="openDropTimePicker" style="font-size: 12px; height: 36px;"></v-text-field>
            <v-dialog v-model="dropTimePickerDialog" persistent max-width="320">
              <v-card>
                <v-card-title class="text-center">Select Drop Time</v-card-title>
                <v-card-text>
                  <v-time-picker v-model="dropFormattedTime" format="ampm" @update:input="updateDropTime">
                  </v-time-picker>
                </v-card-text>
                <v-card-actions class="justify-center">
                  <v-btn text color="primary" @click="dropTimePickerDialog = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="saveDropTime">OK</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>


        <!-- Members and Luggage -->
        <v-row class="mt-2">
          <v-col cols="12" md="6">
            <v-text-field v-model="$store.state.variable.members" label="Number of Members"
              prepend-icon="mdi-account-group" outlined dense type="number" style="font-size: 12px; height: 36px;">
            </v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="$store.state.variable.luggage" label="Luggage (in Kg)"
              prepend-icon="mdi-bag-suitcase" outlined dense type="number" style="font-size: 12px; height: 36px;">
            </v-text-field>
          </v-col>
        </v-row>


        <!-- Pickup Location -->
        <v-row>
          <v-col cols="12">
            <v-autocomplete v-model="$store.state.variable.pickup" :items="pickupSuggestions" item-text="description"
              label="Pickup Location" prepend-icon="mdi-map-marker" outlined dense
              style="font-size: 12px; height: 36px;" @update:search-input="onPickupInputChange" @change="setPickupKey"
              :loading="pickupLoading" hide-no-data />
          </v-col>
        </v-row>




        <!-- Drop Location -->
        <v-row
          v-if="$store.state.variable.selectedOption === 'Local' || $store.state.variable.selectedOption === 'Outstation'">
          <v-col cols="12">
            <v-autocomplete v-model="$store.state.variable.pickupCity" :items="dropSuggestions" item-text="description"
              label="Enter Drop Location" prepend-icon="mdi-map-marker-radius" outlined dense
              style="font-size: 12px; height: 36px;" @update:search-input="onDropInputChange" @change="setDropKey"
              :loading="dropLoading" hide-no-data />
          </v-col>
        </v-row>



        <!-- Add More City -->
        <v-row
          v-if="$store.state.variable.selectedOption ==='Outstation' && $store.state.variable.localTripType === 'Roundtrip'"
          v-for="(city, index) in $store.state.variable.additionalCities" :key="index">
          <v-col cols="12">
            <v-autocomplete v-model="city.cityName" :items="city.suggestions" item-text="description" label="City Name"
              prepend-icon="mdi-map-marker" outlined dense style="font-size: 12px; height: 36px;"
              @update:search-input="(query) => onAdditionalCityInputChange(query, index)"
              @change="(selectedCity) => updateAdditionalCity(index, { ...city, cityName: selectedCity.description, place_id: selectedCity.place_id })"
              :loading="city.loading" hide-no-data />
          </v-col>
          <v-col cols="12" class="d-flex justify-end">
            <v-btn color="error" small @click="removeCity(index)">Remove</v-btn>
          </v-col>
        </v-row>

        <!-- Add More City Line -->
        <v-row
          v-if="$store.state.variable.selectedOption === 'Outstation' && $store.state.variable.localTripType === 'Roundtrip'"
          class="my-2">
          <v-col class="d-flex justify-center align-center">
            <div class="d-flex align-center">
              <div style="flex: 1; height: 1px; background-color: #ccc; margin-right: 10px;"></div>
              <v-btn text color="primary" style="font-size: 14px;" @click="addMoreCity">
                + Add More City
              </v-btn>
              <div style="flex: 1; height: 1px; background-color: #ccc; margin-left: 10px;"></div>
            </div>
          </v-col>
        </v-row>




        <!-- Choose Vehicle Button -->
        <v-row class="mt-3">
          <v-col>
            <v-btn color="primary" block large @click="chooseVehicle" class="elevation-2">
              Choose Vehicle
            </v-btn>
            <p v-if="$store.state.variable.allfieldfill"
              style="color: red; font-size: 12px; margin-top: 8px; text-align: center; font-weight: bold;">
              ⚠️ Please fill all input fields!
            </p>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
  <!-- Right Column -->
  <v-col cols="12" md="8" class="d-none d-md-flex">
    <v-card flat class="d-flex flex-column justify-center align-center" style="position: relative;">
      <!-- New Text Section -->
      <div class="text-center" style="
        color: #046bd2; 
        font-size: 28px; 
        font-weight: bold; 
        background: linear-gradient(90deg, rgba(4, 107, 210, 0.1), rgba(255, 255, 255, 0.5));
        padding: 10px 15px;
        border-radius: 12px;
        display: inline-block;
        margin-bottom: 8px; /* Reduced margin */
      ">
        Asht Cab Service:
        <span style="font-size: 24px; color: #007bff;">Your Trusted Taxi Solution in Gujarat</span>
      </div>
      <!-- Image Section -->
      <v-img src="/api/getCdnFile/1000254/sideimg.jpg" max-width="900" max-height="700" contain></v-img>
    </v-card>
  </v-col>
</v-row></span>
</template>
<script>
 export default {

created() {
    this.fetchUserCurrentLocation();
  },
  data() {
    return {
      dateMenu: false,
      dropDateMenu: false, // Separate menu for drop date
      pickupTimePickerDialog: false, // Separate dialog for pickup time
      dropTimePickerDialog: false, // Separate dialog for drop time
      pickupFormattedTime: "",
      dropFormattedTime: "",
      pickupSuggestions: [],
      dropSuggestions: [],
      pickupLoading: false,
      dropLoading: false,
      pickupid: '',
      dropid: '',
      disableSearchTemp: false,
    };
  },
  watch: {
    pickupCity() {
      this.calculateDistance();
    },
  },
  computed: {
    selectedContent() {
      const selected = this.$store.state.variable.options.find(
        (option) => option.label === this.$store.state.variable.selectedOption
      );
      return selected ? selected.content : "";
    },
  },
  methods: {
    fetchUserCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            this.getCityFromCoordinates(latitude, longitude);
          },
          (error) => {
            console.error("Error fetching location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    getCityFromCoordinates(latitude, longitude) {
      const obj = {
        f_name: 'getpresentlocation',
        latitude: latitude,
        longitude: longitude
      }
      this.$axios
        .post("/getpresentLocation", obj)
        .then((response) => {
          const data = JSON.parse(response.data);
          console.log(data);
          const results = data.results;
          console.log(results);
          if (results.length > 0) {
            this.disableSearchTemp = true;
            const currentAddress = {
              description: results[0].formatted_address,
              place_id: results[0].place_id,
            }
            this.pickupSuggestions = [currentAddress];
            const placeId = results[0].place_id;
            this.pickupid = placeId;
            this.$store.state.variable.pickup = results[0].formatted_address;
          }
          setTimeout(()=>{
              this.disableSearchTemp = false;
          },10)
        })
        .catch((error) => {
          console.error("Error fetching pickup suggestions:", error);
        })

    },
    onPickupInputChange(query) {
      if (this.disableSearchTemp) {
        return;
      }
      if (!query || query.length < 3) {
        this.pickupSuggestions = [];
        return;
      }

      this.pickupLoading = true;
      const reqObj = { f_name: "locationsapi", query };

      this.$axios
        .post("/getLocation", reqObj)
        .then((response) => {
          const data = JSON.parse(response.data);
          const predictions = data.predictions || [];
          this.pickupSuggestions = predictions.map((item) => ({
            description: item.description,
            place_id: item.place_id,
          }));
        })
        .catch((error) => {
          console.error("Error fetching pickup suggestions:", error);
          this.pickupSuggestions = [];
        })
        .finally(() => {
          this.pickupLoading = false;
        });
    },

    onDropInputChange(query) {
      if (!query || query.length < 3) {
        this.dropSuggestions = [];
        return;
      }

      this.dropLoading = true;
      const reqObj = { f_name: "locationsapi", query };

      this.$axios
        .post("/getLocation", reqObj)
        .then((response) => {
          const data = JSON.parse(response.data);
          const predictions = data.predictions || [];
          this.dropSuggestions = predictions.map((item) => ({
            description: item.description,
            place_id: item.place_id,
          }));
        })
        .catch((error) => {
          console.error("Error fetching drop suggestions:", error);
          this.dropSuggestions = [];
        })
        .finally(() => {
          this.dropLoading = false;
        });
    },
    setPickupKey(selectedPickup) {
      const selectedItem = this.pickupSuggestions.find(
        (item) => item.description === selectedPickup
      );
      if (selectedItem) {
        this.pickupid = selectedItem.place_id
      }
    },
    setDropKey(selectedDrop) {
      const selectedItem = this.dropSuggestions.find(
        (item) => item.description === selectedDrop
      );
      if (selectedItem) {
        this.dropid = selectedItem.place_id
      }
    },
    selectOption(option) {
      
      this.$store.state.variable.selectedOption = option;
      this.$store.state.variable.date = null;
      this.$store.state.variable.time = null;
      this.$store.state.variable.pickup = "";
      this.$store.state.variable.pickupCity = "";
      this.$store.state.variable.localTripType = null;
      this.$store.state.variable.members = null;
      this.$store.state.variable.luggage = null;
      this.$store.state.variable.allfieldfill = false;
      this.$store.state.variable.additionalCities = [];
      this.$store.state.variable.grandTotal = 0;
      this.$store.state.variable.costomerinfo = false;
      this.fetchUserCurrentLocation();
    },
    chooseVehicle() {
      if (this.$store.state.variable.selectedOption === "Rental") {
        if (
          !this.$store.state.variable.date ||
          !this.$store.state.variable.time ||
          !this.$store.state.variable.pickup ||
          !this.$store.state.variable.members ||
          !this.$store.state.variable.luggage
        ) {
          this.$store.state.variable.allfieldfill = true;
          return;
        }
        else {
          this.$store.state.variable.cabSelectionVisible = true;
          return;
        }
      }
      this.calculateTotalDistance();

      if (
        !this.$store.state.variable.date ||
        !this.$store.state.variable.time ||
        !this.$store.state.variable.pickup ||
        !this.$store.state.variable.members ||
        !this.$store.state.variable.luggage
      ) {
        this.$store.state.variable.allfieldfill = true;
      } else if (
        this.$store.state.variable.selectedOption === "Local" &&
        !this.$store.state.variable.pickupCity
      ) {
        this.$store.state.variable.allfieldfill = true;
      } else if (
        this.$store.state.variable.selectedOption === "Outstation" &&
        (!this.$store.state.variable.pickupCity ||
          !this.$store.state.variable.localTripType)
      ) {
        this.$store.state.variable.allfieldfill = true;
      } else {
        this.$store.state.variable.allfieldfill = false;
        const distance = this.$store.state.variable.totaldistance / 1000;
        console.log('distance' + distance);
        if (distance <= 35) {
          this.$store.state.variable.cabSelectionVisible = true;
        } else {
          this.$store.state.variable.localTripType = "Oneway";
          this.$store.state.variable.selectedOption = "Outstation";
          this.$store.state.variable.cabSelectionVisible = true;
        }
      }
    },

    // Add a new city object to the additionalCities array
    addMoreCity() {
      const obj = {
        suggestions: [],
        cityName: '',
        loading: false,
        place_id: null,
      };
      this.$store.state.variable.additionalCities.push(obj);
    },

    // Handle the autocomplete logic for each city in the additionalCities array
    onAdditionalCityInputChange(query, index) {
      if (!query || query.length < 3) {
        this.$store.state.variable.additionalCities[index].suggestions = [];
        return;
      }

      const updatedCities = [...this.$store.state.variable.additionalCities];
      updatedCities[index].loading = true;

      const reqObj = { f_name: 'locationsapi', query };

      this.$axios
        .post('/getLocation', reqObj)
        .then((response) => {
          const data = JSON.parse(response.data);
          const predictions = data.predictions || [];
          updatedCities[index].suggestions = predictions.map((item) => ({
            description: item.description,
            place_id: item.place_id,
          }));
        })
        .catch((error) => {
          console.error(`Error fetching suggestions for city index ${index}:`, error);
          updatedCities[index].suggestions = [];
        })
        .finally(() => {
          updatedCities[index].loading = false;
          this.$store.dispatch('setVariable', { key: 'additionalCities', value: updatedCities });
        });
    },

    // Update a specific city in the additionalCities array
    updateAdditionalCity(index, updatedCity) {
      const updatedCities = [...this.$store.state.variable.additionalCities];
      updatedCities[index] = updatedCity;

      this.$store.dispatch('setVariable', { key: 'additionalCities', value: updatedCities });
      this.calculateTotalDistance();
    },

    // Remove a city from the additionalCities array
    removeCity(index) {
      const updatedCities = [...this.$store.state.variable.additionalCities];
      updatedCities.splice(index, 1);

      this.$store.dispatch('setVariable', { key: 'additionalCities', value: updatedCities });
      this.calculateTotalDistance();
    },


    openTimePicker() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      this.formattedTime = `${hours}:${minutes}`;
      this.timePickerDialog = true;
    },
    updateTime(value) {
      this.formattedTime = value;
    },
    saveTime() {
      const [hours, minutes] = this.formattedTime.split(":");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = hours % 12 || 12;
      this.$store.state.variable.time = `${formattedHours}:${minutes} ${ampm}`;
      this.timePickerDialog = false;
    },
    calculateTotalDistance() {
      const obj1 = {
        f_name: 'calculatedistance',
        pickupid: this.pickupid,
        dropid: this.dropid,
      };

      this.$axios
        .post('/gettotaldistance', obj1)
        .then((response) => {
          try {
            const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

            // Extract the distance value
            const distanceValue = data.rows?.[0]?.elements?.[0]?.distance?.value;
            this.$store.state.variable.totaldistanceinword = data.rows?.[0]?.elements?.[0]?.distance?.text;
            console.log(this.$store.state.variable.totaldistanceinword)

            if (distanceValue !== undefined) {
              this.$store.state.variable.totaldistance = distanceValue;
              console.log(distanceValue);
            } else {
              console.error('Distance value not found in response');
            }
          } catch (error) {
            console.error('Error parsing response data:', error);
          }
        })
        .catch((error) => {
          console.error('Error fetching distance:', error);
        });

      const obj2 = {
        f_name: 'getlocaltravellcity',
        pickupid: this.pickupid,
      }
      this.$axios.post('/getlocalcity', obj2)
        .then((response) => {
          const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;
          if (data.status === 'OK' && data.result) {
            // Extract the city name
            const cityName = data.result.name;
            console.log('pickup City Name:', cityName);

            // Save the city name in the Vuex store
            this.$store.state.variable.pickupcitybyid = cityName;
            this.getpickuplocationid();
          } else {
            console.error('Error: No valid result found in the response');
            this.$store.state.variable.pickupCity = null; // Reset in case of error
          }
        })
        .catch((error) => {
          console.error('Error fetching city details:', error);
          this.$store.state.variable.pickupcitybyid = null; // Reset in case of error
        });
      const obj3 = {
        f_name: 'getlocaltravellcity',
        pickupid: this.dropid,
      }
      this.$axios.post('/getlocaldropcity', obj3)
        .then((response) => {
          const data = typeof response.data === 'string' ? JSON.parse(response.data) : response.data;

          if (data.status === 'OK' && data.result) {
            // Extract the city name
            const cityName = data.result.name;
            console.log('drop City Name:', cityName);

            // Save the city name in the Vuex store
            this.$store.state.variable.dropcitybyid = cityName;
            this.getdroplocationid();
          } else {
            console.error('Error: No valid result found in the response');
            this.$store.state.variable.dropcitybyid = null; // Reset in case of error
          }
        })
        .catch((error) => {
          console.error('Error fetching city details:', error);
          this.$store.state.variable.dropcitybyid = null; // Reset in case of error
        });
    },
    async getpickuplocationid() {
      try {
        const obj = {
          f_name: 'getpickuplocationid',
          pickupcity: this.$store.state.variable.pickupcitybyid,
        };
        const response = await this.$axios.post('/getpickuplocationid', obj);
        this.$store.state.variable.pickuplocationid = response.data.pickuplocationid;
        console.log('id: ' + this.$store.state.variable.pickuplocationid)
      } catch (error) {
        console.error('Error fetching location id:', error);
        this.$store.state.variable.pickuplocationid = null;
      }
    },
    async getdroplocationid() {
      try {
        const obj = {
          f_name: 'getpickuplocationid',
          pickupcity: this.$store.state.variable.dropcitybyid,
        };
        const response = await this.$axios.post('/getpickuplocationid', obj);
        this.$store.state.variable.droplocationid = response.data.pickuplocationid;
        console.log('id2: ' + this.$store.state.variable.droplocationid)
      } catch (error) {
        console.error('Error fetching location id:', error);
        this.$store.state.variable.droplocationid = null;
      }
    },
    openPickupTimePicker() {
      this.pickupFormattedTime = this.$store.state.variable.time || "";
      this.pickupTimePickerDialog = true;
    },
    updatePickupTime(value) {
      this.pickupFormattedTime = value;
    },
    savePickupTime() {
      this.$store.state.variable.time = this.pickupFormattedTime;
      this.pickupTimePickerDialog = false;
    },
    openDropTimePicker() {
      this.dropFormattedTime = this.$store.state.variable.droptime || "";
      this.dropTimePickerDialog = true;
    },
    updateDropTime(value) {
      this.dropFormattedTime = value;
    },
    saveDropTime() {
      this.$store.state.variable.droptime = this.dropFormattedTime;
      this.dropTimePickerDialog = false;
    },
  }

}
</script>
<style>/* Default button styling */
.bordered-btn {
  background-color: #046bd2;
  color: white !important;
  box-shadow: none;
}

/* Highlight the active option */
.active-btn {
  background-color: #e0e0e0;
  color: #046bd2 !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Add hover effect */
.bordered-btn:hover {
  background-color: #e0e0e0;
  color: #046bd2;
}

/* Add focus/active effect */
.bordered-btn:focus {
  box-shadow: 0 0 12px rgba(4, 107, 210, 0.6);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-50%) translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }
}



</style>