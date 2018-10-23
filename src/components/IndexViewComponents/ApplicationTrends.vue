<template>
  <div class="application__trends">
    <div class="application__trends__title">
      Our trends
    </div>

    <div class="application__trends__list">

      <trend imgURL="./src/assets/trend1.svg">
        <template slot="title">
          Eco Energy
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>

      <trend imgURL="./src/assets/trend2.svg">
        <template slot="title">
          Green Forest
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>

      <trend imgURL="./src/assets/trend3.svg">
        <template slot="title">
          Fresh Water
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>

      <trend imgURL="./src/assets/trend4.svg">
        <template slot="title">
          Clear City
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>

      <trend imgURL="./src/assets/trend5.svg">
        <template slot="title">
          Fresh Air
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>

      <trend imgURL="./src/assets/trend6.svg">
        <template slot="title">
          Eco Houses
        </template>

        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.
        </template>
      </trend>
    </div>
  </div>
</template>

<script>
  import Trend from '../Trend'

  export default {
    name: "ApplicationTrends",
    components: {
      Trend
    }
  }
</script>

<style lang="scss">
  .application__trends {
    background: #1b1d29;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 3rem;

    &__title {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 1rem;
      color: #fff;
    }

    &__list {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: 1185px;
    }
  }

  @media screen and (max-width: 600px) {
      .application__trends {
        padding: .5rem 0 1rem 0; 
        &__title {
          font-size: 2rem;         
        }     
      } 
    }
</style>
