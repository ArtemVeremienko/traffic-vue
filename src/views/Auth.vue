<template>
  <div class="wrapper">
    <form class="form col-md-4" @submit.prevent="loginUser" novalidate>
      <div id="basicwizard">
        <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
          <li class="nav-item">
            <a data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
              <i class="mdi mdi-account-circle mr-1"></i>
              <span class="d-none d-sm-inline">Авторизация на сайте</span>
            </a>
          </li>
        </ul>

        <div class="tab-content b-0 mb-0">
          <div class="tab-pane active">
            <div class="row">
              <div class="col-12">
                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="userName"
                    >Email</label
                  >
                  <div class="col-md-9">
                    <input
                      type="text"
                      class="form-control"
                      id="userName"
                      name="userName"
                      placeholder="username"
                      v-model.trim="user.email"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста, введите почту
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="password">
                    Пароль</label
                  >
                  <div class="col-md-9">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      class="form-control"
                      placeholder="123456789"
                      v-model.trim="user.password"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста, введите пароль
                    </div>
                  </div>
                </div>

                <div
                  v-if="loginError"
                  class="alert alert-danger text-center"
                  role="alert"
                >
                  <i class="dripicons-wrong mr-2"></i> Введите правильный логин
                  или пароль
                </div>

                <div
                  v-if="serverError"
                  class="alert alert-danger text-center"
                  role="alert"
                >
                  <i class="dripicons-wrong mr-2"></i> Ошибка на сервере
                </div>
              </div>
            </div>
          </div>

          <div class="mb-1 d-flex align-items-center flex-column">
            <button
              class="btn btn-info"
              :disabled="!user.email || !user.password"
            >
              Войти
            </button>
            <router-link to="/registration" class="btn btn-link"
              >У вас нет аккаунта? Регистрация</router-link
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      loginError: false,
      serverError: false,
      user: {
        email: "", // user@domain.com
        password: "", // string
      },
    };
  },
  methods: {
    loginUser() {
      this.$store
        .dispatch("login", this.user)
        .then(() => this.$router.push("home"))
        .catch((err) => {
          this.loginError = true;
          setTimeout(() => (this.loginError = false), 2000);
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100vh;
  display: flex;
  background: rgb(0 0 0 / 0.1);
}

.form {
  margin: auto;
  padding: 1.5rem;
  min-height: 300px;
  background: #fff;
}

.show {
  display: block;
}
</style>
