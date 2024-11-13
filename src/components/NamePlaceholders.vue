<template>
    <div
      class="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 text-left text-xl text-writing font-syne"
    >
      <div class="h-[108px] flex-1 relative">
        <div
          class="absolute top-[0px] left-[0px] font-semibold flex items-center w-[257px] h-[67px] mq450:text-base"
        >
          {{firstName}}
        </div>
        <img
          class="absolute top-[58px] left-[0px] w-[304px] h-[50px] z-[1]"
          loading="lazy"
          alt=""
          :src="rectangle19"
        />
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "NamePlaceholders",
      props: {
        firstName: { type: String },
        rectangle19: { type: String },
      },
    });
  </script>
  