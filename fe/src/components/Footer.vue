<template>
  <footer>
    <p>© 2016-2017 Web Corporation | <router-link  :to="{name: 'about'}" @click.native="open = false">About</router-link> | <router-link :to="{name: 'TermsOfService'}" @click.native="open = false">TOS</router-link></p>
  </footer>
</template>