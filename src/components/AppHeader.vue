<template>
    <header
      class="w-[1214px] !m-[0] absolute top-[50px] left-[31px] flex flex-row items-end justify-between gap-5 max-w-full text-center text-xl text-white font-syne"
    >
      <div class="flex flex-col items-start justify-end pt-0 px-0 pb-[34px]">
        <div
          class="self-stretch flex flex-col items-start justify-start gap-[17px]"
        >
          <div
            class="flex flex-row items-start justify-start py-0 pl-[30px] pr-[39px]"
          >
            <img
              class="h-[65px] w-[70.5px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div
            class="self-stretch flex flex-row items-start justify-start relative"
          >
            <div
              class="h-[253px] w-[364px] absolute !m-[0] top-[-132px] right-[-193px]"
            >
              <img
                class="absolute top-[-253px] left-[-171px] w-[535px] h-[506px]"
                alt=""
                src="/ellipse-4-2.svg"
              />
            </div>
            <a
              class="[text-decoration:none] flex-1 relative font-bold text-[inherit] z-[1]"
              >Homepage</a
            >
          </div>
        </div>
      </div>
      <h1
        class="m-0 w-[547px] relative text-21xl font-bold font-[inherit] text-writing text-left flex items-center shrink-0 max-w-full z-[1]"
      >
        Forgot password
      </h1>
    </header>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "AppHeader",
    });
  </script>
  