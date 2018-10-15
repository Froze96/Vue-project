<template>

   <div class="card-container ">   

          <div class="card uk-animation-toggle" v-for="card in cards">

                <div class="uk-animation-scale-down">
                       <div class="card__header" >
                          <img :src="card.imgSrc" alt="card-image">                  
                       </div>
                       <div class="card__body">{{ card.text }} </div>

                       <div class="card__footer">
                          <button class="card__footer-button" @click="$emit('cardView',card.id)">View</button>
                      </div>
                </div>

          </div>
    </div> 
     

 
</template>

<script>
export default {
  data () {
    return {

      cards:[
        {
          imgSrc:'./src/assets/card1.jpg',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptates, natus reprehenderit',
          id:1
          
        },
        {
          imgSrc:'./src/assets/card2.jpg',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, est.',
           id:2
         
        },
        {
          imgSrc:'./src/assets/card3.jpg',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam animi harum ad quidem. Commodi!',
           id:3
        },
        {
          imgSrc:'./src/assets/card4.jpg',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam animi harum ad quidem. Commodi!',
           id:4
        },

      ],
       
    }
  }
}
</script>

<style lang="css" scoped>

  .card-container{
    display: flex;
    align-items: center;
    justify-content: space-between;  
    margin-top: .5rem;
    flex-wrap: wrap; 
    max-width: 70%; 
    margin: 0 auto;    
  }


  .card{
    display:flex;
    flex-direction: column;
    justify-content: space-between;  
    background: transparent;
    color: #fff;
    margin: 1rem;
    width: 232px;   
    box-sizing: border-box;
    border-bottom: .5px solid #fff;
  }
  .card__header img{      
    width: 100%;
  }  
  .card__body{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6rem;
    padding: .5rem;
  }

  .card__footer{
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }
  .card__footer-button{
    color: #fff;
    cursor: pointer;
    outline: none;
    border: 3px solid #963136;
    padding: .5rem 1.2rem;
    border-radius: 20px;
    background: transparent;
    transition: all 0.5s ease-out;
  }
  .card__footer-button:hover{
    background: #963136;  
  }

 
</style>
