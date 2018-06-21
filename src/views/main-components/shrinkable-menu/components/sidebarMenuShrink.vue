<template>
  <Dropdown placement="right-start" transfer>
    <a href="javascript:void(0)">
      hover 触发
      <Icon type="arrow-down-b"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem>驴打滚</DropdownItem>
      <DropdownItem>炸酱面</DropdownItem>
      <DropdownItem>豆汁儿</DropdownItem>
      <DropdownItem>冰糖葫芦</DropdownItem>
      <DropdownItem>北京烤鸭</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>
<script>
export default {
  name: 'sidebarMenuShrink',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleOpen () {
      this.visible = true
    },
    handleClose () {
      this.visible = false
    }
  }
}
</script>
