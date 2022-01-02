---
home: true
title: Home
# heroImage: https://vuejs.org/images/logo.png
# actions:
#   - text: Get Started
#     link: /guide/getting-started.html
#     type: primary
#   - text: Introduction
#     link: /guide/
#     type: secondary
# features:
#   - title: Simplicity First
#     details: Minimal setup with markdown-centered project structure helps you focus on writing.
#   - title: Vue-Powered
#     details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
#     actionText: Test ->
#     actionLink: /guides/
#   - title: Performant
#     details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
#   - title: Themes
#     details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
#   - title: Plugins
#     details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site.
#   - title: Bundlers
#     details: Both Webpack and Vite are supported. Choose the one you like!
# footer: Copyright © 2021 by Dennis Neumann
---

<hero></hero>

---

# Projects

<card-flexlist></card-flexlist>

---

# About

Hi, my name is <span>Dennis</span>. I am a Software Engineer, based in Germany. <span>FeuerMania</span> is a collection of my private projects. If you have any questions or suggestions you can get in contact with me through various social media platforms.

<social-media></social-media>

---

<custom-footer></custom-footer>

<script>
console.log("Hi i am a Console Log!"); // TODO
</script>

<style scoped>
span {
  color: var(--c-brand);
  font-weight: bold;
}
</style>

<!-- Start the server: cd docs, npx vuepress dev -->
