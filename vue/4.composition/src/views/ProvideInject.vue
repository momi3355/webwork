<template>
  부모
  <div>
    <provide-inject-child />
  </div>
</template>
<script setup>
import { provide, reactive } from "vue";
import ProvideInjectChild from "./ProvideInjectChild.vue";

const item = reactive(["A", "B"]);

provide("itemLength", item.length);
</script>
