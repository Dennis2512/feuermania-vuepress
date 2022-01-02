<template lang="html">
  <div class="container">
    <div id="w">
      Made with <span id="heart">❤</span>
    </div>
    <div>
      Copyright © 2021 by Dennis Neumann
    </div>
    <div id="w" class="impr">
    <a href="./Imprint.md">
      Imprint
    </a>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 3rem 0 2.5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
}

a {
  color: white;
  cursor: pointer;
  font-weight: unset;
}

a:hover {
  color: var(--c-brand);
  transition-duration: .2s;
}

#w {
  width: 100px;
}

#heart:hover {
  transition-duration: .2s;
  color: var(--c-brand);
  cursor: none;
}

@media(max-width: 599px) {
  .container {
    flex-direction: column;
  }

  #w {
    padding: 20px 0 20px 0;
  }
}
</style>