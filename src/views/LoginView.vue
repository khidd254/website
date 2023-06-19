<template>
  <div class="login-view">
    <form class="login-form">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" v-model="username" id="username" class="form-control" placeholder="Enter your username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" placeholder="Enter your password" />
      </div>
      <button @click="login" class="btn-login">Login</button>
    </form>
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
      const isAuthenticated = this.authenticate(this.username, this.password);

      if (isAuthenticated) {
        this.$router.push({ name: 'home' });
      } else {
        console.log('Login failed');
      }
    },
    authenticate(username, password) {
      const validUsername = 'admin';
      const validPassword = 'password';
      if (username === validUsername && password === validPassword) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 4px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.form-control {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.btn-login {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
