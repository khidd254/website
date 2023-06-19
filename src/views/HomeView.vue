<template>
     <div class="logo-container">
      <div class="logo">
        <img src="../assets/1.png" alt="Logo">
        <h1 class="logo-name">Fastloan</h1>
      </div>
      <div class="motto">Your partner when in need</div>
  </div>
  <div class="dashboard-container">
    <div class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/home" exact>Home</router-link></li>
          <li><router-link to="/loans">Loans</router-link></li>
          <li><router-link to="/payments">Payments</router-link></li>
          <li><router-link to="/borrowers">Borrowers</router-link></li>
          <li><router-link to="/loanplans">Loan Plans</router-link></li>
          <li><router-link to="/loantypes">Loan Types</router-link></li>
          <li><router-link to="/users">Users</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </div>
      <div class="home-container">
    <div class="box-container">
      <div class="box">Box 1</div>
      <div class="box">Box 2</div>
      <div class="box">Box 3</div>
    </div>
    <div class="box">Box 4</div>
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
  background: #e4dddd;
  color:black;
}.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: rgb(207, 9, 9);
  color: #fff;
  padding: 1rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  max-width: 100%;
  width: 100px;
  height: 100px;
}

.logo-name {
  font-size: 1.5rem;
  text-decoration: underline;
  margin-bottom: 0.5rem;
}

.motto {
  font-size: 0.8rem;
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
  color: #0e0d0d;
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
