<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <slot />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>