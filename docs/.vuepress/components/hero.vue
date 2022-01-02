<template lang="html">
  <div class="container">
    <!-- <h1>{{ typertext }}</h1> -->
    <h1 id="typer">Developing <br>the <span class="red">{</span>code<span class="red">}</span><br> of tomorrow<span class="red">.</span></h1>
    <span class="red blur-dot"></span>
    
  </div>
</template>

<script>
export default {
  props: {
    typertext: String,
  }
}
</script>

<style scoped>
.container {
  height: 50vh;
  position: relative;
}

#typer {
  font-family: monospace;
  text-transform: uppercase;
}

.blur-dot {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: var(--c-brand);
  transition-duration: .2s;
  display: inline-block;
  filter: blur(70px);
  position: absolute;
  bottom: 50px;
  right: 50px;
}

.red {
  color: var(--c-brand);
}
</style>