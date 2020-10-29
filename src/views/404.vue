<template>
  <div class="account-pages mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="card">
            <!-- Logo -->
            <div class="card-header pt-4 pb-4 text-center bg-primary">
              <router-link to="/">
                <span
                  ><img src="assets/images/logo.png" alt="" height="18"
                /></span>
              </router-link>
            </div>

            <div class="card-body p-4">
              <div class="text-center">
                <h1 class="text-error">
                  4<i class="mdi mdi-emoticon-sad"></i>4
                </h1>
                <h4 class="text-uppercase text-danger mt-3">
                  Страница не найдена
                </h4>
                <p class="text-muted mt-3">
                  Похоже, произошла ошибка. Не надо волнуйтесь ... это случается
                  с лучшими из нас. Вот небольшой совет это может помочь вам
                  вернуться на правильный путь.
                </p>

                <router-link class="btn btn-info mt-3" to="/">
                  <i class="mdi mdi-reply"></i> Вернуться на главную
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer footer-alt">
      {{ year }}
      © Hyper - Coderthemes.com
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>
