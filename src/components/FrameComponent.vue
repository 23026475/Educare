<template>
    <div
      class="w-[598px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-5xl text-writing font-syne mq975:gap-5"
    >
      <div class="relative font-extrabold z-[1] mq450:text-lgi">
        Enter your email address or phone number and we’ll send you reset
        instructions
      </div>
      <div
        class="w-[563px] h-[131px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[30px] max-w-full"
      >
        <input
          class="w-[calc(100%_-_0px)] [border:none] [outline:none] font-semibold font-inter text-xl bg-[transparent] self-stretch relative text-writing text-left inline-block min-w-[250px] p-0 mq450:text-base"
          placeholder="Where would you like to receive the instructions?"
          type="text"
        />
        <div
          class="self-stretch flex-1 rounded-3xs bg-white border-black border-[2px] border-solid box-border flex flex-row items-start justify-end pt-2.5 px-[11px] pb-[9px] max-w-full"
        >
          <div
            class="h-[73px] w-[557px] relative rounded-3xs bg-white border-black border-[2px] border-solid box-border hidden max-w-full"
          />
          <img
            class="h-12 w-12 relative z-[1]"
            alt=""
            src="/iconparkoutlinedropdownlist.svg"
          />
        </div>
      </div>
      <div
        class="w-[435px] relative text-xl font-semibold font-inter flex items-center max-w-full mq450:text-base"
      >
        Enter your email/phone number
      </div>
      <div
        class="w-[557px] h-[73px] relative rounded-3xs bg-white border-black border-[2px] border-solid box-border max-w-full"
      />
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "FrameComponent",
    });
  </script>
  