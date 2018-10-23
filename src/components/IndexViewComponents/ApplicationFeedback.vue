<template>
 
  <div class="application__feedback uk-overflow-hidden">
    <div class="application__feedback__animation " uk-scrollspy='cls: uk-animation-kenburns; repeat: true'></div>
    <div class="application__feedback__form">
        <div class="application__feedback__form__title">
          Leave us a review 
        </div>
        <feedback-form/>
        <div class="uk-divider-icon"/>
      </div>
    </div>
  </div>

</template>

<script>
  import FeedbackForm from '../FeedbackForm'

  export default {
    name: "ApplicationFeedback",
    data() {
      return {
       
      }
    },
    beforeCreated(){
      
       //  let p = document.getElementsClassName("application__feedback::before");
         //p.setAttribute('uk-scrollspy', 'cls: uk-animation-kenburns; repeat: true');
      
    },
    components: {
      FeedbackForm
    }
  }
</script>

<style lang="scss">
  .application__feedback {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0;

    &__animation {
      background: url('~/src/assets/rocks.jpg') no-repeat center center;
      background-size: cover;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      will-change: transform;
      z-index: -4;
      overflow: hidden;
    }

    &__form {
      background-color: rgba(13, 19, 28, .9);
      padding: 2rem;
      border-radius: 4px;
      max-width:100%;
      

      &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.75rem;
        line-height: 1.75rem;
        text-transform: uppercase;
        color: #fff;
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 1150px) {
    .application__feedback__form{
      width:50%;
    }
  
  }
</style>
