<template>
  <a
    :href="link.url"
    class="block text-center py-1 px-4 bg-blue-100 text-blue-500 font-semibold rounded"
  >{{ link.name }}</a>
</template>

<script>
export default {
  name: "AtomButton",
  props: ["link"]
};
</script>