<template>
  <div>
    <Header fluid />
    <div class="dashboard">
      <Sidebar />
      <section class="wrap">
        <div class="container">
          <arrow-back href="ec-home" class="arrow" />
          <Cabinet />
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import ArrowBack from "@/components/ArrowBack";

import Cabinet from "@/components/Cabinet";

export default {
  name: "Dashboard",
  components: { Header, Footer, Sidebar, ArrowBack, Cabinet },
  mounted() {
    document.title = "Extra Cinema | Кабинет";
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  align-items: flex-start;
  width: 100%;
  .wrap {
    position: relative;
    width: 100%;
    // border-left: 1px solid #777777;
    .container {
      max-width: 1150px;
      .arrow {
        left: 15px;
        top: 15px;
      }
    }
  }
}
</style>