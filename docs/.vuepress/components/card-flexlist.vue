<template lang="html">
  <div class="container">
    <card title="Karte 1" text="Karten 1 Text"></card>
    <card title="Karte 2" text="Karten 2 Text"></card>
    <card title="Karte 3" text="Karten 3 Text"></card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media(max-width: 719px) {
  .container {
    flex-direction: column;
  }
}
</style>


