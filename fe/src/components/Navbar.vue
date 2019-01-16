<template>
  <header>
    <a href="/" class="logo">OwnPedia</a>
    <router-link class="button responsive-padding" :to="{name: 'home'}" @click.native="open = false">
        <span class="icon-home"></span> Home
    </router-link>
    <router-link class="button responsive-padding" :to="{name: 'post', params: {id: 1} }" @click.native="open = false">
      <span class="icon-link"></span> Own Peds
    </router-link>
    
    <a href="/signup" class="button" target="_blank" rel="noopener noreferrer" style="float:right;"><span class="icon-lock"></span> Signup</a>
    <a href="/signin" class="button" target="_blank" rel="noopener noreferrer" style="float:right;"><span class="icon-user"></span> Sign-In</a>
    
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  }
};
</script>