<template>
  <component :is="tag" class="text-3xl font-serif pb-2">{{ content }}</component>
</template>

<script>
export default {
  name: "AtomTitle",
  props: ["tag", "content"]
};
</script>
