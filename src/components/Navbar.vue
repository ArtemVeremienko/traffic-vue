<template>
  <div class="navbar-custom d-flex align-items-center">
    <div class="btn-group ml-auto">
      <button type="button" class="btn btn-light">
        <i class="dripicons-mail"></i>
        {{ email }}
      </button>
      <button type="button" class="btn btn-light">
        <i class="dripicons-user"></i>
        {{ username }}
      </button>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-light dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="dripicons-menu"></i>
          Меню <span class="caret"></span>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">Планировщик</a>
          <a class="dropdown-item" href="#">Брендовый график</a>
          <a class="dropdown-item" href="#">Частотнось</a>
          <a class="dropdown-item" href="#">API</a>
          <a class="dropdown-item" href="#">Импорт/Экспорт</a>
          <a class="dropdown-item" href="#">Исполнители</a>
          <a class="dropdown-item" href="#">Формула видимости</a>
          <a class="dropdown-item" href="#">Конкуренты</a>
          <a class="dropdown-item" href="#">Пользователи</a>
        </div>
        <a class="btn btn-light" href="#" @click.prevent="logout">
          <i class="dripicons-exit"></i>
          Выход
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      localStorage.removeItem("login");
      this.$router.push("auth");
    },
  },
  computed: {
    username() {
      console.log(this.$store.user);
      return "name";
    },
    email() {
      return "email";
    },
  },
};
</script>

<style lang="scss">
.navbar-custom .dropdown-menu {
  right: 0;
  left: auto;
}
</style>
