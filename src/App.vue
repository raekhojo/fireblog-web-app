<template>
  <div class="app-wrapper">
    <div class="app">
      <app-navigation-vue/>
      <router-view />
      <app-footer/>
    </div>
  </div>
</template>

<script>
import AppNavigationVue from './components/AppNavigation.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'app',
  components: {
    AppNavigationVue,
    AppFooter
  },
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
// .container {
//   max-width: 1440px;
//   margin: 0 auto;
// }
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.link-light {
  color: #fff;
}
.error{
  color: red;
}
@media screen and (max-width: 768px) {
  // .app{
  //    overflow-x:hidden;
  // }
}

.arrow{
  margin-left: 8px;
  width: 12px;
  path{
    fill: black;
  }
}

.arrow-light{
  path{
    fill: white;
  }
}
button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}
.blog-card-wrap{
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;

  @media (min-width: 500px) {
    padding: 100px 16px;
  }
}

.blog-card-wrap {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (min-width: 500px) {
    padding: 100px 100px;
  }
  .blog-cards {
    display: grid;
    gap: 22px;
    grid-template-columns: 1fr;
    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
