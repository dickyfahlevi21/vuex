<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="w-4/5 mx-auto pt-8">
          <product-all />
          <button
            class="float-right text-base rounded-md bg-blue-500 text-white py-2 px-4"
          >Report All</button>

          <table class="table-auto mt-20 mx-auto">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 py-2">No</th>
                <th class="px-4 py-2">Product Name</th>
                <th class="px-4 py-2">Stock</th>
                <th class="px-4 py-2">Price</th>
                <th class="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 py-2">1</td>
                <td class="px-4 py-2">Bawang</td>
                <td class="px-4 py-2">4</td>
                <td class="px-4 py-2">Rp 14.500</td>
                <td class="px-4 py-2">
                  <button class="ml-2">hapus</button>
                  <button>hapus</button>
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-4 py-2">2</td>
                <td class="px-4 py-2">Rinso</td>
                <td class="px-4 py-2">5</td>
                <td class="px-4 py-2">Rp 15.500</td>
                <td class="px-4 py-2">
                  <button class="ml-2">hapus</button>
                  <button>hapus</button>
                </td>
              </tr>
              <tr>
                <td class="px-4 py-2">3</td>
                <td class="px-4 py-2">Bluband</td>
                <td class="px-4 py-2">-2</td>
                <td class="px-4 py-2">Rp 36.500</td>
                <td class="px-4 py-2">
                  <button class="ml-2">hapus</button>
                  <button>hapus</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "@/components/SideBar/Index.vue";
import ProductAll from "@/components/Modal/ProductAll.vue";
export default {
  name: "Product",
  components: { SideBar, ProductAll },
  data() {
    return {};
  },
  methods: {},
};
</script>