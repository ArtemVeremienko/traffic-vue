<template>
  <div class="wrapper mm-show">
    <LeftSideMenu />
    <div class="content-page">
      <div class="content">
        <Navbar />
        <div class="container-fluid">
          <Filters />
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftSideMenu from "@/components/LeftSideMenu.vue";
import Navbar from "@/components/Navbar.vue";
import Filters from "@/components/Filters.vue";
import Table from "@/components/Table.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    LeftSideMenu,
    Navbar,
    Filters,
    Table,
    Footer,
  },
  mounted() {
    console.log(this.$store.state);
  },
};
</script>

<style>
[data-toggle]:focus + .dropdown-menu {
  display: block;
}
</style>
