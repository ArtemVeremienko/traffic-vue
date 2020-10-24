<template>
  <div class="row">
    <div class="col-sm-12">
      <table
        id="datatable-buttons"
        class="table table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline text-center"
        role="grid"
        aria-describedby="datatable-buttons_info"
      >
        <thead>
          <tr role="row">
            <th
              class="sorting_asc"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-sort="ascending"
              aria-label="Name: activate to sort column descending"
            >
              Name
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-label="Position: activate to sort column ascending"
            >
              Position
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-label="Office: activate to sort column ascending"
            >
              Office
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-label="Age: activate to sort column ascending"
            >
              Age
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-label="Start date: activate to sort column ascending"
            >
              Start date
            </th>
            <th
              class="sorting"
              tabindex="0"
              aria-controls="datatable-buttons"
              rowspan="1"
              colspan="1"
              aria-label="Salary: activate to sort column ascending"
            >
              Salary
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            role="row"
            :class="n % 2 ? 'odd' : 'even'"
            v-for="n in 10"
            :key="n"
          >
            <td class="sorting_1 dtr-control">Airi Satou</td>
            <td>Accountant {{ n }}</td>
            <td>Tokyo</td>
            <td>{{ random(60) }}</td>
            <td>2008/11/28</td>
            <td>${{ random(100000) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  methods: {
    random(num) {
      return Math.floor(Math.random() * num);
    },
  },
};
</script>

<style>
</style>
