<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item active">
        <router-link to="traffic">Траффик</router-link>
      </li>
      <li class="breadcrumb-item">
        <router-link to="segments">Сегменты</router-link>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <router-link to="">Конкуренты</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumbs",
};
</script>

<style>
</style>
