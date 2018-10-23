<template>
  <div class="application">

    <application-navbar/>
    <application-jumbotron/>
    <application-cards/>
    <application-trends/>
    <application-slider/>
    <application-feedback/> 
    <application-projects/>
    <application-choice/>
	<application-top-button/>
    <application-footer/>
  </div>
</template>

<script>
  import ApplicationNavbar from '../components/IndexViewComponents/ApplicationNavbar'
  import ApplicationJumbotron from '../components/IndexViewComponents/ApplicationJumbotron'
  import ApplicationCards from '../components/IndexViewComponents/ApplicationCards'
  import ApplicationTrends from '../components/IndexViewComponents/ApplicationTrends'
  import ApplicationSlider from '../components/IndexViewComponents/ApplicationSlider'
  import ApplicationFeedback from '../components/IndexViewComponents/ApplicationFeedback'
  import ApplicationProjects from '../components/IndexViewComponents/ApplicationProjects'
  import ApplicationChoice from '../components/IndexViewComponents/ApplicationChoice'
  import ApplicationTopButton from '../components/IndexViewComponents/ApplicationTopButton'
  import ApplicationFooter from '../components/IndexViewComponents/ApplicationFooter'



  export default {
    name: "index",
    components: {
      ApplicationNavbar,
      ApplicationJumbotron,
      ApplicationCards,
      ApplicationTrends,
      ApplicationSlider,
      ApplicationFeedback,
      ApplicationProjects,
      ApplicationChoice,
      ApplicationTopButton,
      ApplicationFooter
    }   
    
  }
</script>
