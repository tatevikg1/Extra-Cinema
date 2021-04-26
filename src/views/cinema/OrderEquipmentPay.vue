<template>
  <div>
    <Header />
    <section class="wrap">
      <div class="container">
        <arrow-back href="order-equipment"/>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowBack from "@/components/ArrowBack";
export default {
  name: "OrderEquipmentPay",
  components: {
    Header,
    Footer,
    ArrowBack
  },
};
</script>

<style lang="scss" scoped>
</style>