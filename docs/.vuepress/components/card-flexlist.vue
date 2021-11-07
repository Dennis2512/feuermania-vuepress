<template lang="html">
  <div class="container">
    <card title="Karte 1" text="Karten 1 Text" btntxt="Klick 1"></card>
    <card title="Karte 2" text="Karten 2 Text" btntxt="Klick 2"></card>
    <card title="Karte 3" text="Karten 3 Text" btntxt="Klick 3"></card>
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


