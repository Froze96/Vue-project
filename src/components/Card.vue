<template>
 <div class="card">

   <div :class="['card__header', imageURL ? 'card__header--background' : 'card__header--primary']">
     <img
       :src="imageURL"
       class="card__header-image"
       alt="card-image">

     <div
       v-if="title"
       class="card__header-title">
       {{ title }}
     </div>
   </div>

   <div class="card__body">
     <div class="card__body__content">
       <slot name="content"/>
     </div>
   </div>

   <div class="card__actions">
     <button
       class="card__action card__action--open">
       View
     </button>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      imageURL: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .card {
    max-width: 325px;
    margin: .5rem;

    &__header {
      display: flex;
      align-items: center;
      position: relative;
      border-radius: 3px;
      overflow: hidden;

      &--primary {
        justify-content: flex-start;
        padding: 1rem;
      }

      &--background {
        justify-content: center;
        padding: 4rem 1rem;
      }

      &-image {
        width: 100%;
        position: absolute;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        filter: brightness(55%);
      }

      &-title {
        position: relative;
        z-index: 2;
        color: #fff;
        font-size: 1.5rem;
        line-height: 1.5rem;
        text-transform: uppercase;
        font-weight: 500;
      }
    }

    &__body {
      padding: 1.5rem 1.5rem 0;
      background: #f8faff;
      border-left: 2px solid #ad0c13;
      border-right: 2px solid #ad0c13;

      &__content {
        font-size: .9rem;
        font-weight: 400;
        line-height: 1rem;
        color: rgba(35, 46, 58, 0.6);
      }
    }

    &__actions {
      padding: 1.5rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: #f8faff;
      border-bottom: 2px solid #ad0c13;
      border-left: 2px solid #ad0c13;
      border-right: 2px solid #ad0c13;
      border-radius: 0 0 3px 3px;
    }

    &__action {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      border: 0;
      padding: .5rem;
      height: 2.75rem;
      background: transparent;
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      color: #bd3137;
      border-radius: 3px 3px 0 0;
      cursor: pointer;
      transition: all 0.1s ease-in;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        background: #cc343b;
        left: 0;
        bottom: -3px;
      }

      &:hover {
        background: #cc343b;
        color: #fff;
      }
    }
  }
</style>
