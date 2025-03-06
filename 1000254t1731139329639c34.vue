<template>
<span><v-container class="add-cars-div">
  <!-- Header -->
  <v-row>
    <v-col>
      <v-btn @click="openDialog('add')" color="#8a01df" dark rounded>Add New Car</v-btn>
      <v-btn @click="fetchCars()" color="gray" dark rounded>Reload</v-btn>
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
      <v-btn small @click="openDialog('edit', item)" color="blue">Edit</v-btn>
      <v-btn small @click="deleteCar(item.car_id)" color="red">Delete</v-btn>
    </template>
  </v-data-table>

  <!-- Add/Edit Car Dialog -->
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ dialogType === 'edit' ? 'Edit Car' : 'Add New Car' }}</span>
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
          <!-- <a-comp entity_id="1000254t1736767141928c51" comp_name="uploadcarImage" />  -->
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="closeDialog">Cancel</v-btn>
        <v-btn color="primary" @click="dialogType === 'edit' ? updateCar() : saveCar()">
          {{ dialogType === 'edit' ? 'Update' : 'Save' }}
        </v-btn>
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
      dialogType: '', // Added here
      valid: false,
      car: {
        car_id: null,
        car_name: '',
        modelv: '',
        variant: '',
        km_price: '',
        status: 'Available',
      },
      cars: [],
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

    openDialog(type, item = null) {
      this.dialogType = type; // Use this.dialogType
      if (type === 'edit' && item) {
        this.car = { ...item };
      } else {
        this.car = {
          car_id: null,
          car_name: '',
          modelv: '',
          variant: '',
          km_price: '',
          status: 'Available',
        };
      }
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
    },

    async saveCar() {
      if (this.$refs.form.validate()) {
        try {
          const carData = {
            f_name: 'addCar',
            car_name: this.car.car_name,
            modelv: this.car.modelv,
            variant: this.car.variant,
            km_price: this.car.km_price,
            status: this.car.status,
          };

          // Send a POST request to the backend
          const response = await this.$axios.post('/saveCar', carData);

          console.log(response.data.message);
          this.fetchCars();
          this.closeDialog();
        } catch (error) {
          console.error('Error saving car:', error.response?.data || error.message);
        }
      }
    },


    async updateCar() {
      if (this.$refs.form.validate()) {
        try {
          const carData = {
            f_name: 'updatecar',
            car_id: this.car.car_id,
            car_name: this.car.car_name,
            modelv: this.car.modelv,
            variant: this.car.variant,
            km_price: this.car.km_price,
            status: this.car.status,
          };

          const response = await this.$axios.post('/updatecar', carData);
          console.log(response.data.message);
          this.fetchCars();
          this.closeDialog();
        } catch (error) {
          console.error('Error updating car:', error);
        }
      }
    },


    async deleteCar(car_id) {
      if (!confirm('Are you sure you want to delete this car?')) return;

      try {
        const formData = new FormData();
        formData.append('f_name', 'deletecar');
        formData.append('car_id', car_id);

        const response = await this.$axios.post('/deleteCar', formData);
        console.log(response.data.message);
        this.fetchCars();
      } catch (error) {
        console.error('Error deleting car:', error);
      }
    },
  },

}
</script>
<style>.add-cars-div{
  margin-top: 80px;
}

.add-new-car-button{
  margin: 10px 10px 10px 0px ;
  color: white;
  background-color: #8a01df;
  padding: 10px;
  border-radius: 8px;
}
</style>