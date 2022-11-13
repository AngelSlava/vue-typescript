<template>
  <div class="">
    <h1>Error Layout</h1>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ErrorLayout'
})
export default class ErrorLayout extends Vue {}
</script>
