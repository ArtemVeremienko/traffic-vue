<template>
  <div class="left-side-menu mm-show">
    <div
      class="h-100 mm-active"
      id="left-side-menu-container"
      data-simplebar="init"
    >
      <div class="simplebar-wrapper">
        <div class="simplebar-height-auto-observer-wrapper">
          <div class="simplebar-height-auto-observer"></div>
        </div>
        <div class="simplebar-mask">
          <div class="simplebar-offset">
            <div class="simplebar-content-wrapper">
              <div class="simplebar-content">
                <ul class="metismenu side-nav mm-show">
                  <li class="side-nav-title side-nav-item">Меню</li>

                  <li
                    class="side-nav-item"
                    :class="{ 'mm-active': indexVisible === 1 }"
                  >
                    <a
                      href="#"
                      class="side-nav-link"
                      aria-expanded="false"
                      @click.prevent="changeActive(1)"
                    >
                      <i class="dripicons-search"></i>
                      <span> Видимость </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 1 }"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="#">Сайты</a>
                      </li>
                      <li>
                        <a href="#">Категории</a>
                      </li>
                      <li>
                        <a href="#">Кластеры</a>
                      </li>
                      <li>
                        <a href="#">Запросы</a>
                      </li>
                      <li>
                        <a href="#">Выборки</a>
                      </li>
                      <li>
                        <a href="#">Исполнители</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    class="side-nav-item"
                    :class="{ 'mm-active': indexVisible === 2 }"
                  >
                    <a
                      href="#"
                      class="side-nav-link"
                      aria-expanded="false"
                      @click="changeActive(2)"
                    >
                      <i class="uil-chart"></i>
                      <span> Трафик </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 2 }"
                      aria-expanded="false"
                    >
                      <li>
                        <router-link to="/home/traffic" active-class="active"
                          >Трафик</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/home/segments" active-class="active"
                          >Сегменты</router-link
                        >
                      </li>
                      <li>
                        <router-link to="/error-page" active-class="active"
                          >Конкуренты</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li
                    class="side-nav-item"
                    :class="{ 'mm-active': indexVisible === 3 }"
                  >
                    <a
                      href="#"
                      class="side-nav-link"
                      aria-expanded="false"
                      @click.prevent="changeActive(3)"
                    >
                      <i class="dripicons-cart"></i>
                      <span> Рынок </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 3 }"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="#">Компании</a>
                      </li>
                      <li>
                        <a href="#">Категории</a>
                      </li>
                    </ul>
                  </li>

                  <li
                    class="side-nav-item"
                    :class="{ 'mm-active': indexVisible === 4 }"
                  >
                    <a
                      href="#"
                      class="side-nav-link"
                      @click.prevent="changeActive(4)"
                    >
                      <i class="dripicons-monitor"></i>
                      <span> Технический монитор </span>
                    </a>
                  </li>

                  <li
                    class="side-nav-item"
                    :class="{ 'mm-active': indexVisible === 5 }"
                  >
                    <a
                      href="#"
                      class="side-nav-link"
                      aria-expanded="false"
                      @click.prevent="changeActive(5)"
                    >
                      <i class="dripicons-to-do"></i>
                      <span> Отчёты </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftSideMenu",
  data() {
    return {
      indexVisible: 2,
    };
  },
  methods: {
    changeActive(idx) {
      if (idx === this.indexVisible) {
        this.indexVisible = 0;
      } else {
        this.indexVisible = idx;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card,
.card-header {
  background-color: transparent;
}

.custom-accordion-title {
  color: white;
}
.active {
  color: #fff !important;
}
</style>
