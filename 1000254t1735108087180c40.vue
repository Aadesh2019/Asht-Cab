<template>
<span><v-container class="add-cars-div">
    <!-- Header -->
    <v-row>
      <v-col>
        <v-btn @click="openDialog" color="#8a01df" dark rounded>Add New Car</v-btn>
        <v-btn @click="fetchCars()" color="gray" dark rounded>reload</v-btn>
      </v-col>
    </v-row>

    <!-- Cars Table -->
    <v-data-table
      :headers="headers"
      :items="cars"
      item-key="car_id"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn small @click="editCar(item)" color="blue">Edit</v-btn>
        <v-btn small @click="deleteCar(item.car_id)" color="red">Delete</v-btn>
      </template>
    </v-data-table>

    <!-- Add/Edit Car Dialog -->
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ isEditing ? 'Edit Car' : 'Add New Car' }}</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- Car Name Field -->
            <v-text-field
              v-model="car.car_name"
              label="Car Name"
              :rules="[rules.required]"
              required
            ></v-text-field>

            <!-- Car Model Field -->
            <v-text-field
              v-model="car.modelv"
              label="Car Model"
            ></v-text-field>

            <!-- Car Variant Field -->
            <v-text-field
              v-model="car.variant"
              label="Car Variant"
            ></v-text-field>

            <!-- Car Price Field -->
            <v-text-field
              v-model="car.km_price"
              label="Price (Per Km)"
              type="number"
              :rules="[rules.required, rules.numeric]"
              required
            ></v-text-field>

            <!-- Car Status Dropdown -->
            <v-select
              v-model="car.status"
              :items="['Available', 'Unavailable']"
              label="Car Status"
              :rules="[rules.required]"
              required
            ></v-select>

            <!-- Image Upload -->
            <v-file-input
              v-model="car.image_url"
              label="Car Image"
              accept="image/*"
              prepend-icon="mdi-image"
              :rules="[rules.required]"
              required
              show-size
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="closeDialog">Cancel</v-btn>
          <button color="primary" @click="saveCar">Save</button>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container></span>
</template>
<script>
 export default {

created() {
    this.fetchCars();
  },

  data() {
    return {
      dialog: false,
      isEditing: false,
      valid: false,
      car: {
        car_id: null, // Include car_id for editing
        car_name: '',
        modelv: '',
        variant: '',
        km_price: '',
        status: 'Available',
        image_url: null, // Store the image file
      },
      cars: [], // Populated from the API
      headers: [
        { text: 'Car Name', value: 'car_name' },
        { text: 'Model', value: 'modelv' },
        { text: 'Variant', value: 'variant' },
        { text: 'Price', value: 'km_price' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      rules: {
        required: (value) => !!value || 'Required.',
        numeric: (value) => !isNaN(value) || 'Must be a number.',
      },
    };
  },

  methods: {
    // Fetch all cars from the backend
    fetchCars() {
      this.$axios
        .post('/get-cars', { f_name: 'getCars' })
        .then((res) => {
          this.cars = res.data;
        })
        .catch((error) => {
          console.error('Error fetching cars:', error);
        });
    },

    // Open the dialog for adding or editing
    openDialog() {
      this.car = {
        car_id: null,
        car_name: '',
        modelv: '',
        variant: '',
        km_price: '',
        status: 'Available',
        image_url: null,
      };
      this.isEditing = false;
      this.dialog = true;
    },

    // Close the dialog
    closeDialog() {
      this.dialog = false;
    },

    // Save car (Add or Edit based on isEditing flag)
    saveCar() {
      if (this.$refs.form.validate()) {
        const formData = new FormData();
        formData.append('f_name', this.isEditing ? 'editCar' : 'addCar');
        if (this.isEditing) {
          formData.append('car_id', this.car.car_id); // Include car_id for editing
        }
        formData.append('car_name', this.car.car_name);
        formData.append('modelv', this.car.modelv);
        formData.append('variant', this.car.variant);
        formData.append('km_price', this.car.km_price);
        formData.append('status', this.car.status);
        if (this.car.image_url) {
          formData.append('image_url', this.car.image_url); // Handle image file
        }

        this.$axios
          .post('/addOrEditCar', formData)
          .then((response) => {
            console.log(response.data);
            this.fetchCars(); // Refresh car list
            this.closeDialog(); // Close the dialog
          })
          .catch((error) => {
            console.error('Error saving car:', error);
          });
      }
    },

    // Pre-fill the form for editing and open the dialog
    editCar(item) {
      this.car = { ...item }; // Clone the car object to avoid mutating original data
      this.isEditing = true;
      this.dialog = true;
    },

    // Delete a car by car_id
    deleteCar(car_id) {
      this.$axios
        .post('/deleteCar', { car_id })
        .then(() => {
          this.cars = this.cars.filter((car) => car.car_id !== car_id); // Update the list locally
        })
        .catch((error) => {
          console.error('Error deleting car:', error);
        });
    },
  },

  mounted() {
    this.fetchCars();
  },

}
</script>
<style>
</style>