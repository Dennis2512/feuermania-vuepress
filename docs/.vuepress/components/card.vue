<template lang="html">
    <div class="card" v-for="card in cards" :key="card.id">
      <h2>{{ card.title }}</h2>
      <p>{{ card.text }}</p>
      <div class="container">
        <a :href="card.link" target="_blank">
          <!-- <img id="img" src=".././public/github.svg" alt="GitHub"> -->
          <svg id="img" alt="GitHub" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
      </div>      
    </div>
</template>

<script>
export default {
  // props: {
  //   title: String,
  //   text: String
  // },
  data: function() {
    return {
      cards: [
        { id: '001', title: 'kiNOW', text: 'Android application for cinema ticket booking. The user can choose between different locations and multiple movies. For educational purposes only.', link: 'https://github.com/Dennis2512/kiNOW' },
        { id: '002', title: 'TCP Chat', text: 'Chat application using the TCP protocol. User registration and group chats are implemented. For educational purposes only.', link: 'https://github.com/Dennis2512/Distributed_Systems_TCP_Chat' },
        { id: '003', title: 'DiseaseFinder', text: 'Web application for checking symptoms online. The app tries to predict possible diseases the user might have. For educational purposes only.', link: 'https://github.com/Dennis2512/DiseaseFinder' }
      ]
    }
  }
}
</script>

<style scoped>
h2 {
  border-style: hidden;
}

.card {
  /* background-color: var(--c-border); */
  /* background-color: #222; */
  background-color: var(--c-bg-light);
  display: block;
  flex: 30%;
  max-width: 30%;
  border-right-style: solid;
  border-color: var(--c-brand);
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

.card h2 {
  padding: 0 0.25rem 0 2.5rem;
}

.card p {
  padding: 0 1rem 1rem 2.5rem;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  border-top: 1px solid var(--c-border);
}

#img {
  fill: var(--c-text);
  max-height: 3.5vh;
  width: 3.5vh;
  display: block;
  margin: 10px 0 10px 10px;
  transition-duration: .2s;
  cursor: pointer;
}

#img:hover {
  fill: var(--c-brand);
}

@media(max-width: 950px) {
  .card h2 {
    padding: 0 0.25rem 0 1.5rem;
  }

  .card p {
    padding: 0 1rem 1rem 1.5rem;
  }
}

@media(max-width: 719px) {
  .card {
    max-width: 100%;
  }
}
</style>


