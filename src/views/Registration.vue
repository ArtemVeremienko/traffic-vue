<template>
  <div class="wrapper">
    <form class="form col-md-5" @submit.prevent="registerUser" novalidate>
      <div id="basicwizard">
        <ul class="nav nav-pills nav-justified form-wizard-header mb-4">
          <li class="nav-item">
            <a data-toggle="tab" class="nav-link rounded-0 pt-2 pb-2 active">
              <i class="mdi mdi-face-profile mr-1"></i>
              <span class="d-none d-sm-inline">Регистрация</span>
            </a>
          </li>
        </ul>

        <div class="tab-content b-0 mb-0">
          <div class="tab-pane active" id="basictab1">
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

          <div class="d-flex flex-column align-items-center">
            <button
              class="btn btn-info mb-1"
              :disabled="!user.email || !user.password || !user.rePassword"
            >
              {{ submitStatus }}
            </button>
            <router-link to="/auth">Уже есть аккаунт?</router-link>
          </div>
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
      validationError: false,
      userExist: false,
      submitStatus: "Зарегистрироваться",
      user: {
        email: "",
        password: "",
        rePassword: "",
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
