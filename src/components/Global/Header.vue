<script>
import Logo from "@/components/Header/Logo.vue";
import NavbarHamburger from "@/components/Header/NavbarHamburger.vue";
import NavbarIcon from "@/components/Header/NavbarIcon.vue";
import Navbar from "@/components/Header/Navbar.vue";

export default {
  components: { Logo, NavbarHamburger, NavbarIcon, Navbar },
};
</script>

<template>
  <header class="header" id="header">
    <div class="container">
      <Logo />

      <div class="navbarBox">
        <Navbar />
        <NavbarIcon />
        <NavbarHamburger />
      </div>
    </div>
  </header>
</template>

<style
  lang="scss"
  src="@/assets/scss/layout/header/_header.scss"
  scoped
></style>
