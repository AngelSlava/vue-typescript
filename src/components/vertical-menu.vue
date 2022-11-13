<template>
  <b-nav vertical>
    <b-nav-item
      v-for="(item, index) in navMenuItems"
      :active="index.route === active"
      :key="index"
      :to="{name: item.route}"
      active-class="bg-warning text-dark"
      exact
    >
      <div class="nav-icon" ><b-icon :icon="item.icon" /></div>
      <div class="nav-title">{{ item.title }}</div>
    </b-nav-item>
  </b-nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import navMenuItems from '@/libs/vertical-menu'
@Component
export default class VerticalMenu extends Vue {
  get navMenuItems () {
    return navMenuItems
  }

  get active () {
    return this.$route.name
  }
}
</script>

<style lang="scss">
.nav {
  &-item {
    height: 64px;
  }
  &-link {
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-items: center;
    justify-content: center;
    color: lightgray;
    &:hover {
      color: white;
    }
  }
  &-icon {
    font-size: 16px;
    line-height: 1;
    margin-bottom: .5rem;
  }
  &-title {
    font-size: 12px;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>
