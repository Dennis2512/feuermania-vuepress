<template lang="html">
  <div class="container">
    <!--
    <card title="Title 1" text="Text 1"></card>
    <card title="Title 2" text="Text 2"></card>
    <card title="Title 3" text="Text 3"></card>
    -->
    <card />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

@media(max-width: 719px) {
  .container {
    flex-direction: column;
    align-items: unset;
  }
}
</style>


