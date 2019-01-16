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

    <div class="container">
      <div class="row">
        <div class="col-sm-2">
          <side-bar />
        </div>
        <div class="col-sm-10">
          <slot />
        </div>
      </div>
    </div>

    <footer-bar />
  </div>
</template>