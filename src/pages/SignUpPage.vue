<template>
  <div
    class="w-full h-[1024px] relative bg-teal-200 overflow-hidden flex flex-col items-start justify-start py-0 pl-[579px] pr-0 box-border leading-[normal] tracking-[normal] text-center text-21xl text-white font-syne
    mq450:pl-5 mq450:box-border mq450:h-auto mq975:h-auto mq975:pl-[289px] mq975:box-border"
  >
    <section
      class="w-[902px] rounded-tl-21xl rounded-tr-sm rounded-br-sm rounded-bl-21xl bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-[41px] pb-4 box-border relative gap-[41px] max-w-[105%] text-left text-5xl text-black font-syne
      mq450:gap-5 mq450:w-full mq450:px-4"
    >
      <img
        class="w-[535px] h-[506px] absolute !m-[0] bottom-[-158px] left-[-149px] mq450:hidden"
        alt=""
        src="/ellipse-2.svg"
      />
      <div
        class="self-stretch h-[898px] relative max-w-full mq975:h-auto mq975:min-h-[898px] mq450:h-auto"
      >
        <div class="absolute top-0 left-[442px] w-[369px] h-[244px] mq450:w-full">
          <div
            class="absolute top-[-301px] left-0 rounded-full bg-darkturquoise-100 border-darkturquoise-200 border-0 box-border w-[537px] h-[547px] mq450:w-[300px] mq450:h-[300px]"
          />
          <a
            class="[text-decoration:none] absolute top-[24px] left-[163px] font-semibold text-[inherit] flex items-center w-[373px] h-[45px] z-1 mq450:text-lg mq450:top-0 mq450:left-0"
            >English(UK)</a
          >
        </div>
        <CreateAccountButton />
      </div>
      <div
        class="w-[487px] flex flex-row items-start justify-center max-w-full text-writing mq450:flex-col mq450:items-start mq450:w-full"
      >
        <div class="h-[69px] w-[249px] relative mq450:w-full">
          <div
            class="absolute top-0 left-0 w-[241px] h-[66px] flex flex-row items-start justify-start"
          >
            <div
              class="h-11 absolute !m-0 top-[-40px] right-[-60px] font-semibold flex items-center whitespace-nowrap mq450:static mq450:top-0 mq450:right-0 mq450:text-base"
            >
              Already have an account?
            </div>
            <b
              class="flex-1 relative text-gray text-center z-1 mq450:text-lg"
              >Login</b
            >
          </div>
          <div
            class="absolute h-[calc(100%_-_15px)] top-8 bottom-7 left-[48px] shadow-lg rounded-3xs bg-teal-100 w-[201px] z-2 mq450:w-full"
          />
          <h2
            class="m-0 absolute h-full top-0 left-[46px] text-17xl font-semibold text-gray text-center flex items-center justify-center w-[199px] cursor-pointer z-3 mq450:w-full mq450:text-3xl mq975:text-10xl"
            @click="onLoginTextClick"
          >
            Login
          </h2>
        </div>
      </div>
    </section>
    <div
      class="w-[608px] !m-0 absolute top-[356px] left-[95px] flex flex-row items-start justify-start max-w-full mq450:relative mq450:w-full mq450:flex-col mq450:items-center mq450:mt-8"
    >
      <img
        class="h-[704px] flex-1 relative max-w-full overflow-hidden object-cover z-5 mq450:h-auto mq450:w-full"
        alt=""
        src="/add-a-heading-3-1@2x.png"
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
      this.$router.push("/login-page");
    },
  },
});
</script>
