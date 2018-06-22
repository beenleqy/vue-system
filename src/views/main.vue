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
        <div class="header-middle-con">
          <div class="main-breadcrumb">
            <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
          </div>
        </div>
        <div class="header-avator-con">
          <full-screen v-model="isFullScreen" ></full-screen>
          <lock-screen></lock-screen>
          <message-tip v-model="mesCount"></message-tip>
        </div>
      </div>
      <div class="tags-con"></div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px': '200px'}">内容</div>
  </div>
</template>
<script>
import shrinkableMenu from '@/views/main-components/shrinkable-menu/shrinkableMenu.vue'
import breadcrumbNav from '@/views/main-components/Breadcrumb.vue'
import fullScreen from '@/views/main-components/fullScreen.vue'
import lockScreen from '@/views/main-components/lockScreen/lockScreen.vue'
import messageTip from '@/views/main-components/messageTip.vue'
export default {
  components: {
    shrinkableMenu,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    messageTip
  },
  data () {
    return {
      shrink: false,
      isFullScreen: false,
      mesCount: 3
    }
  },
  computed: {
    currentPath () {
      return this.$store.state.App.currentPath
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
