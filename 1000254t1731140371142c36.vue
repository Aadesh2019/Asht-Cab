<template>
<span><v-dialog v-model="$store.state.variable.loginDialog" max-width="600">
  <v-card>
    <v-card-title class="text-center">Login</v-card-title>
    <v-card-text>
      <v-form v-model="valid" ref="loginForm">
        <!-- Email Input -->
        <v-text-field v-model="email" label="Username, Email or Contact" outlined>
        </v-text-field>

        <!-- Password Input -->
        <v-text-field v-model="password" label="Password" type="password" outlined>
        </v-text-field>

        <v-col>
          <v-btn block color="primary" :disabled="!valid" @click="login">
            Login
          </v-btn>
          <v-btn block outlined color="primary" class="mt-2" @click="$store.state.variable.loginDialog = false">
            Cancel
          </v-btn>
        </v-col>
      </v-form>
    </v-card-text>
  </v-card>
</v-dialog></span>
</template>
<script>
 export default {

data() {
    return {
      identifier: "",
      password: "",
        email: "",
      password: "",
      valid: false,
      identifierRules: [
        (v) => !!v || "Email or phone number is required",
        (v) => /^(?:\d{10}|\S+@\S+\.\S+)$/.test(v) || "Enter a valid email or phone number",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) => v.length >= 6 || "Password must be at least 6 characters",
      ],
    };
  },
  methods: {
      async login() {
      if (this.$refs.loginForm.validate()) {
        console.log("email:", this.email);
        console.log("Password:", this.password);

        const loginObj = {
          username: this.email,
          password: this.password,
        };

        this.$login(loginObj).then((res)=> {
         if (this.$auth.user.role === 0) {
          this.$router.push("/admin");
        } else {
          this.$router.push("/");
        }
        this.$store.state.variable.loginDialog = false; 
        })
      }
    },
  },

}
</script>
<style>
</style>