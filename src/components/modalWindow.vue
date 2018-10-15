<template>

  <transition name="slide-fade">

      <div class="modalWindow">

            <div class="modalWindow__header">
                  <div class="modalWindow__header-title">{{ modalTitle }}</div>
                  <i class="material-icons" @click="$emit('closeModal')" >close</i>        
            </div>

            <div class="modalWindow__body">
                <div class="modalWindow__body-item">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eaque voluptatum mollitia error odit nihil voluptatem cupiditate harum dolorem libero incidunt commodi laboriosam quisquam velit inventore reiciendis amet nulla ab, architecto accusamus tenetur aliquam animi officiis repudiandae. Consectetur, nemo, ipsa.
                </div>
              <div class="modalWindow__body-item">
                  <img src="../assets/header__logo.png" alt="modalImg">
              </div>
                  <div class="modalWindow__body-item">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse saepe, tempora nostrum laudantium id ullam, voluptatem hic distinctio magni illum.
                  </div>        
            </div>

            <div class="modalWindow__footer">
                   {{ modalFooter }} 
            </div>
      </div>

  </transition> 

 
</template>

<script>
export default {
  data () {
    return {
        modalTitle: 'Some words about our group',
        modalFooter: 'Lorem ipsum dolor sit amet.'
    }
  }

}
</script>

<style lang="css" >
  .modalWindow{
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: space-between;   
    width: 70%;
    height: 70vh;    
    padding: 1.5rem;  
    color: #fff;
    top: 3rem;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: rgba(49, 60, 74, 0.6);
    z-index:999;

  }
  .modalWindow__header{
    display: flex;
    justify-content: space-between;
  }
  .modalWindow__header-title{
    font-size: 30px;
  }
  
  .modalWindow__body{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: auto;

  }
  .modalWindow__body-item img{
    width: auto;
    height: 200px;
  }
  .modalWindow__body-item{
    display: flex;
  }

  .modalWindow__footer{
    display: flex;
    justify-content: center;
  }

  .material-icons{
    font-size: 48px;
    cursor: pointer;    
    color: #fff; 
  }


 

 .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
