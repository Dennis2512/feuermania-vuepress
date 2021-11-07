<template lang="html">
    <div class="card">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <button class="btn">{{ btntxt }}</button>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    btntxt: String
  }
}
</script>

<style scoped>
h2 {
  border-style: hidden;
}

.card {
  background-color: var(--c-border);
  display: block;
  flex: 30%;
  max-width: 30%;
  border-right-style: solid;
  border-color: #FF3838;
  border-width: 10px;
  border-radius: 4px;
  margin-bottom: 2.5rem;
  /* transition-duration: 0.5s; */
  transition: all .2s ease-in-out;
}

.card:hover {
  /* box-shadow: 10px 10px; */
  transform: scale(1.05);
}

.card h2, p {
  padding: 0 2.5rem;
}

.btn {
  font-size: 12px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  color: white;
  padding: 5px 10px;
  margin: 2.5rem;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
}

@media(max-width: 719px) {
  .card {
    max-width: 100%;
  }
}
</style>


