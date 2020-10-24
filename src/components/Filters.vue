<template>
  <div class="row my-3">
    <div class="col-md-8">
      <p>Быстрые фильтры:</p>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Выросли <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Яндекс</a>
            <a class="dropdown-item" href="#">Гугл</a>
            <a class="dropdown-item" href="#">В любой</a>
            <a class="dropdown-item" href="#">В обоих</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Упали <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Яндекс</a>
            <a class="dropdown-item" href="#">Гугл</a>
            <a class="dropdown-item" href="#">В любой</a>
            <a class="dropdown-item" href="#">В обоих</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            ~0 <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Яндекс</a>
            <a class="dropdown-item" href="#">Гугл</a>
            <a class="dropdown-item" href="#">В любой</a>
            <a class="dropdown-item" href="#">В обоих</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Разница <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Указать разницу видимости</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Исполнитель <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Исполнитель 1</a>
            <a class="dropdown-item" href="#">Исполнитель 2</a>
            <a class="dropdown-item" href="#">Исполнитель 3</a>
            <a class="dropdown-item" href="#">Исполнитель 4</a>
            <a class="dropdown-item" href="#">Исполнитель 5</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Выборки <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Выборки</a>
            <a class="dropdown-item" href="#">Выборки 1</a>
            <a class="dropdown-item" href="#">Выборки 2</a>
          </div>
        </div>
      </div>
      <div class="btn-group mb-2">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="dripicons-cloud-download"></i>
            <span class="caret"></span>
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Мультифильтр 1</a>
            <a class="dropdown-item" href="#">Мультифильтр 2</a>
            <a class="dropdown-item" href="#">Мультифильтр 3</a>
            <a class="dropdown-item" href="#">Мультифильтр 4</a>
            <a class="dropdown-item" href="#">Мультифильтр 5</a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <p>Вид</p>
      <div class="d-flex">
        <button class="btn btn-light">
          <div class="d-flex justify-content-around small-font mb-1">
            <p class="mb-0">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label class="form-check-label" for="defaultCheck1">
                <a href="#">Динамика</a>
              </label>
            </p>
            <p class="mb-0">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
              />
              <label class="form-check-label" for="defaultCheck2">
                <a href="#">График</a>
              </label>
            </p>
          </div>
          <span class="dripicons-calendar">&nbsp;Последние 7 дней</span>
        </button>
        <div class="btn-group">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light dropdown-toggle"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Яндекс и Гугл <span class="caret"></span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Яндекс и Гугл</a>
              <a class="dropdown-item" href="#">Яндекс</a>
              <a class="dropdown-item" href="#">Гугл</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Filters",
};
</script>

<style lang="scss" scoped>
.form-check-label,
.small-font {
  font-weight: normal;
  font-size: 10px;
}
.form-check-input {
  margin-top: 2px;
}
</style>
