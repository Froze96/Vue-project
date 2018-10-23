<template>  
 <transition name="fade">
    <button class="button " v-show="active" @click="scrollTop"> 
      <i class="material-icons button-icon">arrow_upward</i>     
    </button>
 </transition>

</template>

<script>
  export default {
    name: "ApplicationTopButton",
    data () {
      return {
        active: false
      }
    },
    mounted(){     
        window.addEventListener('scroll', this.getScroll);         
        this.getScroll()              
    },
    methods:{
      scrollTop(){
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      },
      getScroll(e){
        return window.pageYOffset > 300 ?  this.active = true :  this.active=false;        
      }

    }

  }
</script>

<style lang="scss">
  .button {
    position: fixed;
    right: 0;
    bottom: 100px;
    z-index: 4;
    padding: 1.5rem;
    border: none;
    outline: none;
    opacity: 0.8;
    background: #cc343b;
    box-shadow: 0 7.5px 25px rgba(0,0,0,.4);
    transition: all 0.2s ease-in;


    &-icon {
      color: #fff;
      font-size: 45px;
      font-weight: 100;
      opacity: 1;
    }
    &:hover {
      background: #B7383E;
      cursor: pointer;
      box-shadow: 0 7.5px 25px rgba(0, 0, 0, 0.6);
      padding: 1rem  1.5rem 2rem;

      .button-icon {
        transform: scale(1.2);
      }
    }
  }

  @media screen and (max-width: 650px) {
    .button {
      padding: .5rem;
    }
  
  }

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
