<template lang="html">
  <div class="container">
    <!-- <div class="media"></div> -->
    <div class="card">
      <h2>Test</h2>
      <p>Das ist ein Test.</p>
      <div class="bg-nr">01</div>
    </div>
    <div class="card">
      <h2>Test</h2>
      <p>Das ist ein Test.</p>
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

<style scoped>

.bg-nr {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  -webkit-transform: translate(-50%, -50%);
  margin: auto;
  font-size: 100px;
}

h2 {
  border-style: hidden;
}

.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-between;
}

.card {
  background-color: var(--c-border);
  display: block;
  flex: 0 0 100%;
  padding: 0 2.5rem;
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

@media(max-width: 719px) {
.card {
  max-width: 100%;
  padding: 0 2.5rem;
}
}
</style>


