<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">Ini User</div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar/Index.vue";
export default {
  name: "User",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>