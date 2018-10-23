<template>
  <div class="application__projects ">
    <div class="application__projects__title">
      Look at our projects
    </div>

    <div class="application__projects__list">
      <project>
        <template slot="title">
          First project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>

      <project>
        <template slot="title">
          Second project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>

      <project>
        <template slot="title">
          Third project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>

      <project>
        <template slot="title">
          Fourth project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>

      <project>
        <template slot="title">
          Fifth project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>

      <project>
        <template slot="title">
          Sixth project
        </template>
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.
        </template>
      </project>
    </div>
  </div>
</template>

<script>
  import Project from '../Project'

  export default {
    name: "ApplicationProjects",
    components: {
      Project
    }
  }
</script>

<style lang="scss">
  .application__projects {
    background: #1b1d29;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 6rem;

    &__title {
      background-color: rgba(150, 49, 54, .9);
      width: 100%;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4rem 0;
      font-size: 3rem;
      font-weight: 600;
      text-transform: uppercase;
      margin-bottom: 2rem;
      text-align: center;
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
      .application__projects {
        padding-bottom: 1.5rem;
        &__title {
          font-size: 2rem;
          padding: 2rem 0;
        }     
      } 
    }
</style>
