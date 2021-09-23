<template>
  <div class="auth">
    <Header />
    <div class="wrap bg-black">
      <div class="container">
        <form @submit.prevent class="email">
          <h1 class="text-white text-semi-bold">Registration</h1>

          <div class="">
            <div class="phone">
              <input
                v-model="name"
                type="text"
                placeholder="name"
                class="phone text-white text-semi-bold h3"
              />
            </div>
          </div>
          <div class="">
            <div class="phone">
              <input
                v-model="email"
                type="email"
                placeholder="email"
                class="phone text-white text-semi-bold h3"
              />
            </div>
          </div>
          <div class="">
            <div class="phone">
              <input
                v-model="country_code"
                type="text"
                placeholder="country code"
                class="phone text-white text-semi-bold h3"
              />
            </div>
          </div>
          <div class="">
            <div class="phone">
              <input
                v-model="phone"
                type="text"
                placeholder="phone number"
                class="phone text-white text-semi-bold h3"
              />
            </div>
          </div>
          <div>
            <div class="phone">
              <input
                v-model="open_password"
                type="password"
                placeholder="password"
                class="phone text-white text-semi-bold h3"
              />
            </div>
          </div>

          <button @click="submit">register</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import axios from "axios";

export default {
  components: { Header, Footer },
  data: () => ({
    name: "",
    email: "",
    country_code: "",
    phone: "",
    open_password: "",
    larerrors: "",
  }),
  methods: {
    submit() {
      axios
        .post(process.env.VUE_APP_API_URL + "/api/register", {
          name: this.name,
          email: this.email,
          country_code: this.country_code,
          phone: this.phone,
          open_password: this.open_password,
        })
        .then((res) => {
          this.login(res);
        })
        .catch((err) => {
          this.$store.commit("deleteAuthToken");
          if (err.response.status == 401) {
            this.larerrors = err.response.data.errors;
          } else if (err.response.status == 422) {
            this.larerrors = err.response.data.errors;
          }
        });
    },
    login(res) {
      this.$store.commit("setAuthToken", res.data.token);
      sessionStorage.setItem("user-token", res.data.token);
      this.$router.push("/cinema").catch(() => {});
    },
  },
};
</script>


<style lang="scss" scoped>
.phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrap {
    display: flex;
    position: relative;
    align-items: center;
    .select {
      span {
        display: flex;
        align-items: center;
        padding: 3px 10px 10px 10px;
        border-bottom: 1px solid #ffffff;
        cursor: pointer;
        margin-right: 15px;
        .rotate {
          transform: rotate(-180deg);
        }
        img {
          transition: 0.2s;
          margin-left: 7px;
        }
      }
      .options-wrap {
        position: absolute;
        top: 40px;
        left: 0;
        width: 100%;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 10px;
        background: #161616;
        .options {
          overflow-y: scroll;
          height: 200px;

          .option {
            padding: 5px 5px 5px 10px;
            cursor: pointer;
          }
        }
      }
    }
    .phone {
      position: relative;
      max-width: 255px;
      input {
        padding-left: 15px;
      }
      &:after {
        content: "+";
        position: absolute;
        left: 0;
        top: 3px;
        color: #ffffff;
        font-family: "SemiBold";
        font-size: 18px;
      }
    }
  }
  input {
    padding: 3px 10px 10px 10px;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #ffffff;
    background: transparent;
    max-width: 278px;
    outline: 0;
    position: relative;
  }
}
.auth {
  .wrap {
    min-height: calc(100vh - 87px);
    display: flex;
    align-items: center;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      .buttons {
        h2 {
          text-align: center;
        }
        button {
          font-size: 14px;
          padding: 12px 14px;
          border: 1px solid #999999;
          border-radius: 50px;
          background: transparent;
          outline: 0;
          transition: 0.2s;
          cursor: pointer;
          margin: 50px 8.5px 40px 8.5px;
          &:hover {
            color: #ffffff;
            border: 1px solid #ffffff;
          }
        }
        .active {
          background: #d8004e;
          color: #ffffff;
          border: 1px solid #d8004e;
          &:hover {
            border: 1px solid #d8004e;
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .auth {
    .wrap {
      .container {
        .buttons {
          button {
            padding: 8px 14px;
          }
        }
      }
    }
  }
}
</style>