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
  components: {
    MoleculeCard
  },
  data: () => {
    return {
      cards: [
        {
          title: "Card 1",
          text: "Sed gravida libero sem, sed ornare arcu venenatis at."
        },
        {
          title: "Card 2",
          text:
            "Etiam in arcu lectus. Nulla facilisi. Nunc viverra vehicula nunc eu tristique."
        },
        {
          title: "Card 3",
          text: "Sed gravida libero sem, etiam in arcu lectus."
        }
      ]
    };
  }
};
</script>