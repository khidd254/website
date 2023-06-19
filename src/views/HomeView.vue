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
    <div class="content">
      <div class="box-row">
        <div class="box blue-box">
          <h3>Payments Today</h3>
          <p>0.00</p>
          <div class="box-footer">
            <a href="viewpayments" style="color: white;">View Payments</a>
          </div>
        </div>
        <div class="box green-box">
          <h3>Borrowers</h3>
          <p>2</p>
          <div class="box-footer">
            <a href="viewborrowers" style="color: white;">View Borrowers</a>
          </div>
        </div>
        <div class="box orange-box">
          <h3>Active Loans</h3>
          <p>2</p>
          <div class="box-footer">
            <a href="viewloanlist" style="color: white;">View Loan list</a>
          </div>
        </div>
      </div>
      <div class="box-row">
        <div class="box purple-box">
          <h3>Total Receivable</h3>
          <p>6,900,848.78</p>
          <div class="box-footer">
            <a href="viewloanlist" style="color: white;">View Loan list</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <footer class="footer">
      <p>&copy; 2023 Project by Ken. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  width: 100%;
}

.sidebar {
  width: 200px;
  background: #e4dddd;
  color: black;
}

.logo-container {
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
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.box-row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.box {
  flex-basis: calc(33.33% - 20px);
  background-color: #f0f0f0;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.blue-box {
  background-color: blue;
  color: white;
}

.green-box {
  background-color: green;
  color: white;
}

.orange-box {
  background-color: orange;
  color: white;
}

.purple-box {
  background-color: purple;
  color: white;
}

@media (max-width: 768px) {
  .dashboard-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .content {
    width: 100%;
  }

  .box {
    flex-basis: calc(100% - 220px);
  }

  .box-row {
    flex-wrap: nowrap;
  }

  .box-footer {
    background-color: #333;
    padding: 10px;
    border-radius: 0 0 10px 10px;
  }

  .box-footer a {
    color: #fff;
    text-decoration: none;
  }

  .box-footer a:hover {
    text-decoration: underline;
  }
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}

.footer p {
  margin: 0;
}
</style>
