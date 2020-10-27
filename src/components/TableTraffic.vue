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
                    v-for="(value, index) in headers"
                    :key="index"
                  >
                    {{ value }}
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr
                  role="col"
                  v-for="(row, index) in rows"
                  :key="index"
                  :class="index % 2 ? 'even' : 'odd'"
                >
                  <td>{{ rowsMap[row] }}</td>
                  <td
                    v-for="(value, name, index) in activeTraffic"
                    :key="index"
                  >
                    {{ value[row] }}
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

        <div class="row">
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
                  v-for="(value, index) in headers"
                  :key="index"
                >
                  {{ value }}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                role="col"
                v-for="(row, index) in transferTable"
                :key="index"
                :class="index % 2 ? 'even' : 'odd'"
              >
                <td v-for="(value, name, index) in row" :key="index">
                  {{ mapName(value) }}
                </td>
              </tr>
            </tbody>
          </table>
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
      traffic: {
        DESKTOP: {
          "2020-10-02": {
            total_brand: 2,
            total_brand_share: 0.4,
            total_non_brand: 3,
            total_non_brand_share: 0.6,
            total_total: 5,
            yandex_brand: 2,
            yandex_brand_share: 0.4,
            yandex_non_brand: 3,
            yandex_non_brand_share: 0.6,
            yandex_total: 5,
          },
          "2020-10-03": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 2,
            total_non_brand_share: 1,
            total_total: 2,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 2,
            yandex_non_brand_share: 1,
            yandex_total: 2,
          },
          "2020-10-05": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-08": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-10": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-13": {
            total_brand: 1,
            total_brand_share: 1,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 1,
            yandex_brand: 1,
            yandex_brand_share: 1,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 1,
          },
          "2020-10-14": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-15": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 2,
            total_non_brand_share: 1,
            total_total: 2,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 2,
            yandex_non_brand_share: 1,
            yandex_total: 2,
          },
          "2020-10-16": {
            total_brand: 2,
            total_brand_share: 1,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 2,
            yandex_brand: 2,
            yandex_brand_share: 1,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 2,
          },
          "2020-10-17": {
            total_brand: 1,
            total_brand_share: 1,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 1,
            yandex_brand: 1,
            yandex_brand_share: 1,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 1,
          },
          "2020-10-18": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-19": {
            total_brand: 1,
            total_brand_share: 0.33,
            total_non_brand: 2,
            total_non_brand_share: 0.67,
            total_total: 3,
            yandex_brand: 1,
            yandex_brand_share: 0.33,
            yandex_non_brand: 2,
            yandex_non_brand_share: 0.67,
            yandex_total: 3,
          },
        },
        MOBILE: {
          "2020-10-02": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-03": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-05": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 1,
            total_non_brand_share: 1,
            total_total: 1,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 1,
            yandex_non_brand_share: 1,
            yandex_total: 1,
          },
          "2020-10-08": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-10": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-13": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 1,
            total_non_brand_share: 1,
            total_total: 1,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 1,
            yandex_non_brand_share: 1,
            yandex_total: 1,
          },
          "2020-10-14": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-15": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-16": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-17": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-18": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
          "2020-10-19": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 0,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 0,
          },
        },
        TABLET: {
          "2020-10-02": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-03": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-05": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-08": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-10": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-13": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-14": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-15": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-16": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-17": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
          "2020-10-18": {
            total_brand_share: 0,
            total_non_brand: 1,
            total_non_brand_share: 1,
            total_total: 1,
            yandex_brand_share: 0,
            yandex_non_brand: 1,
            yandex_non_brand_share: 1,
            yandex_total: 1,
          },
          "2020-10-19": {
            total_brand_share: 0,
            total_non_brand: 0,
            total_non_brand_share: 1,
            total_total: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 0,
            yandex_non_brand_share: 1,
            yandex_total: 0,
          },
        },
        TOTAL: {
          "2020-10-02": {
            total_brand: 2,
            total_brand_share: 0.4,
            total_non_brand: 3,
            total_non_brand_share: 0.6,
            total_total: 5,
            yandex_brand: 2,
            yandex_brand_share: 0.4,
            yandex_non_brand: 3,
            yandex_non_brand_share: 0.6,
            yandex_total: 5,
          },
          "2020-10-03": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 2,
            total_non_brand_share: 1,
            total_total: 2,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 2,
            yandex_non_brand_share: 1,
            yandex_total: 2,
          },
          "2020-10-05": {
            total_brand: 1,
            total_brand_share: 0.33,
            total_non_brand: 2,
            total_non_brand_share: 0.67,
            total_total: 3,
            yandex_brand: 1,
            yandex_brand_share: 0.33,
            yandex_non_brand: 2,
            yandex_non_brand_share: 0.67,
            yandex_total: 3,
          },
          "2020-10-08": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-10": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-13": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-14": {
            total_brand: 1,
            total_brand_share: 0.5,
            total_non_brand: 1,
            total_non_brand_share: 0.5,
            total_total: 2,
            yandex_brand: 1,
            yandex_brand_share: 0.5,
            yandex_non_brand: 1,
            yandex_non_brand_share: 0.5,
            yandex_total: 2,
          },
          "2020-10-15": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 2,
            total_non_brand_share: 1,
            total_total: 2,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 2,
            yandex_non_brand_share: 1,
            yandex_total: 2,
          },
          "2020-10-16": {
            total_brand: 2,
            total_brand_share: 1,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 2,
            yandex_brand: 2,
            yandex_brand_share: 1,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 2,
          },
          "2020-10-17": {
            total_brand: 1,
            total_brand_share: 1,
            total_non_brand: 0,
            total_non_brand_share: 0,
            total_total: 1,
            yandex_brand: 1,
            yandex_brand_share: 1,
            yandex_non_brand: 0,
            yandex_non_brand_share: 0,
            yandex_total: 1,
          },
          "2020-10-18": {
            total_brand: 0,
            total_brand_share: 0,
            total_non_brand: 1,
            total_non_brand_share: 1,
            total_total: 1,
            yandex_brand: 0,
            yandex_brand_share: 0,
            yandex_non_brand: 1,
            yandex_non_brand_share: 1,
            yandex_total: 1,
          },
          "2020-10-19": {
            total_brand: 1,
            total_brand_share: 0.33,
            total_non_brand: 2,
            total_non_brand_share: 0.67,
            total_total: 3,
            yandex_brand: 1,
            yandex_brand_share: 0.33,
            yandex_non_brand: 2,
            yandex_non_brand_share: 0.67,
            yandex_total: 3,
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
      table: {},
    };
  },
  computed: {
    activeTraffic() {
      return this.traffic[this.activeFilter];
    },
    headers() {
      return Object.keys(this.activeTraffic);
    },
    firstData() {
      return this.headers[0];
    },
    rows() {
      return Object.keys(this.activeTraffic[this.firstData]);
    },
    transferTable() {
      return this.rows.map((row) => {
        const obj = {};
        obj.name = row;
        for (let date in this.activeTraffic) {
          obj[date] = this.activeTraffic[date][row];
        }
        return obj;
      });
    },
  },
  methods: {
    mapName(name) {
      return this.rowsMap[name] || name;
    },
  },
  created() {
    // this.$store.dispatch("setTraffic").then((data) => (this.traffic = data));
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
