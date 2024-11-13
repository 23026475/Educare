<template>
    <Header></Header>
    <div
      class="w-full relative bg-teal-100 overflow-hidden flex flex-row items-start justify-end leading-[normal] tracking-[normal]"
    >
      <section
        class="w-[900px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[248px] pb-[152px] pl-[159px] pr-[131px] box-border relative gap-[107px] max-w-full text-center text-13xl text-gray font-syne mq450:gap-[27px] mq450:pt-[105px] mq450:px-5 mq450:pb-16 mq450:box-border mq1000:gap-[53px] mq1000:pt-[161px] mq1000:pb-[99px] mq1000:pl-[79px] mq1000:pr-[65px] mq1000:box-border"
      >
        <img
          class="w-[535px] h-[506px] absolute !m-[0] bottom-[-166px] left-[-131px]"
          loading="lazy"
          alt=""
          src="/ellipse-4.svg"
        />
        <img
          class="w-[535px] h-[506px] absolute !m-[0] top-[-170px] right-[-124px]"
          alt=""
          src="/ellipse-4-1.svg"
        /><FrameComponent />
        <div
          class="self-stretch flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border max-w-full"
        >
          <div class="h-[81px] flex-1 relative max-w-full">
            <div
              class="absolute top-[8px] left-[0px] shadow-[0px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-xl bg-teal-100 w-[600px] h-[73px] z-[1]"
            />
            <h2
              class="m-0 absolute top-[0px] left-[8px] text-inherit font-semibold font-[inherit] flex items-center justify-center w-full h-full z-[2] mq450:text-lgi mq1000:text-7xl"
            >
              Get Instructions
            </h2>
          </div>
        </div>
      </section>
      <img
        class="h-[750px] w-[666px] absolute !m-[0] bottom-[0px] left-[31px] object-cover z-[3]"
        alt=""
        src="/add-a-heading-3-4@2x.png"
      />
      <header />
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
    import FrameComponent from "../components/FrameComponent.vue";
    
import Header from "@/components/AppHeader.vue";
  
    export default defineComponent({
      name: "PasswordResetPage",
      components: { FrameComponent, Header },
    });
  </script>
  