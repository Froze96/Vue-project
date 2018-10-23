<template>
  <div class="application__choice">
    <div class="application__choice__content">
      <div class="application__choice__title">
        Choose your future today
      </div>
      <div class="application__choice__actions">
        <div class="application__choice__action">
          Choose
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ApplicationChoice"
  }
</script>

<style lang="scss">
  .application__choice {
    position: relative;
    padding: 6rem 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      background: url('../../assets/way.jpg') no-repeat center center;
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

    &__content {
      width: 100%;
    }

    &__title {
      padding: 5rem 0;
      text-align: center;
      font-size: 3rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.3);
    }

    &__actions {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem 0;
    }

    &__action {
      padding: 1rem;
      width: 19rem;
      height: 4rem;
      background: #3b84f3;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 500;
      text-transform: uppercase;
      border-radius: 3px;
      font-size: 1.25rem;
      box-shadow: 0 7.5px 25px rgba(0,0,0,.4);
      cursor: pointer;
      transition: all .1s ease-in;

      &:hover {
        background: #1d5fc5;
        box-shadow: 0 7.5px 25px rgba(0, 0, 0, 0.6);
      }
    }
  }
</style>
