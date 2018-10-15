<template>

 

  <div class="projects">
       <div class="projects__header">Look at our projects</div>

       <div class="projects__body" >         
        
          <div class="projects__column">
              <div class="projects__item" uk-scrollspy="cls: uk-animation-slide-left; repeat: true" v-for="project in leftProjects">
                  <h3 class="projects__item-title">{{ project.title }}</h3>                  
                  <p>{{ project.text }}</p>
                  <button class="projects__item-button">Read more</button>
              </div>
          </div>
          
          <div class="projects__column">
              <div class="projects__item" uk-scrollspy="cls: uk-animation-slide-right; repeat: true" v-for="project in rightProjects">
                    <h3 class="projects__item-title">{{ project.title }}</h3>                   
                    <p>{{ project.text }}</p>
                    <button  class="projects__item-button">Read more</button>
              </div>
          </div>

       </div>
  </div>






 
</template>

<script>
export default {
  data () {
    return {
     
      leftProjects:[
        {
          title:'One',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Two',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Three',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Four',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        }
      ],
      
       rightProjects:[
        {
          title:'Five',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Six',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Seven',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
        {
          title:'Eight',
          text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias saepe non, reprehenderit repellat, dolorum dignissimos.',
        },
      ]
      

     
 
     } 

 }
}
</script>

<style lang="css" scoped>

.projects{
  height: auto;
  background: #0D131C;
  padding: 3rem 2rem;
  
}
.projects__header{
   background-color:rgba(150, 49, 54, .9);  
   width: 50%;
   margin: 0 auto;
   color: #fff;
   font-size: 35px;
   text-align: center;
   padding: 2rem 0  2rem 0;
}
.projects__body{
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;  
  max-width: 80%;
  margin:0 auto;
}
.projects__column{
  width: 45%;

}
.projects__item{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #C2C2C2;
  
  margin-top: 3rem;
  
}
.projects__item-title{
  color:#fff;
  border-bottom: .5px solid #C2C2C2;
  width: 100%;
}
.projects__item-button{
  align-self:  flex-end; 
  padding: .75rem 3.5rem .75rem 3.5rem;
  border:none;
  background:  #963136;  
  cursor: pointer;
  transition: all .5s ease;
  color:#fff;
  outline: none;
}
.projects__item-button:hover{ 
  background: #C13333;  
  border-radius: 8px;
  
}

@media screen and (max-width: 815px){
   .projects__header{
       font-size: 33px;
       width: 70%;
  }     
} 
</style>
