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
                      <i class="uil-store"></i>
                      <span> Видимость </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 1 }"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="apps-ecommerce-products.html">Сайты</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-orders.html">Категории</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-customers.html">Кластеры</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-checkout.html">Запросы</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-sellers.html">Выборки</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-sellers.html">Исполнители</a>
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
                      @click.prevent="changeActive(2)"
                    >
                      <i class="uil-store"></i>
                      <span> Трафик </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 2 }"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="apps-ecommerce-products.html">Сегменты</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-products-details.html"
                          >Конкуренты</a
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
                      <i class="uil-store"></i>
                      <span> Рынок </span>
                      <span class="menu-arrow"></span>
                    </a>
                    <ul
                      class="side-nav-second-level mm-collapse"
                      :class="{ 'mm-show': indexVisible === 3 }"
                      aria-expanded="false"
                    >
                      <li>
                        <a href="apps-ecommerce-products.html">Компании</a>
                      </li>
                      <li>
                        <a href="apps-ecommerce-products-details.html"
                          >Категории</a
                        >
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
                      <i class="uil-store"></i>
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
                      <i class="uil-store"></i>
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
      indexVisible: 1,
    };
  },
  methods: {
    changeActive(idx) {
      console.log(this.indexVisible, idx);
      if (idx === this.indexVisible) {
        this.indexVisible = 0;
      } else {
        this.indexVisible = idx;
      }
    },
  },
};
</script>

<style lang="scss" >
.card,
.card-header {
  background-color: transparent;
}

.custom-accordion-title {
  color: white;
}
</style>
