<template>
  <div class="wrapper mm-show">
    <LeftSideMenu />
    <div class="content-page">
      <div class="content">
        <Navbar />
        <div class="container-fluid">
          <router-view />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import LeftSideMenu from "@/components/LeftSideMenu.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    LeftSideMenu,
    Navbar,
    Footer,
  },
};
</script>

<style>
[data-toggle]:focus + .dropdown-menu {
  display: block;
}
</style>
