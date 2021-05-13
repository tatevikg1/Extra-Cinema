<template>
  <div>
    <Header fluid />
    <div class="dashboard bg-black">
      <Sidebar @sidebarClick="toggleView" />
      <section class="wrap">
        <div class="container">
          <arrow-back href="ec-home" class="arrow" />
          <Cabinet v-if="currentView == 'cabinet'" />
          <Company v-if="currentView == 'company'" />
          <Projector v-if="currentView == 'projector'" />
          <my-halls
            v-if="currentView == 'myHalls'"
            @onEdit="currentView = 'company'"
          />
          <start-session v-if="currentView == 'startSession'"/>
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

import Cabinet from "@/components/dashboard/Cabinet";
import Company from "@/components/dashboard/Company";
import Projector from "@/components/dashboard/Projector";
import MyHalls from "@/components/dashboard/MyHalls";
import StartSession from '@/components/dashboard/StartSession'

export default {
  name: "Dashboard",
  components: {
    Header,
    Footer,
    Sidebar,
    ArrowBack,
    Cabinet,
    Company,
    Projector,
    MyHalls,
    StartSession
  },
  data() {
    return {
      currentView: "cabinet",
    };
  },
  methods: {
    toggleView(view) {
      this.currentView = view;
    },
  },
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
    max-width: 100%;
    width: 100%;
    transition: 0.3s;
    border-left: 1px solid #777777;
    height: 100%;
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