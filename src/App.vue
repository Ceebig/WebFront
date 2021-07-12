<template>
  <div id="nav">
    <router-link to="/">Login</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "nav.scss";
</style>
