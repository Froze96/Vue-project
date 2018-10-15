<template>

  



 

      <div class="trend" >
        <div class="trend__header">Our trends</div>

        <div class="trend__body">

             <div class="trend__body-item"  v-for="trend in trends">
                    <div class="trend__body-logo"><img :src="trend.imgSrc" alt="trend-item"></div>
                    <div class="trend__body-title">{{ trend.title }}</div>                    
                    <div class="trend__body-text">{{ trend.text }}</div>
             </div> 

        </div>
      
      
      </div>


 

 
</template>

<script>
export default {
  data(){
    return{
      trends:[
      {
        imgSrc:'./src/assets/trend1.svg',
        title:'Eco Energy',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      },
      {
        imgSrc:'./src/assets/trend2.svg',
        title:'Green Forest',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      },
      {
        imgSrc:'./src/assets/trend3.svg',
        title:'Fresh Water',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      }, {
        imgSrc:'./src/assets/trend4.svg',
        title:'Clear City',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      },
       {
        imgSrc:'./src/assets/trend5.svg',
        title:'Fresh Air',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      },
       {
        imgSrc:'./src/assets/trend6.svg',
        title:'Eco Houses',
        text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fuga nesciunt, blanditiis ea fugiat nemo.'
      }



      ]
    }
  }
} 
</script>

<style lang="css" >
    .trend{
      display: flex;
      flex-direction: column;
      align-items: center;  
      max-width: 70%;     
      margin: 0 auto;
      color:#fff;
    }
    .trend__header{
      font-size: 35px;
      margin-bottom: 1.5rem;
    }
    .trend__body{
      display: flex;      
      flex-direction: row;
      justify-content: space-between;
      padding: .5rem;      
      flex-wrap: wrap;
     
    }
    .trend__body-item{
      display: flex;
      flex-direction: column;
      width: 30%;      
      margin-top: 1.5rem;
      padding: .5rem;     
      text-align: center;
    }
    .trend__body-title{
      font-size: 24px;
      padding-top: .5rem;      
    }

    .trend__body-text{        
      font-size: 20px;
      margin-top: .5rem;
    }
    .trend__body-logo{
      display: flex;
      justify-content: center;      
    }
    .trend__body-logo img:hover{
      transform: scale(1.2);
       transition:all .5s linear;
     
    }
    


     @media screen and (max-width: 815px){      
         .trend__body-item{
          width: 45%;     
       }
     }


    @media screen and (max-width: 570px){      
         .trend__body-item{
          width: 90%;     
        }

      }
   
 



</style>
