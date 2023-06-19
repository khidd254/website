<template>
  <div class="login-view">
    <h1>Login Page</h1>
    <input type="text" v-model="username" placeholder="Username" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Perform authentication logic here
      // You can implement your own authentication logic or call an authentication API
      const isAuthenticated = this.authenticate(this.username, this.password);
      
      if (isAuthenticated) {
        // Redirect to the home page if login is successful
        this.$router.push({ name: 'home' });
      } else {
        // Show an error message or handle failed login
        console.log('Login failed');
      }
    },
    authenticate(username, password) {
      // Here, you can implement your own authentication logic, such as querying a database or calling an authentication API
      // This is a simplified example using hard-coded credentials
      const validUsername = 'admin';
      const validPassword = 'password';
  
      // Check if the provided username and password match the valid credentials
      if (username === validUsername && password === validPassword) {
        return true; // Authentication successful
      } else {
        return false; // Authentication failed
      }
    },
  },
};
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
}

.login-form {
  background: #fff;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>

