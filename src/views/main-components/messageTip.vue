<style>
</style>
<template>
 <div class="header-btn-con message-tip-btn-con">
   <Tooltip placement="bottom" :content="value > 0 ? '有' + value + '条未读消息': '无未读消息'">
     <Badge :content="value" dot>
       <Icon type="ios-bell" size="22"></Icon>
     </Badge>
   </Tooltip>
 </div>
</template>
<script>
export default {
  name: 'messageTip',
  props: {
    value: {
      type: Number,
      defalt: 0
    }
  }
}
</script>
