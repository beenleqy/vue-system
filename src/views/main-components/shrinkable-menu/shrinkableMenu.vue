<style>
  @import "menu.less";
</style>
<template>
 <div :style="{background: bgColor}" class="shrinkable-menu">
   <slot name="top">logo1111</slot>
   <sidebar-menu
     v-show="!shrink"
     @on-change="handleChange"
   >
   </sidebar-menu>
   <sidebar-menu-shrink
     v-show="shrink"
   >
   </sidebar-menu-shrink>
 </div>
</template>
<script>
import sidebarMenu from './components/sidebarMenu.vue'
import sidebarMenuShrink from './components/sidebarMenuShrink.vue'
import util from '@/libs/util'
export default {
  name: 'shrinkableMenu',
  components: {
    sidebarMenu,
    sidebarMenuShrink
  },
  props: {
    shrink: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'dark',
      validator (val) {
        return util.oneOf(val, ['dark', 'light'])
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
    bgColor () {
      return this.theme === 'dark' ? '#495060' : '#fff'
    }
  },
  methods: {
    handleChange (name) {
      console.log(name)
    }
  }
}
</script>
