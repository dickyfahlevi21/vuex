<template>
  <div>
    <h1 class="mb-6">Dashboard nya belum rapih</h1>
    <product-all />
    <product-in />
    <product-out />

    <sign-out class="mt-8" />
  </div>
</template>

<script>
  import SignOut from "@/components/Button/SignOut.vue";
  import ProductAll from "@/components/Modal/ProductAll.vue";
  import ProductIn from "@/components/Modal/ProductIn.vue";
  import ProductOut from "@/components/Modal/ProductOut.vue";
  export default {
    name: "Dashboard",
    components: {
      SignOut,
      ProductAll,
      ProductIn,
      ProductOut,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
