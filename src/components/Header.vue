<template>
  <div class="header">
    <div class="wrapper">
      <a href>
        <img src="../img/Bitmap.png" alt="logo">
      </a>
      <el-menu :router="true" :default-active="'new'" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="new">New</el-menu-item>
        <el-menu-item index="popular">Popular</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>


<style>
@import url("//unpkg.com/element-ui@2.5.3/lib/theme-chalk/index.css");
.wrapper {
  width: 1200px;
  margin: 0 auto;
  display: inline-block;
}
/* .el-menu {
  margin-left: 300px;
}
.el-menu-demo .el-menu--horizontal .el-menu {
  margin-left: 300px;
} */
.el-menu.el-menu--horizontal {
  margin-left: 300px;
  transform: translateY(-40px);
}
.wrapper img {
  margin-left: 2vw;
  transform: translateY(30px);
}
</style>
