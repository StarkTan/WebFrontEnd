<template>
  <div class="device">
    <span>SN:{{device.id}}</span>
    <br />
    <template v-for="(value, key) in controllers">
      <contrl :value="value" :ctrl_name="key" :key="key"></contrl>
    </template>
  </div>
</template>

<script>
import contrl from "./Controller.vue";
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
      this.controllers[name] = value
    }
  },
  props: ["device"]
};
</script>
