<template>
  <div class="hello">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-container>
        <el-header>DEVICES</el-header>
        <el-main>
          <el-row :gutter="20">
            <el-col v-for="device in devices" :key="device.id" :span="6">
              <device :device="device"></device>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
  margin-top: 20px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>

<script>
import device from "./Device.vue";
import axios from "axios";
export default {
  components: { device },
  data() {
    return { devices: [] };
  },
  created() {
    axios
      .get("http://localhost:8000/devices/?format=json")
      .then(res => {
        this.devices = res.data
      })
      .catch(err => {
        console.log(err);
      });

    // const res =
    //   '[{"id":"173D001B","name":"BM-33_EVB-01","config":"{\\"switch_led1\\": \\"off\\"}","version":"1.6","confirm":true}]';
    // const devices = JSON.parse(res);
    // this.devices = devices;
  }
};
</script>
