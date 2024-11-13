<template>
  <div
    class="absolute top-0 left-0 w-[543px] overflow-hidden flex flex-row items-start justify-start pt-[11.9px] pb-[57.4px] pl-2 pr-0 box-border gap-[25.9px] max-w-full z-[2] text-left text-10xl text-writing font-syne mq975:flex-wrap"
  >
    <h2
      class="!m-0 w-[261.8px] absolute top-[24.5px] left-[27.3px] text-inherit font-semibold font-[inherit] flex items-center shrink-0 mq450:text-lg mq975:text-5xl"
    >
      Create Account
    </h2>
    <div
      class="flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-full text-lg"
    >
      <div
        class="self-stretch overflow-hidden flex flex-col items-start justify-start pt-[4.9px] px-[6.3px] pb-[0.35px] box-border gap-[23.3px] shrink-0 max-w-full z-[1]"
      >
        <div
          class="self-stretch flex flex-row items-start justify-start gap-[49px] mq1000:flex-wrap"
        >
         <RegistrationForm/>
        </div>
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pl-[9.1px] pr-1.4 box-border max-w-full text-center text-12xl text-gray"
        >
          <div
            class="flex-1 flex flex-row items-start justify-start relative max-w-full"
          >
            <div
              class="h-[49px] w-[476px] absolute !m-0 bottom-0 left-[-9.1px] shadow-[0px_7px_2.8px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-teal-100"
            />
            <h2
              class="m-0 h-[53.2px] w-[467.6px] relative text-inherit font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-full z-[1] mq450:text-2xl mq975:text-7xl"
            >
              Create Account
            </h2>
          </div>
        </div>
        <div
          class="w-[463.75px] flex flex-row items-start justify-start py-0 px-0.35 box-border max-w-full"
        >
          <img
            class="flex-1 relative max-w-full overflow-hidden max-h-full"
            loading="lazy"
            alt=""
            src="/line-1.svg"
          />
        </div>
      </div>
    </div>
    <img
      class="h-[474.6px] w-[105.7px] relative overflow-hidden shrink-0 object-contain"
      loading="lazy"
      alt=""
      src="/frame-7.svg"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import RegistrationForm from "./RegistrationForm.vue";

export default defineComponent({
  name: "CreateAccountButton",
  components: { RegistrationForm },
});
</script>

  