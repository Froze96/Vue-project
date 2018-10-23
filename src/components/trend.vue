<template>
  <div class="trend">
    <div class="trend__image">
      <img :src="imgURL" alt="trend-item">
    </div>

    <div class="trend__title">
      <slot name="title"/>
    </div>

    <div class="trend__content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Trend",
    props: {
      imgURL: {
        type: String,
        required: true
      }
    }
  }
</script>

<style lang="scss">
  .trend {
    width: calc(33% - 2rem);
    margin: 1rem;
    &__image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      margin-bottom: 1rem;
      & img {
        width: 115px;
        height: auto;
        object-fit: contain;
      }
    }
    &__title {
      font-size: 1.25rem;
      line-height: 1.25rem;
      font-weight: 500;
      text-align: center;
      margin-bottom: calc(.5rem + 2px);
      padding-bottom: calc(.5rem + 2px);
      position: relative;
      color: #fff;
      &::after {
        content: '';
        position: absolute;
        width: 60%;
        left: 50%;
        transform: translateX(-50%);
        bottom: -2px;
        height: 2px;
        background: #fff;
      }
    }
    &__content {
      font-size: .9rem;
      line-height: 1rem;
      font-weight: 300;
      padding: 0 2rem;
      text-align: justify;
      word-break: break-all;
      color: #fff;
    }
  }

   @media screen and (max-width: 1200px) {
      .trend {
        width: calc(50% - 2rem);
        margin: 1rem .5rem;
        &__content {
          padding: 0 .5rem;
        }
      }
    }

    @media screen and (max-width: 600px) {
      .trend {
        width: 100%;       
      } 
    }
</style>