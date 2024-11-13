<template>
    <div
      class="w-full h-[1024px] relative bg-teal-200 overflow-hidden flex flex-col items-start justify-start py-0 pl-[579px] pr-0 box-border leading-[normal] tracking-[normal] text-center text-21xl text-white font-syne mq450:pl-5 mq450:box-border mq975:h-auto mq975:pl-[289px] mq975:box-border"
    >
      <section
        class="w-[902px] rounded-tl-21xl rounded-tr-sm rounded-br-sm rounded-bl-21xl bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-[41px] pb-4 box-border relative gap-[41px] max-w-[105%] text-left text-5xl text-black font-syne mq450:gap-5"
      >
        <img
          class="w-[535px] h-[506px] absolute !m-[0] bottom-[-158px] left-[-149px]"
          alt=""
          src="/ellipse-2.svg"
        />
        <div
          class="self-stretch h-[898px] relative max-w-full mq975:h-auto mq975:min-h-[898]"
        >
          <div class="absolute top-[0px] left-[442px] w-[369px] h-[244px]">
            <div
              class="absolute top-[-301px] left-[0px] rounded-[50%] bg-darkturquoise-100 border-darkturquoise-200 border-[0px] border-solid box-border w-[537px] h-[547px]"
            />
            <a
              class="[text-decoration:none] absolute top-[24px] left-[163px] font-semibold text-[inherit] flex items-center w-[373px] h-[45px] z-[1] mq450:text-lgi"
              >English(UK)</a
            >
          </div>
          <CreateAccountButton />
        </div>
        <div
          class="w-[487px] flex flex-row items-start justify-center max-w-full text-writing"
        >
          <div class="h-[69px] w-[249px] relative">
            <div
              class="absolute top-[0px] left-[0px] w-[241px] h-[66px] flex flex-row items-start justify-start"
            >
              <div
                class="h-11 absolute !m-[0] top-[-40px] right-[-60px] font-semibold flex items-center whitespace-nowrap mq450:text-lgi"
              >
                Already have an account?
              </div>
              <b
                class="flex-1 relative text-gray text-center z-[1] mq450:text-lgi"
                >Login</b
              >
            </div>
            <div
              class="absolute h-[calc(100%_-_15px)] top-[8px] bottom-[7px] left-[48px] shadow-[0px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-teal-100 w-[201px] z-[2]"
            />
            <h2
              class="m-0 absolute h-full top-[0px] left-[46px] text-17xl font-semibold font-[inherit] text-gray text-center flex items-center justify-center w-[199px] cursor-pointer z-[3] mq450:text-3xl mq975:text-10xl"
              @click="onLoginTextClick"
            >
              Login
            </h2>
          </div>
        </div>
      </section>
      <div
        class="w-[608px] !m-[0] absolute top-[356px] left-[95px] flex flex-row items-start justify-start max-w-full"
      >
        <img
          class="h-[704px] flex-1 relative max-w-full overflow-hidden object-cover z-[5]"
          alt=""
          src="/add-a-heading-3-1@2x.png"
        />
        <div
          class="w-[647px] !m-[0] absolute top-[-245px] left-[-95px] flex flex-col items-end justify-start py-0 px-0 box-border"
        >
          <h1
            class="m-0 w-[673px] h-[275px] relative text-inherit font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-[105%] z-[4] mq450:text-5xl mq975:text-13xl"
          >
            A Teacher’s Assistant for Engaging and Interactive Learning
          </h1>
          <h1
            class="m-0 w-[673px] h-[275px] relative text-inherit font-semibold font-[inherit] flex items-center justify-center shrink-0 max-w-[105%] z-[6] mt-[-275px] mq450:text-5xl mq975:text-13xl"
          >
            A Teacher’s Assistant for Engaging and Interactive Learning
          </h1>
        </div>
      </div>
      <div class="w-[399px] h-[318px] absolute !m-[0] top-[0px] left-[0px]">
        <div
          class="absolute top-[-227px] left-[-136px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-darkturquoise-300 border-darkturquoise-200 border-[0px] border-solid box-border w-[537px] h-[547px] z-[5]"
        />
        <div
          class="absolute top-[0px] left-[0px] w-full h-full flex flex-col items-start justify-start py-[35px] px-9 box-border"
        >
          <img
            class="w-[95px] h-[69px] relative overflow-hidden shrink-0"
            alt=""
            src="/book-open.svg"
          />
          <img
            class="w-[95px] h-[69px] absolute !m-[0] top-[35px] left-[36px] overflow-hidden shrink-0 z-[6]"
            loading="lazy"
            alt=""
            src="/book-open-1.svg"
          />
          <div
            class="w-[537px] h-[547px] absolute !m-[0] top-[-227px] left-[-136px] rounded-[50%] bg-darkturquoise-300 border-darkturquoise-200 border-[0px] border-solid box-border z-[7]"
          />
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
  