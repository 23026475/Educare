<template>
  <div
    class="w-full relative bg-teal-100 overflow-hidden flex flex-col items-start justify-start py-0 pl-[571px] pr-0 box-border leading-[normal] tracking-[normal] mq450:pl-5 mq450:box-border mq800:pl-[285px] mq800:box-border"
  >
    <form
      class="m-0 w-[902px] rounded-tl-21xl rounded-tr-sm rounded-br-sm rounded-bl-21xl bg-white flex flex-col items-start justify-start pt-0 pb-[149px] pl-[66px] pr-[33px] box-border relative gap-[47px] max-w-[104%] mq1150:pl-[33px] mq1150:pb-[97px] mq1150:box-border mq450:gap-[23px] mq450:pb-[63px] mq450:box-border"
    >
      <div
        class="w-[524px] h-[92px] relative overflow-hidden shrink-0 hidden max-w-full z-[0]"
      />
      <Container />
      <div
        class="w-[680px] flex flex-row items-start justify-start pt-0 px-[15px] pb-[35px] box-border max-w-full shrink-0"
      >
        <div
          class="flex-1 flex flex-row items-start justify-start relative max-w-full"
        >   
        </div>
      </div>
      <div>      >
        <div
          class="self-stretch flex-1 relative border-black border-t-[1px] border-solid box-border max-w-full z-[1]"
        />
      </div>
      <h1
        class="!m-[0] w-[673px] absolute top-[107px] left-[-599px] text-21xl font-semibold font-syne text-white text-center flex items-center justify-center z-[4] mq450:text-5xl mq800:text-13xl"
      >
        A Teacher’s Assistant for Engaging and Interactive Learning
      </h1>
      <img
        class="w-[630px] h-[800px] absolute !m-[0] bottom-[-118px] left-[-537px] object-cover z-[5]"
        alt=""
        src="@/images/educare-logo.png"
      />
    </form>
    <div class="w-[397px] h-[314px] absolute !m-[0] top-[0px] left-[0px]">
      <img
        class="absolute top-[31px] left-[34px] w-[95px] h-[69px] overflow-hidden"
        loading="lazy"
        alt="book icon"
        src="@/images/book-icon-transparent-27.jpg"
      />
      <div
        class="absolute top-[-231px] left-[-138px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-darkturquoise-300 border-darkturquoise-200 border-[0px] border-solid box-border w-[537px] h-[547px]"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Container from "../components/Container.vue";

  export default defineComponent({
    name: "LoginPage",
    components: { Container },
  });
</script>