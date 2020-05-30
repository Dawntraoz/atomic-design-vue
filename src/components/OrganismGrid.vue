<template>
  <div class="flex flex-wrap items-stretch md:-mr-4">
    <div class="w-full md:w-1/3 md:pr-4 pb-4" v-for="card in cards" :key="card.name">
      <MoleculeCard class="h-full" :card="card"/>
    </div>
  </div>
</template>

<script>
import MoleculeCard from "@/components/MoleculeCard";

export default {
  name: "OrganismGrid",
  props: ["cards"],
  components: {
    MoleculeCard
  }
};
</script>