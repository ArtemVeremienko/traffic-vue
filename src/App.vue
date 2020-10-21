<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/auth">Authentification</router-link> |
      <router-link to="/registration">Registration</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/scss/app.scss";
@import "assets/scss/icons.scss";

#nav {
  z-index: 9999;
  position: fixed;
  background: rgb(0 0 0 / 0.6);
  padding: 0.5rem;
}
</style>
