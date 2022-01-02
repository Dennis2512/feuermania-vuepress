import { defineClientAppEnhance } from "@vuepress/client";
import Example from "./components/example.vue";
import CardFlexlist from "./components/card-flexlist.vue";
import Card from "./components/card.vue";
import SocialMedia from "./components/social-media.vue";
import Hero from "./components/hero.vue";
import CustomFooter from "./components/custom-footer.vue";
// import Imprint from "./components/imprint.vue";
  
export default defineClientAppEnhance(({ Vue, options, app, router, siteData }) => {
  app.component("Example", Example);
  app.component("CardFlexlist", CardFlexlist)
  app.component("Card", Card);
  app.component("SocialMedia", SocialMedia);
  app.component("Hero", Hero);
  app.component("CustomFooter", CustomFooter);
  // app.component("Imprint", Imprint);
});