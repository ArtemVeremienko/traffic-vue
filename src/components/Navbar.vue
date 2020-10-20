<template>
  <div class="navbar-custom d-flex align-items-center">
    <div class="btn-group ml-auto">
      <button type="button" class="btn btn-light">
        <i class="dripicons-mail"></i>
      </button>
      <button type="button" class="btn btn-light">
        <i class="dripicons-user"></i>
      </button>
      <div class="btn-group">
        <button
          type="button"
          class="btn btn-light dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Login <span class="caret"></span>
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
          <a class="dropdown-item" href="#">Выход</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar-custom .dropdown-menu {
  right: 0;
  left: auto;
}
</style>
