<template>
  <div class="contrl">
    <span>{{ctrl_name}}</span>
    <el-switch
      v-model="status"
      active-value="on"
      inactive-value="off"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
  </div>
</template>

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
