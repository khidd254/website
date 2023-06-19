<template>
  <div class="dashboard-container">
    <div class="sidebar">
      <div class="logo">
        <img src="/path/to/logo.png" alt="Logo">
      </div>
      <nav>
        <ul>
          <li><router-link to="/dashboard" exact>Home</router-link></li>
          <li><router-link to="/loans">Loans</router-link></li>
          <li><router-link to="/payments">Payments</router-link></li>
          <li><router-link to="/borrowers">Borrowers</router-link></li>
          <li><router-link to="/loanplans">Loan Plans</router-link></li>
          <li><router-link to="/loantypes">Loan Types</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <!-- Add your content here -->
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  background: #333;
  color: #fff;
}

.logo {
  padding: 1rem;
}

.logo img {
  max-width: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  padding: 1rem;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

nav ul li a:hover {
  background: #555;
}

.content {
  flex: 1;
  padding: 1rem;
  background: #f0f0f0;
}
</style>
