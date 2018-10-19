<template>
  <div class="application__cards">
    <app-card
      title="Environment"
      imageURL="./src/assets/card1.jpg">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>

    <app-card
      title="Nature"
      imageURL="./src/assets/card2.jpg">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>

    <app-card
      title="Fresh Water"
      imageURL="./src/assets/card3.jpg">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>

    <app-card
      title="Saving Forest"
      imageURL="./src/assets/card4.jpg">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>
  </div>
</template>

<script>
  import AppCard from '../Card'

  export default {
    name: "ApplicationCards",
    components: {
      AppCard
    }
  }
</script>

<style lang="scss">
  .application__cards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 6rem 0 2rem;
    background: #1b1d29;
  }
</style>
