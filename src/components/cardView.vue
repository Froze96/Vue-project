<template>

 <div class="cardView__wrapper" >  
  <div class="cardView__main">
    <div class="cardView__main__header">            
      <div> {{items[viewId-1].title }}</div>
      <i class="material-icons cardView__main__header-icon" @click="$emit('closeCardView')" >close</i>
    </div>

    <div class="cardView__main__body">

      <div class="cardView__main__body__row">
        <div class="cardView__main__body__row-text"> {{items[viewId-1].text }}</div>
        <div class="cardView__main__body__row-img">
          <img :src="items[viewId-1].cardImg" alt="card-image">
        </div>
      </div>

      <div class="cardView__main__body__row">
        <div class="cardView__main__body__row-text"> {{items[viewId-1].text }}</div>
        <div class="cardView__main__body__row-img">
          <img :src="items[viewId-1].cardImg" alt="card-image">
        </div>
      </div>

      <div class="cardView__main__body__row">
        <div class="cardView__main__body__row-text"> {{items[viewId-1].text }}</div>
        <div class="cardView__main__body__row-img">
          <img :src="items[viewId-1].cardImg" alt="card-image">
        </div>
      </div>

    </div>    
   </div>
 </div>         



 

 
</template>

<script>
export default {
  data(){
    return{
    
      items:[
        { 
          title: 'Environment',       
          text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eum nihil quos sit repellat id officia totam dolorum officiis ducimus unde, suscipit iure sunt tenetur, pariatur eligendi aliquid placeat non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum cum repudiandae provident architecto unde neque repellat eum corrupti odio culpa saepe, repellendus natus quis aliquid asperiores deleniti adipisci veniam ad at modi consequuntur doloribus fugiat sequi. Delectus officia, sed numquam maxime nulla quo quod incidunt illum, doloremque explicabo, ducimus repellat eligendi nihil, laboriosam libero! Voluptate beatae provident corporis, animi veniam dignissimos nobis rem placeat, eius, laudantium deleniti odit atque minus!'     ,
          cardImg:'./src/assets/card1.jpg',
          id:1
        },
        {        
          title: 'Nature', 
          text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, hic, earum. Quasi iusto eaque, eius provident hic vel, in omnis nulla architecto magni ab maxime dolor quod quis similique deserunt!',
          cardImg:'./src/assets/card2.jpg',
          id:2
        },
         { 
          title: 'Fresh Water',        
          text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat delectus sequi perspiciatis, quia ratione quae modi esse, nam incidunt!',
          cardImg:'./src/assets/card3.jpg',
          id:3
        },
        {
          title: 'Saving Forest',        
          text:'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo fugiat delectus sequi perspiciatis, quia ratione quae modi esse, nam incidunt!',
          cardImg:'./src/assets/card4.jpg',
          id:4
        },
      ]

    }
  },


  props: {      
    viewId: {
    type: Number,
    default: 0
  }
},
  
  
}
</script>

<style lang="scss" >
 .cardView__wrapper {
    background-color:rgba(0,0,0,.5);
    height:100%;
    position:fixed;
    width:100%;
    top:0;
    left:0;
    z-index: 5;
  }

  .cardView__main {
      position: fixed;
      width: 70%;
      height: auto;
      background: #0E0E20;
      color: #fff;
      padding: 2rem;       
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      overflow-y: auto;

      &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 35px;

        &-icon{
          color: #fff;
          font-size:55px;          
          cursor:pointer;
        }
      }
      &__body{
        display: flex;   
        align-items: center; 
        flex-direction: column;        
        padding: 0 .5rem;


        &__row {
          display: flex;
          flex-direction: row;
          margin-top: 1rem; 
          align-items: center;


          &-text {
            flex: 5;
            text-align: justify;
            word-wrap: break-word;
            margin: .5rem .5rem;
          } 

          &-img {
            width: 100%;
            object-fit: cover;
            height: auto;
            flex: 2;
          }

          &:nth-child(2){
            flex-direction: row-reverse;
          }


        }       
      }
    }





  





  

  

  @media screen and (max-width: 1200px) {
    .cardView__main {        
      width: 80%;        
    }
  }

  @media screen and (max-width: 1000px) {
    .cardView__main {        
      width: 95%; 
      margin: 0 1rem; 
      padding: 0 .5rem;      
    }
   }

  @media screen and (max-width: 750px) {
    .cardView__main { 
      margin: 0 1rem; 
      padding: 0;
 
      &__body__row  {
        flex-direction: column !important;
        margin-bottom: 1.5rem;
      }
     
    } 
  }        
  
    
    

</style>
