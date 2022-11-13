<template>
  <div class="default-layout">
    <aside class="default-layout__sidebar">
      <vertical-menu />
    </aside>
    <main class="default-layout__content">
      <header>header</header>
      <section>
        <router-view />
      </section>
      <footer>footer</footer>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VerticalMenu from '@/components/vertical-menu.vue'

@Component({
  name: 'DefaultLayout',
  components: { VerticalMenu }
})
export default class LayoutDefault extends Vue {}
</script>
