<template>
  <div class="wrapper">
    <form class="form col-md-6" @submit.prevent="registerUser" novalidate>
      <div id="basicwizard">
        <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
          <li class="nav-item">
            <a
              href="#basictab1"
              data-toggle="tab"
              class="nav-link rounded-0 pt-2 pb-2"
              :class="{ active: active === 'account' }"
              @click="changeActive('account')"
            >
              <i class="mdi mdi-account-circle mr-1"></i>
              <span class="d-none d-sm-inline">Аккаунт</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#basictab2"
              data-toggle="tab"
              class="nav-link rounded-0 pt-2 pb-2"
              :class="{ active: active === 'profile' }"
              @click="changeActive('profile')"
            >
              <i class="mdi mdi-face-profile mr-1"></i>
              <span class="d-none d-sm-inline">Профиль</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#basictab3"
              data-toggle="tab"
              class="nav-link rounded-0 pt-2 pb-2"
              :class="{ active: active === 'finish' }"
              @click="changeActive('finish')"
            >
              <i class="mdi mdi-checkbox-marked-circle-outline mr-1"></i>
              <span class="d-none d-sm-inline">Завершить</span>
            </a>
          </li>
        </ul>

        <div class="tab-content b-0 mb-0">
          <div
            class="tab-pane"
            id="basictab1"
            :class="{ active: active === 'account' }"
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="email"
                    >Email</label
                  >
                  <div class="col-md-9">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      class="form-control"
                      placeholder="cory1979@hotmail.com"
                      :class="{ 'is-invalid': $v.user.email.$error }"
                      v-model.trim="$v.user.email.$model"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста введите корректную почту
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
                      v-model.trim="$v.user.password.$model"
                      :class="{ 'is-invalid': $v.user.password.$error }"
                    />
                    <div class="invalid-feedback">
                      Введите пароль больше
                      {{ $v.user.password.$params.minLength.min }} символов
                    </div>
                  </div>
                </div>

                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="confirm"
                    >Повт. пароль</label
                  >
                  <div class="col-md-9">
                    <input
                      type="password"
                      id="confirm"
                      name="confirm"
                      class="form-control"
                      placeholder="123456789"
                      :class="{ 'is-invalid': $v.user.rePassword.$error }"
                      v-model.trim="$v.user.rePassword.$model"
                    />
                    <div class="invalid-feedback">Пароли должны совпадать</div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>

          <div
            class="tab-pane"
            id="basictab2"
            :class="{ active: active === 'profile' }"
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="name"> Имя</label>
                  <div class="col-md-9">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      class="form-control"
                      placeholder="Francis"
                      :class="{ 'is-invalid': $v.user.firstName.$error }"
                      v-model.trim="$v.user.firstName.$model"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста введите Имя длинее
                      {{ $v.user.firstName.$params.minLength.min }} символов
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <label class="col-md-3 col-form-label" for="surname">
                    Фамилия</label
                  >
                  <div class="col-md-9">
                    <input
                      type="text"
                      id="surname"
                      name="surname"
                      class="form-control"
                      placeholder="Brinkman"
                      :class="{ 'is-invalid': $v.user.secondName.$error }"
                      v-model.trim="$v.user.secondName.$model"
                    />
                    <div class="invalid-feedback">
                      Пожалуйста введите Фамилию длинее
                      {{ $v.user.secondName.$params.minLength.min }} символов
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>

          <div
            class="tab-pane"
            id="basictab3"
            :class="{ active: active === 'finish' }"
          >
            <div class="row">
              <div class="col-12">
                <div class="text-center">
                  <h2 class="mt-0"><i class="mdi mdi-check-all"></i></h2>
                  <h3 class="mt-0">Спасибо за регистрацию!</h3>

                  <p class="w-75 mb-2 mx-auto">
                    Мы отправим дополнительные данные на вашу почту.
                  </p>

                  <div class="mb-3">
                    <div class="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        class="custom-control-input"
                        id="customCheck1"
                        :class="{ 'is-invalid': !$v.user.checked.$model }"
                        v-model="$v.user.checked.$model"
                      />

                      <label class="custom-control-label" for="customCheck1"
                        >Я согласен с условиями пользования</label
                      >
                      <div class="invalid-feedback">
                        Пожалуйста, примите соглашение
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>

          <div
            v-if="validationError"
            class="alert alert-danger text-center"
            role="alert"
          >
            <i class="dripicons-wrong mr-2"></i> Неверно заполненые поля
          </div>

          <div
            v-if="userExist"
            class="alert alert-danger text-center"
            role="alert"
          >
            <i class="dripicons-wrong mr-2"></i> Пользователь существует
          </div>

          <ul class="list-inline wizard mb-0" v-show="active == 'finish'">
            <li class="next list-inline-item float-right disabled">
              <button class="btn btn-info">{{ submitStatus }}</button>
            </li>
          </ul>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";
import { mapState } from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      active: "account",
      validationError: false,
      userExist: false,
      submitStatus: "Зарегистрироваться",
      user: {
        login: "",
        password: "",
        rePassword: "",
        firstName: "",
        secondName: "",
        email: "",
        checked: false,
      },
    };
  },
  computed: {
    ...mapState({
      regURL: "regURL",
      headers: "headers",
    }),
  },
  methods: {
    changeActive(field) {
      this.active = field;
    },
    registerUser() {
      this.$v.$touch();
      if (this.$v.$invalid || !this.user.checked) {
        this.validationError = true;
      } else {
        const body = JSON.stringify({
          email: this.user.email,
          name: this.user.firstName,
          password: this.user.password,
          second_name: this.user.secondName,
        });

        this.submitStatus = "Проверка";

        fetch(this.regURL, {
          method: "POST",
          headers: this.headers,
          body,
        })
          .then((res) => {
            if (res.ok) return res.json();
            if (res.status === 409) {
              this.userExist = true;
              setTimeout(() => (this.userExist = false), 2000);
              throw new Error(res.statusText);
            }
          })
          .then((json) => {
            this.submitStatus = "Готово";
            this.validationError = false;
            this.$store.commit("setUser", json.user);
            localStorage.setItem("access_token", json.access_token);
            localStorage.setItem("refresh_token", json.refresh_token);
            this.$router.push("/home");
          })
          .catch((err) => console.error(err));
      }
    },
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      rePassword: {
        sameAs: sameAs("password"),
      },
      firstName: {
        required,
        minLength: minLength(3),
      },
      secondName: {
        required,
        minLength: minLength(3),
      },
      checked: {
        required,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  height: 100vh;
  display: flex;
  background: rgb(0 0 0 / 0.01);
}

.form {
  margin: auto;
  padding: 1.5rem;
  min-height: 350px;
  background: #fff;
}
</style>
