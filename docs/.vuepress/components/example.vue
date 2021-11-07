<template lang="html">
  <div class="container">
    <!-- <div class="media"></div> -->
    <div class="card">
      <h2>Test</h2>
      <p>Das ist ein Test. {{ var }} </p>
    </div>
    <div class="card">
      <h2>Test</h2>
      <p>Das ist ein Test. {{ gustav }}</p>
    </div>
    <div class="card">
      <h2>Test</h2>
      <p>Das ist ein Test.</p>
    </div>
    <div class="card">
      <h2>Test <Badge text="beta" type="danger"/></h2>
      <p>Das ist ein Test.</p>
    </div>
  </div>
</template>

<script>
export default {
  // Accept any var type
  // props: [
  //   'var',
  //   'gustav'
  // ]
  props: {
    var: String,
    gustav: String
  }
}
</script>

<style scoped>
h2 {
  border-style: hidden;
}

/* .container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
} */

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-items: stretch; */
  /* align-content: stretch; */
}

.card {
  background-color: var(--c-border);
  display: block;
  flex: 30%;
  max-width: 30%;
  /* flex: 0 0 100%; */
  /* padding: 0 2.5rem; */
  border-right-style: solid;
  border-color: #FF3838;
  border-width: 10px;
  border-radius: 4px;
  margin-bottom: 2.5rem;
  transition-duration: 0.5s;
}

.card:hover {
  box-shadow: 10px 10px;
}

.card h2, p {
  padding: 0 2.5rem;
}

@media(max-width: 719px) {
  .container {
    flex-direction: column;
  }

  .card {
    max-width: 100%;
    /* padding: 0 2.5rem; */
  }
}
</style>


