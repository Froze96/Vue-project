<template>	
	<nav class="navbar">
		<i class="material-icons show-icon" v-if="!show" @click = "show = !show">reorder</i>
		<i class="material-icons show-icon" v-else="!show" @click = "show = !show">subject</i>  

		<ul class="navbar__list" v-if="show">

			<li class="navbar__list-item" v-for="item in navbarItems" >
				<a   :href=" item.link "    class="navbar__link"> {{ item.name.toUpperCase() }} </a>
			</li>

			 <li class="navbar__list-item">
				<button   class="navbar__modal" @click="$emit('showModal')"> ABOUT </button>
			</li> 

		</ul>

	</nav>
</template>
<script>
 	
	export default{
		data () {
		    return {
		     show: true,		   
		     windowWidth: 0,		      
		     navbarItems:[
		      		{
		      			name: "home",
		      			link:  "#"
		      		},
		      		{
		      			name: "proojects",
		      			link:  "https://www.google.ru/"
		      		},
		      		{
		      			name: "blog",
		      			link: "#",
		      			
		      		}		
		      		
		      ],
		}
    },


    


    
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);  
      //Init
    this.getWindowWidth()  
    })   
  },

  methods: {
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;
        this.windowWidth > 800 ? this.show = true : this.show = false;
      }  
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);   
  },
  

}


</script>


<style lang="css" >

	 

	.navbar{
		display: flex;		
		padding: .5rem;	
		flex:1 1 auto;
	}
	.navbar__list{
		list-style: none;
		display: flex;
		flex-direction: row;
		justify-content: space-around;	
		align-items: center;
		flex:auto;		
	}
	.navbar__list-item{
		display: flex;		
		border: 3px solid #963136;
		padding: .5rem 1.2rem;
		border-radius: 20px;
		transition: all 0.5s ease-out;
	}
	.navbar__list-item:hover{
		background: #963136;	
	}

	.navbar__link{
		text-decoration: none;
		color: #fff;
	}


	.material-icons{
		font-size: 48px;
		cursor: pointer;	  
		color: #fff; 
	}
	.show-icon{
		display: none; 
	}


	 	
		@media screen and (max-width: 815px){
	     .material-icons{
			display: block;
		  }	  
		 .navbar__list{
		 	position: absolute;
		 	display: flex;
		 	flex-direction: column;
		 	align-items: stretch;
		 	flex: 1 1 auto;
		 	justify-content: space-around;
		 	padding: .5rem 2.7rem;
		 	top:6.1rem;
		 	left:18.5%;
		 	height: 15rem;
		 	background: #5C5C5C;
		 	border-radius: 0 0 10px 10px;
		 	z-index: 2;

		 }
		 .navbar__list-item{		 	
		 	justify-content: center;	 	
		 }		

	}	


	 



</style>