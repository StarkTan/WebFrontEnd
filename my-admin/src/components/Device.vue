<template>
  <div class="device">
    <div style="margin-bottom: 10px;">
      <span>SN:</span>
      <span style="float:right;">{{device.id}}</span>
    </div>
    <div style="margin-bottom: 10px;">
      <span>Name:</span>
      <span style="float:right;">{{device.name}}</span>
    </div>
    <template v-for="(value, key) in controllers">
      <contrl :value="value" :ctrl_name="key" :key="key"></contrl>
      <el-divider class="divider" :key="key + 'divider'"></el-divider>
    </template>
  </div>
</template>

<script>
import contrl from "./Controller.vue";
import axios from "axios";
export default {
  components: { contrl },
  data() {
    return {
      controllers: null
    };
  },
  created() {
    const config = this.$props.device.config;
    this.controllers = JSON.parse(config);
  },
  methods: {
    change: function(name, value) {
      this.controllers[name] = value;
      axios
        .put("http://localhost:8000/devices/" + this.device.id + "/", {
          config: JSON.stringify(this.controllers)
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  props: ["device"]
};
</script>

<style>
.device {
  background-color: rgb(222, 247, 247);
}
.divider {
  margin-bottom: 10px;
  margin-top: 5px;
}
</style>
