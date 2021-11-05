import { defineClientAppEnhance } from "@vuepress/client";
import Example from "./components/example.vue";
  
export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Example", Example);
});