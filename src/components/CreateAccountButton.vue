<template>
  <div class="absolute top-0 left-0 w-full overflow-hidden flex flex-row items-center justify-center pt-[12px] pb-[60px] pl-2 pr-0 box-border gap-[25.9px] max-w-full z-[2] text-left text-10xl text-writing font-syne mq975:flex-wrap">
    
    <h1 class="!m-0 w-[261.8px] absolute top-[24.5px] left-[27.3px] text-inherit font-semibold font-[inherit] flex items-center  mq450:text-lg mq975:text-5xl">
      Create Account
    </h1>

    <div class="flex items-center justify-center pt-[49px] px-0 pb-0 box-border max-w-full">
      <RegistrationForm/>
    </div>
    
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

  