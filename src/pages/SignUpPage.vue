<template>
  <div
    class="w-full  relative bg-teal-200 overflow-hidden flex flex-col items-start justify-start py-0 pl-[579px] pr-0 box-border leading-[normal] tracking-[normal] text-center text-21xl text-white font-syne
    mq450:pl-5 mq450:box-border mq450:h-auto mq975:h-auto mq975:pl-[289px] mq975:box-border"
>
    <section
      class="w-full rounded-tl-21xl rounded-tr-sm rounded-br-sm rounded-bl-21xl bg-white overflow-hidden flex  justify-center pt-0 px-[41px] pb-4 box-border relative gap-[41px] max-w-[105%] text-left text-5xl text-black font-syne
      mq450:gap-5 mq450:w-full mq450:px-4">
      
      <div
        class="h-[150vh] relative w-full mq975:h-auto mq975:min-h-[898px] mq450:h-auto">
        <CreateAccountButton />
      </div>
      
    </section>
    <div
      class="w-[608px] !m-0 absolute top-[356px] left-[95px] flex flex-row items-start justify-start max-w-full mq450:relative mq450:w-full mq450:flex-col mq450:items-center mq450:mt-8"
    >
      <img
        class="h-[704px] flex-1 relative max-w-full overflow-hidden object-cover z-5 mq450:h-auto mq450:w-full"
        alt=""
        src="@/images/educare-logo.png"
      />
      <div
        class="w-[647px] !m-0 absolute top-[-245px] left-[-95px] flex flex-col items-end justify-start py-0 px-0 box-border mq450:relative mq450:top-0 mq450:left-0 mq450:w-full"
      >
        <h1
          class="m-0 w-[673px] h-[275px] relative text-inherit font-semibold flex items-center justify-center shrink-0 max-w-[105%] z-4 mq450:text-3xl mq450:w-full"
        >
          A Teacher’s Assistant for Engaging and Interactive Learning
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CreateAccountButton from "../components/CreateAccountButton.vue";

export default defineComponent({
  name: "SignUpPage",
  components: { CreateAccountButton },
  methods: {
    onLoginTextClick() {
      this.$router.push("/");
    },
  },
});
</script>
