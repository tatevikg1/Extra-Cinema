<template>
  <video
    v-if="videoUrl"
    ref="player"
    :src="`${baseUrl}/storage/${videoUrl}`"
    width="100%"
    height="100%"
    frameborder="0"
    autoplay
    webkitallowfullscreen
    mozallowfullscreen
    allowfullscreen
  ></video>
  <h1 v-else class="text-red loader">{{ message }}</h1>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_API_URL,
      videoUrl: null,
      duration: null,
      seconds: 60,
      message: "",
    };
  },
  created() {
    this.getUrl();
  },
  updated() {
    if (this.$route.name != "ec-seance") {
      this.playPart();
    }
  },
  methods: {
    getUrl() {
      axios
        .post(
          `${process.env.VUE_APP_API_URL}/api/seances/${this.$route.params.id}`,
          { token: this.$store.getters.getAuthToken, type: this.$route.name }
        )
        .then((res) => {
          this.videoUrl = res.data.film.file;
          this.duration = res.data.film.duration;
        })
        .catch((err) => {
          if (err.response.status == 401) {
            this.$store.commit("deleteAuthToken");
            alert("Ошибка аутентификации. Пожалуйста, войдите снова.");
            this.$router.push("/login").catch(() => {});
          } else if (err.response.status == 423) {
            this.message = err.response.data;
            // this.$router.push("/cinema/dashboard").catch(() => {});
          }
          console.log(err);
        });
    },
    playPart() {
      const media = document.querySelector("video");
      media.currentTime = Math.floor(Math.random() * (this.duration - 1)) * 60;
      this.countDownTimer();
    },
    countDownTimer() {
      if (this.seconds > 0) {
        setTimeout(() => {
          this.seconds = this.seconds - 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.$router.push("/cinema/dashboard").catch(() => {});
      }
    },
  },
};
</script>

<style scoped>
video {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 999999;
}
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30%;
}
</style>

