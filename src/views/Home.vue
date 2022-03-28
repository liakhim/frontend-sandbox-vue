<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MessageToggle/>
  </div>
</template>

<script>
// @ is an alias to /src
import MessageToggle from "../components/MessageToggle";

export default {
  name: 'Home',
  components: {
    MessageToggle
  }
}
</script>
