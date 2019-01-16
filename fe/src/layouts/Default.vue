<script>
import NavBar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import FooterBar from "@/components/Footer";
export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  }
};
</script>

<template>
  <div>
    <nav-bar />

    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <side-bar />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>