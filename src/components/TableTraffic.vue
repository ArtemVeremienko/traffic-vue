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
                v-for="(value, name) in traffic"
                :key="name"
                @click="changeFilter(name)"
              >
                <span>{{ name }}</span>
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
import { transform } from "@/utils";
import draggable from "vuedraggable";

export default {
  name: "TableTraffic",
  components: {
    draggable,
  },
  data() {
    return {
      activeFilter: "TOTAL",
      traffic: {
        DESKTOP: {
          total_brand: {
            "2020-10-27": 3,
          },
          total_brand_share: {
            "2020-10-27": 0.75,
          },
          total_non_brand: {
            "2020-10-27": 1,
          },
          total_non_brand_share: {
            "2020-10-27": 0.25,
          },
          total_total: {
            "2020-10-27": 4,
          },
          yandex_brand: {
            "2020-10-27": 3,
          },
          yandex_brand_share: {
            "2020-10-27": 0.75,
          },
          yandex_non_brand: {
            "2020-10-27": 1,
          },
          yandex_non_brand_share: {
            "2020-10-27": 0.25,
          },
          yandex_total: {
            "2020-10-27": 4,
          },
        },
        TOTAL: {
          total_brand: {
            "2020-10-27": 4,
          },
          total_brand_share: {
            "2020-10-27": 0.75,
          },
          total_non_brand: {
            "2020-10-27": 1,
          },
          total_non_brand_share: {
            "2020-10-27": 0.25,
          },
          total_total: {
            "2020-10-27": 4,
          },
          yandex_brand: {
            "2020-10-27": 3,
          },
          yandex_brand_share: {
            "2020-10-27": 0.75,
          },
          yandex_non_brand: {
            "2020-10-27": 1,
          },
          yandex_non_brand_share: {
            "2020-10-27": 0.25,
          },
          yandex_total: {
            "2020-10-27": 4,
          },
        },
      },
      rowsMap: {
        total_brand: "Google",
        total_brand_share: "Google Brand",
        total_non_brand: "Google Non Brand",
        total_non_brand_share: "Google Brand / Non Brand",
        total_total: "All",
        yandex_brand: "Yandex",
        yandex_brand_share: "Yandex Brand",
        yandex_non_brand: "Yandex Non Brand",
        yandex_non_brand_share: "Yandex Brand / Yandex Non Brand",
        yandex_total: "Yandex Brand / Yandex Non Brand",
      },
      table: null,
      rows: [],
    };
  },
  computed: {
    headers() {
      return Object.keys(this.rows[0]).slice(1);
    },
  },
  methods: {
    mapName(name) {
      return this.rowsMap[name] || name;
    },
    changeFilter(name) {
      this.activeFilter = name;
      this.rows = this.table[name];
    },
  },
  created() {
    // this.$store.dispatch("setTraffic").then((data) => (this.traffic = data));
    this.table = transform(this.traffic);
    this.rows = this.table[this.activeFilter];
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
