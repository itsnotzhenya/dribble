<template name="content">
  <div v-loading="loading">
    <el-row>
      <div class="pictures" v-for="photo in info" :key="photo.id">
        <img :src="`${URL}${photo.image.contentUrl}`" @click="opened(photo)">
      </div>
    </el-row>
    <modal name="popup" :width="500" :height="450">
      <div class="popup-content" v-if="popapData.id">
        <img class="popup-content__img" :src="`${URL}${popapData.image.contentUrl}`" alt>
        <h2>{{ popapData.name }}</h2>
        <p>{{ popapData.description }}</p>
      </div>
    </modal>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :current-page="page"
        @current-change="setPage"
        :total="total"
        :page-size="limit"
      ></el-pagination>
    </el-row>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "popup",
  data() {
    return {
      info: "",
      picture: [],
      URL: "http://gallery.dev.webant.ru/media/",
      limit: 10,
      page: 1,
      total: 100,
      loading: true,
      popapData: ""
    };
  },
  components: {},
  props: ["type"],
  methods: {
    getData() {
      const params = {
        page: this.page,
        limit: this.limit,
        [this.type]: true
      };
      axios
        .get("/api/photos?", {
          params
        })
        .then(response => {
          this.loading = false;
          this.info = response.data.data;
          this.total = response.data.totalItems;
          console.log(this.info);
        })
        .catch(err => {
          // console.log(err);
        });
    },
    setPage(page) {
      this.page = page;
      this.getData();
    },
    opened(photo) {
      this.popapData = photo;
      this.$modal.show("popup");
    },
    closed() {
      this.$modal.hide("popup");
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
@import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css");

.pictures {
  display: inline-flex;
}
.pictures img {
  object-fit: cover;
  margin: 1vw;
  border-radius: 1vh;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  max-width: 200px;
  max-height: 200px;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.el-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.popup-content {
  width: 480px;
  height: 480px;
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.popup-content__img {
  max-width: 480px;
  max-height: 350px;
  object-fit: cover;
  border-radius: 3px;
}
.popup-content h2 {
  position: absolute;
  font-weight: bold;
  font-size: 14px;
  color: #2f1767;
  top: 370px;
}
.popup-content p {
  font-size: 14px;
  color: #606266;
  line-height: 24px;
  position: absolute;
  top: 390px;
}
</style>
