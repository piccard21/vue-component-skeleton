import VueComponentSkeleton from './VueComponentSkeleton.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-component-skeleton', VueComponentSkeleton);
  }
};