<template>
  <section class="flex flex-col min-h-screen">
    <OrganismHeader/>
    <div class="flex-auto flex flex-wrap bg-white">
      <OrganismBanner class="w-full md:w-3/4 text-center md:text-left"/>
      <div class="container mx-auto px-4 py-8 md:py-16">
        <OrganismGrid/>
      </div>
    </div>
    <OrganismFooter/>
  </section>
</template>

<script>
import OrganismHeader from "@/components/OrganismHeader";
import OrganismFooter from "@/components/OrganismFooter";
import OrganismBanner from "@/components/OrganismBanner";
import OrganismGrid from "@/components/OrganismGrid";

export default {
  name: "TemplateLanding",
  components: {
    OrganismHeader,
    OrganismFooter,
    OrganismBanner,
    OrganismGrid
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>