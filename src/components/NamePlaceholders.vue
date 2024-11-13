<template>
  <div
    class="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-left text-xl text-writing font-syne"
  >
    <div class="h-[76px] flex-1 relative mq450:h-[54px] mq450:text-sm">
      <div
        class="absolute top-0 left-0 font-semibold flex items-center w-[180px] h-[47px] text-lg mq450:text-base"
      >
        {{ firstName }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NamePlaceholders",
  props: {
    firstName: { type: String },
    
  },
});
</script>
