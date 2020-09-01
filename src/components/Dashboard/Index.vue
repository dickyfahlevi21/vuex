<template>
  <div>
    <h1 class="mb-6">Dashboard nya belum rapih</h1>
    <add-modal />
    <sign-out />
  </div>
</template>

<script>
  import SignOut from "@/components/Button/SignOut.vue";
  import AddModal from "@/components/Modal/AddModal.vue";
  export default {
    name: "Dashboard",
    components: {
      SignOut,
      AddModal,
    },
    data() {
      return {};
    },
    methods: {},
  };
</script>
