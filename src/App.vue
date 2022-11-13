<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layout () {
      const { layout } = this.$route.meta
      if (layout && ['default', 'error'].includes(layout)) {
        return () => import('./layouts/' + layout + '.vue')
      }
      return () => import('./layouts/default.vue')
    }
  }
}
</script>
