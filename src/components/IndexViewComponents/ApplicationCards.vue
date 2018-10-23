<template>
  <div class="application__cards">
    <app-card
      title="Environment"
      imageURL="./src/assets/card1.jpg"
      :cardId="1">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat d officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>

    <app-card
      title="Nature"
      imageURL="./src/assets/card2.jpg"
      :cardId="2">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, praesentium.
      </template>
    </app-card>

    <app-card
      title="Fresh Water"
      imageURL="./src/assets/card3.jpg"
      :cardId="3">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id officiis dcia totam dolorum offici
      </template>
    </app-card>

    <app-card
      title="Saving Forest"
      imageURL="./src/assets/card4.jpg"
      :cardId="4">
      <template slot="content">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil
        quos sit repellat id offcia totam dolorum officiis ducimus unde; repellat id officia totam dolorum officiis ducimus unde;
      </template>
    </app-card>
  </div>
</template>

<script>
  import AppCard from '../Card'
  import cardView from '../cardView'

  export default {
    name: "ApplicationCards",
    components: {
      AppCard,
      cardView
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

  @media screen and (max-width: 600px) {
      .application__cards {
        padding: 1rem 0 2rem;
      } 
    }
</style>
