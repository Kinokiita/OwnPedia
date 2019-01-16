<template>
  <div>
    <a class="navbar-burger" @click="open = !open">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <ul>
      <li>
        <router-link :to="{name: 'home'}" @click.native="open = false">
          Home
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'about'}" @click.native="open = false">
          About
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'posts'}" @click.native="open = false">
          Own Peds
        </router-link>
      </li>
    </ul>
  </div>
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