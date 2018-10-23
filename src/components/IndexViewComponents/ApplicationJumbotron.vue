<template>
  <div class="application__jumbotron">
    <div class="application__jumbotron__title">
      We make better future
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApplicationJumbotron"
  }
</script>

<style lang="scss">
  .application__jumbotron {
    height: calc(100vh - 66px);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
      background: url('../../assets/road.jpg') no-repeat center center;
      background-size: cover;
      content: ' ';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      will-change: transform;
      z-index: -4;
    }

    &__title {
      color: #fff;
      font-size: 5rem;
      font-weight: 600;
      background: rgba(0, 0, 0, 0.3);
      padding: 4rem 0 4rem 0;      
      text-transform: uppercase;
      width: 100%;
      text-align: center;
    }
  }

  @media screen and (max-width: 640px) {
    .application__jumbotron {
      height: calc(100vh - 120px);

      &__title{
        font-size: 2.5rem;       
      }
    }   
  
  }
</style>
