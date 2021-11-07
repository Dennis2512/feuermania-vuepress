import { defineClientAppEnhance } from "@vuepress/client";
import Example from "./components/example.vue";
import CardFlexlist from "./components/card-flexlist.vue";
import Card from "./components/card.vue";
  
export default defineClientAppEnhance(({ Vue, options, app, router, siteData }) => {
  app.component("Example", Example);
  app.component("CardFlexlist", CardFlexlist)
  app.component("Card", Card);
});