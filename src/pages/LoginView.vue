<template>
  <div class="login-view">
    <h1>다정함</h1>
    <input type="text" placeholder="username" />
    <input type="password" placeholder="password" />
    <a href="#">forgot password?</a>
    <button>Sign in</button>
    <p>register</p>
  </div>
</template>

<script setup></script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

input {
  margin: 10px 0;
  padding: 10px;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 20px;
}

button {
  margin-top: 20px;
  background-color: #3366ff;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 20px;
}
</style>
