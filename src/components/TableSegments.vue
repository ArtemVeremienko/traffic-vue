<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="dataTables_wrapper dt-bootstrap4 no-footer">
        <div class="row my-2">
          <div class="col-sm-12 col-md-3 filters">
            <div class="dt-buttons btn-group flex-wrap">
              <button
                class="btn btn-secondary"
                aria-controls="datatable-buttons"
                @click="activeBrand = 'BRAND'"
              >
                <span>Brand</span>
              </button>
              <button
                class="btn btn-secondary"
                aria-controls="datatable-buttons"
                @click="activeBrand = 'NON_BRAND'"
              >
                <span>Non Brand</span>
              </button>
            </div>
          </div>

          <div class="col-sm-12 col-md-4 filters">
            <div class="dt-buttons btn-group flex-wrap">
              <button
                class="btn btn-secondary"
                aria-controls="datatable-buttons"
                type="button"
                v-for="(value, name) in table"
                :key="name"
                @click="changeDevice(name)"
              >
                <span>{{ name | capitalize }}</span>
              </button>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 filters">
            <DateRangePicker class="mr-1"></DateRangePicker>
            <div class="dropdown">
              <select class="form-control">
                <option selected>Яндекс и Гугл</option>
                <option>Яндекс</option>
                <option>Гугл</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 d-flex justify-content-center">
            <div
              class="spinner-grow text-secondary m-4"
              style="width: 3rem; height: 3rem"
              role="status"
              v-if="loading"
            >
              <span class="sr-only">Loading...</span>
            </div>
            <table
              id="datatable-buttons"
              class="table table-striped dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
              role="grid"
              aria-describedby="datatable-buttons_info"
              v-else
            >
              <thead>
                <tr role="row">
                  <th
                    class="sorting_asc"
                    tabindex="0"
                    aria-controls="datatable-buttons"
                    aria-sort="ascending"
                    aria-label="Name: activate to sort column descending"
                    scope="col"
                  >
                    Дата
                  </th>
                  <th
                    class="sorting"
                    tabindex="0"
                    aria-controls="datatable-buttons"
                    aria-label="Position: activate to sort column ascending"
                    scope="col"
                    v-for="(value, index) in headers"
                    :key="index"
                  >
                    {{ value }}
                  </th>
                </tr>
              </thead>

              <draggable v-model="rows" tag="tbody">
                <tr
                  role="col"
                  v-for="(row, index) in rows"
                  :key="row.name"
                  :class="index % 2 ? 'even' : 'odd'"
                >
                  <td v-for="(value, name, index) in row" :key="index">
                    {{ mapName(value) }}
                  </td>
                </tr>
              </draggable>
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
import { transform, rowsMap } from "@/utils";
import draggable from "vuedraggable";
import DateRangePicker from "./DateRangePicker";

export default {
  name: "TableSegments",
  components: {
    draggable,
    DateRangePicker,
  },
  data() {
    return {
      activeDevice: "TOTAL",
      activeBrand: "BRAND",
      traffic: {},
      table: {},
      rows: [],
      error: null,
      loading: false,
    };
  },
  computed: {
    headers() {
      if (!this.rows.length) return [];
      return Object.keys(this.rows[0]).slice(1);
    },
  },
  methods: {
    mapName(name) {
      return rowsMap[name] || name;
    },
    changeDevice(name) {
      this.activeDevice = name;
      this.rows = this.table[name];
    },
    fetchData() {
      this.error = this.table = null;
      this.loading = true;
      this.$store
        .dispatch("setTraffic")
        .then((data) => {
          this.table = transform(data);
          this.rows = this.table[this.activeDevice];
          this.loading = false;
        })
        .catch((err) => {
          this.error = err;
          alert(this.error);
        });
    },
  },
  filters: {
    capitalize(str) {
      if (!str) return "";
      return str[0].toUpperCase() + str.slice(1).toLowerCase();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: block;
  overflow-x: auto;
  text-align: center;
}
.table th {
  min-width: 160px;
}

.filters {
  display: flex;
  align-items: center;
}
</style>
