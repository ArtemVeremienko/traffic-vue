<template>
  <div class="row">
    <div class="col-sm-12">
      <div
        id="datatable-buttons_wrapper"
        class="dataTables_wrapper dt-bootstrap4 no-footer"
      >
        <div class="row">
          <div class="col-sm-12 col-md-6 filters">
            <div class="dt-buttons btn-group flex-wrap">
              <button
                class="btn btn-secondary"
                tabindex="0"
                aria-controls="datatable-buttons"
                type="button"
                @click="activeFilter = 'DESKTOP'"
              >
                <span>Desktop</span>
              </button>
              <button
                class="btn btn-secondary"
                tabindex="0"
                aria-controls="datatable-buttons"
                type="button"
                @click="activeFilter = 'MOBILE'"
              >
                <span>Mobile</span>
              </button>
              <button
                class="btn btn-secondary"
                tabindex="0"
                aria-controls="datatable-buttons"
                type="button"
                @click="activeFilter = 'TABLET'"
              >
                <span>Tablet</span>
              </button>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div id="datatable-buttons_filter" class="dataTables_filter">
              <label
                >Search:<input
                  type="search"
                  class="form-control form-control-sm"
                  placeholder=""
                  aria-controls="datatable-buttons"
              /></label>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">
            <table
              id="datatable-buttons"
              class="table table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
              role="grid"
              aria-describedby="datatable-buttons_info"
              v-if="traffic"
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_asc"
                    tabindex="0"
                    aria-controls="datatable-buttons"
                    aria-sort="ascending"
                    aria-label="Name: activate to sort column descending"
                  >
                    Дата
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="datatable-buttons"
                    aria-label="Position: activate to sort column ascending"
                    v-for="(value, key) in cols"
                    :key="key"
                  >
                    {{ key }}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  role="col"
                  v-for="(values, keys, index) in activeTraffic"
                  :key="keys"
                  :class="index % 2 ? 'even' : 'odd'"
                >
                  <td>{{ keys }}</td>
                  <td v-for="(value, name, index) in values" :key="index">
                    {{ value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-5">
            <div
              class="dataTables_info"
              id="datatable-buttons_info"
              role="status"
              aria-live="polite"
            >
              Showing 1 to 10 of 57 entries
            </div>
          </div>
          <div class="col-sm-12 col-md-7">
            <div
              class="dataTables_paginate paging_simple_numbers"
              id="datatable-buttons_paginate"
            >
              <ul class="pagination pagination-rounded">
                <li
                  class="paginate_button page-item previous disabled"
                  id="datatable-buttons_previous"
                >
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="0"
                    tabindex="0"
                    class="page-link"
                    ><i class="mdi mdi-chevron-left"></i
                  ></a>
                </li>
                <li class="paginate_button page-item active">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="1"
                    tabindex="0"
                    class="page-link"
                    >1</a
                  >
                </li>
                <li class="paginate_button page-item">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="2"
                    tabindex="0"
                    class="page-link"
                    >2</a
                  >
                </li>
                <li class="paginate_button page-item">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="3"
                    tabindex="0"
                    class="page-link"
                    >3</a
                  >
                </li>
                <li class="paginate_button page-item">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="4"
                    tabindex="0"
                    class="page-link"
                    >4</a
                  >
                </li>
                <li class="paginate_button page-item">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="5"
                    tabindex="0"
                    class="page-link"
                    >5</a
                  >
                </li>
                <li class="paginate_button page-item">
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="6"
                    tabindex="0"
                    class="page-link"
                    >6</a
                  >
                </li>
                <li
                  class="paginate_button page-item next"
                  id="datatable-buttons_next"
                >
                  <a
                    href="#"
                    aria-controls="datatable-buttons"
                    data-dt-idx="7"
                    tabindex="0"
                    class="page-link"
                    ><i class="mdi mdi-chevron-right"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableTraffic",
  data() {
    return {
      activeFilter: "TOTAL",
      traffic: false,
    };
  },
  computed: {
    activeTraffic() {
      return this.traffic[this.activeFilter];
    },
    cols() {
      return Object.values(this.activeTraffic)[0];
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("setTraffic").then((data) => (this.traffic = data));
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: block;
  overflow-x: auto;
}
.table th {
  min-width: 240px;
}

.filters {
  display: flex;
  align-items: center;
}
</style>
