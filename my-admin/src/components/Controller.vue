<template>
  <div class="contrl">
    <span>{{ ctrl_name.split('_')[1].toUpperCase() }}</span>
    <el-switch
      v-model="status"
      active-value="on"
      inactive-value="off"
      active-color="#13ce66"
      inactive-color="#ff4949"
      style="float:right"
    ></el-switch>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    status: {
      get: function() {
        return this.$props.value;
      },
      set: function(val) {
        this.$parent.change(this.$props.ctrl_name, val)
      }
    }
  },
  props: ["ctrl_name", "value"]
};
</script>
