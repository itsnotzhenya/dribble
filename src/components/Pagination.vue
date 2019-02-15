<template>
  <div class="block">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      :page-size="20"
      :pager-count="11"
    ></el-pagination>
  </div>
</template>

<script>
export default {};
</script>

<style>
.block {
  display: flex;
  justify-content: center;
}
</style>
