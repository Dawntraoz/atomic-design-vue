<template>
  <ul>
    <li v-for="(link, index) in links" :key="link.name + index">
      <AtomLink :link="link"/>
    </li>
  </ul>
</template>

<script>
import AtomLink from "@/components/AtomLink";

export default {
  name: "MoleculeLinks",
  props: ["links"],
  components: {
    AtomLink
  }
};
</script>