<template>
    <div class="home">
    <blog-post :post="welcomeScreen"/>
    <blog-post :post="post" v-for="(post , index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View More Blogs</h3>
        <div class="blog-cards">
        <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"> Register for FireBlogs <Arrow class="arrow arrow-light" /> </router-link>
      </div>
    </div>
    </div>
  </template>
<script>
import BlogPost from '@/components/BlogPost.vue'
import BlogCards from '@/components/BlogCard.vue'
import Arrow from '@/assets/Icons/arrow-right-light.svg'
export default {
  name: 'AppHome',
  components: { BlogPost, BlogCards, Arrow },
  data () {
    return {
      welcomeScreen: {
        title: 'Welcome!',
        blogPost:
          'Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
        {
          title: 'This is a Filter Title',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'beautiful-stories'
        },
        {
          title: 'This is a Filter Title',
          blogHTML: 'This is a filter blog post title',
          blogCoverPhoto: 'designed-for-everyone'
        }
      ],
      sampleBlogCards: [
        { blogTitle: 'Blog Card #1', blogCoverPhoto: 'stock-1', blogDate: 'May 1, 2023' },
        { blogTitle: 'Blog Card #2', blogCoverPhoto: 'stock-2', blogDate: 'May 1, 2023' },
        { blogTitle: 'Blog Card #3', blogCoverPhoto: 'stock-3', blogDate: 'May 1, 2023' },
        { blogTitle: 'Blog Card #4', blogCoverPhoto: 'stock-4', blogDate: 'May 1, 2023' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.blog-card-wrap{
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 800px) {
      padding: 125px 100px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
