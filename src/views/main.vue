<style lang="less">
  @import "./main.less";
</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con">
      <shrinkable-menu
        :shrink="shrink"
        :theme="menuTheme"
      >
        <div slot="top" class="logo-con">
          <h1 v-show="!shrink">logo</h1>
          <h4 v-show="shrink">logo</h4>
        </div>
      </shrinkable-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px': '200px'}">
      <div class="main-header">
        <div class="navicon-con">
          <Button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>
      </div>
      <div class="tags-con"></div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px': '200px'}">内容</div>
  </div>
</template>
<script>
import shrinkableMenu from '@/views/main-components/shrinkable-menu/shrinkableMenu.vue'
export default {
  components: {
    shrinkableMenu
  },
  data () {
    return {
      shrink: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    menuTheme () {
      return this.$store.state.App.menuTheme
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    },
    toggleClick () {
      this.shrink = !this.shrink
    }
  }
}
</script>
