<template>
  <div id="app">  
   <header-section @showModal="onShowModal"> 
            
   </header-section>


   <modal-window v-if="modalActive"                 
                 @closeModal="onCloseModal">
   </modal-window>



   <div class="slogan  uk-overflow-hidden uk-light ">   
    <div class="slogan__title "  uk-parallax="opacity: 0,0.5,1; y: -100,0; scale: 2,1.5,1; viewport: 0.5;">{{ sloganTitle.toUpperCase() }}</div>
  </div> 


 
  
  <app-card-view  :cardStats="cardStats" 
                   @closeCardView="onCloseCardView">    
  </app-card-view>
 



  <div class="card-section">
    <app-card @cardView="onCardView"> </app-card>
  </div>

  <div class="trend-section"> 
  <app-trend></app-trend>
  </div>

  
  <app-slider> </app-slider>




<div class="review uk-overflow-hidden ">
     <div  class="review__img"    uk-scrollspy="cls: uk-animation-kenburns; repeat: true"> </div>
     <div class="review__form">
        <div class="uk-animation-toggle">
            <div class="review__form-item uk-width-1-1@m uk-width-1-2@l uk-card uk-card-default uk-card-body  uk-animation-fade">

                    <p class="uk-text-center">Leave us a review</p>
                    <app-review-form> </app-review-form>          
                    <div class="uk-divider-icon"></div>
            </div>
        </div>
     </div>
</div>






<app-projects> </app-projects>

<div class="prefooter">
    <div class="prefooter__title" uk-parallax="opacity: 0,0.5,1; y: -100,0; scale: 2,1.5,1; viewport: 0.5;">Choose your future today</div>
     <button class="uk-button uk-button-primary" > Choose </button>      
</div>

 <app-footer> </app-footer>


  






  

  </div>
</template>

<script>

import HeaderSection from './components/header.vue'
import modalWindow from './components/modalWindow.vue'
import appCard from './components/card.vue'
import appCardView from './components/cardView.vue'
import appTrend from './components/trend.vue'
import appSlider from './components/slider.vue'
import appReviewForm from './components/reviewForm.vue'
import appProjects from './components/projects.vue'
import appFooter from './components/footer.vue'


export default {
  name: 'app',
  data () {
    return {
       sloganTitle: 'we make a better future',
       modalActive:false, 
       cardStats:{
          active:false,
          id:0,
       },

    }
  }, 
  methods:{
    onShowModal(){
      this.modalActive = true;
    },
    onCloseModal(){
      this.modalActive = false;
    },
    onCardView(card_id){    
        this.cardStats.id=card_id;
        this.cardStats.active=true;     
    },
    onCloseCardView(){
      this.cardStats.active=false;
    }

  },

  components: {
      HeaderSection,
      modalWindow,
      appCard,
      appCardView,
      appTrend,
      appSlider,
      appReviewForm,
      appProjects,
      appFooter     
  },
}
</script>

<style lang="css">
 

.slogan{
  height: 90vh;
  text-align: center; 
}
  .slogan::before{
    background: url(./assets/road.jpg) no-repeat center center;
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -5; 
  }

  .slogan__title{
    color: #fff;    
    font-size: 75px;
    padding-top: 15%;

  } 
 
  .card-section{ 
    margin:0 auto;
    padding: 2.5rem;
    background: #0D131C;
    background-size: cover;  
  }
  .trend-section{
   padding: 5rem 0 5rem 0;
   background-color:rgba(13, 19, 28, .9);
  }


  .review__img{
    height: 90vh;
    background:url(./assets/rocks.jpg) no-repeat center #2E3742;
    background-size: cover;
  }
  .review__form{
   position: relative;   
   width: 80%;
   margin:0 auto;   
  }
  .review__form-item{  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 88vh;
  overflow: hidden;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 900px; right: 0;
  background-color:rgba(13, 19, 28, .9);
  color:#fff;
  font-size: 22px;
  }

  .prefooter{
    height: 500px;
    background: url(./assets/way.jpg) no-repeat bottom ;
    background-size: cover;
    text-align: center;
  }
  .prefooter__title{
      color: #fff;
      font-size: 35px;
      padding-top: 50px;
      
  }
  

 



@media screen and (max-width: 815px){
   .slogan__title{
   font-size: 45px;
  } 
  .slogan{
    text-align: center;
  }
  .review__form-item{
    height: 90vh;
    bottom:800px;
  }

  
    
  } 
</style>
