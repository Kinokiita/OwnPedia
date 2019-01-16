<template>
  <div class="section">
    <div v-if="loading" class="notification is-info">
      <div class="spinner"></div>
    </div>

    <template v-else>
      <h1 class="title">Welcome to my Stories</h1>

      <div class="row">
      <div v-for="post in posts" :key="post.id" class="card large">
            <h2 class="title is-3">
              <router-link :to="{name: 'post', params: {id: post.id}}">{{ post.title  | truncate(10, '...') }}</router-link>
            </h2>
            <p class="content">
              {{ post.body | truncate(150, '...') }}
            </p>
          </div>
      </div>
    </template>
  </div>
</template>

<script>
import Api from "@/Api";
export default {
  data() {
    return {
      loading: true,
      posts: null
    };
  },
  created() {
    Api.getPosts()
      .then(response => {
        this.posts = response.data;
        this.loading = false;
      })
      .catch(() => {
        alert("ERROR");
        this.loading = false;
      });
  }
};
</script>