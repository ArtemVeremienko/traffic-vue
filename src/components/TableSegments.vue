<template>
  <div class="row">
    <div class="col-sm-12">
      <table class="table table-striped table-centered mb-0">
        <thead>
          <tr>
            <th>Тип трафика</th>
            <th>Дата</th>
            <th>Дата</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="idx in 5" :key="idx">
            <td class="table-user">
              <img
                src="@/assets/images/users/avatar-2.jpg"
                alt="table-user"
                class="mr-2 rounded-circle"
              />
              Risa D. Pearson
            </td>
            <td>AC336 508 2157</td>
            <td>July 24, 1950</td>
            <td class="table-action">
              <a href="#" class="action-icon">
                <i class="mdi mdi-pencil"></i
              ></a>
              <a href="#" class="action-icon">
                <i class="mdi mdi-delete"></i
              ></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableSegments",
  methods: {
    random(num) {
      return Math.floor(Math.random() * num);
    },
  },
};
</script>

<style>
</style>
