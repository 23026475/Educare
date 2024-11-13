<template>
    <div
      class="self-stretch h-[673px] relative max-w-full text-left text-5xl text-writing font-syne"
    >
      <div
        class="absolute top-[0px] left-[0px] w-full flex flex-row items-end justify-between max-w-full gap-5"
      >
        <div
          class="flex flex-col items-start justify-start gap-10 min-w-[333px] min-h-[185px] max-w-full mq975:gap-5"
        >
          <div
            class="self-stretch flex flex-row items-start justify-start relative max-w-full"
          >
            <div
              class="w-[551px] absolute !m-[0] right-[-218px] bottom-[-40px] font-semibold flex items-center z-[2] mq975:text-lgi"
            >
              Enter your email and password and role
            </div>
            <h2
              class="m-0 h-[78px] flex-1 relative text-17xl font-bold font-[inherit] flex items-center max-w-full z-[2] mq975:text-3xl mq1000:text-10xl"
            >
              Welcome back!
            </h2>
          </div>
          <div
            class="w-[257px] relative text-xl font-semibold flex items-center mq975:text-base"
          >
            Email address
          </div>
        </div>
        <div
          class="flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border min-w-[377px] max-w-full text-center text-17xl text-gray mq450:min-w-full"
        >
          <div class="self-stretch h-[244px] relative">
            <div
              class="absolute top-[-301px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-[50%] bg-darkturquoise-100 w-[535px] h-[545px]"
            />
            <div class="absolute top-[35px] left-[141px] w-[203px] h-[69px]">
              <div
                class="absolute top-[8px] left-[2px] shadow-[0px_10px_4px_rgba(0,_0,_0,_0.25)] rounded-3xs bg-teal-100 w-[201px] h-[54px] z-[1]"
              />
              <a
                class="[text-decoration:none] absolute top-[0px] left-[0px] font-semibold text-[inherit] flex items-center justify-center w-full h-full whitespace-nowrap cursor-pointer z-[2] mq975:text-3xl mq1000:text-10xl"
                @click="onSignUpTextClick"
                >Sign Up</a
              >
            </div>
            <div
              class="absolute top-[0px] left-[78px] text-xl font-semibold text-writing flex items-center justify-center w-[324px] h-[43px] z-[3] mq975:text-base"
            >
              Don’t have an account?
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute top-[252px] left-[0px] rounded-xl bg-gray border-black border-[1px] border-solid box-border w-[665px] h-[74px] flex flex-row items-start justify-end py-[11px] px-[34px] max-w-full"
      >
        <div
          class="h-[74px] w-[665px] relative rounded-xl bg-gray border-black border-[1px] border-solid box-border hidden max-w-full"
        />
        <img class="h-12 w-12 relative z-[1]" alt="" src="/icbaselineemail.svg" />
      </div>
      <div
        class="absolute top-[322px] left-[0px] w-[708px] h-[351px] max-w-full text-xl"
      >
        <div
          class="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start gap-[0.5px] min-h-[212px] max-w-full"
        >
          <div
            class="w-[257px] relative font-semibold flex items-center mq975:text-base"
          >
            Password
          </div>
          <div
            class="w-[665px] rounded-xl bg-gray border-black border-[0px] border-solid box-border flex flex-row items-start justify-end pt-3 px-[27px] pb-[19.6px] max-w-full"
          >
            <img
              class="h-[74px] w-[665px] relative rounded-xl hidden max-w-full"
              alt=""
              src="/rectangle-23.svg"
            />
            <img
              class="h-[42.4px] w-[43.3px] relative z-[1]"
              alt=""
              src="/show-password.svg"
            />
          </div>
          <div
            class="self-stretch flex flex-col items-start justify-start min-h-[70px] max-w-full"
          >
            <div
              class="self-stretch flex flex-row items-start justify-end max-w-full"
            >
              <div
                class="w-[339px] relative font-semibold flex items-center shrink-0 max-w-full cursor-pointer z-[1] mq975:text-base"
                @click="onForgotPasswordClickClick"
              >
                <span class="w-full">
                  <span>forgot password?</span>
                  <span class="text-black"> </span>
                  <span class="text-darkslateblue">Click here</span>
                </span>
              </div>
            </div>
            <div
              class="w-[167px] relative font-semibold flex items-center mt-[-21px] mq975:text-base"
            >
              Role
            </div>
          </div>
        </div>
        <div
          class="absolute top-[211px] left-[0px] rounded-xl bg-gray border-black border-[1px] border-solid box-border w-[665px] h-[74px] flex flex-row items-start justify-end py-[21px] px-[45px] max-w-full z-[1]"
        >
          <div
            class="h-[74px] w-[665px] relative rounded-xl bg-gray border-black border-[1px] border-solid box-border hidden max-w-full"
          />
          <img
            class="h-[28.3px] w-[26px] relative z-[2]"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <div
          class="absolute top-[313px] left-[14px] w-[294px] flex flex-row items-start justify-start gap-3.5"
        >
          <input
            class="[border:none] [outline:none] bg-writing h-[34px] w-[63px] relative"
            type="text"
          />
          <div
            class="h-[38px] flex-1 relative font-semibold flex items-center mq975:text-base"
          >
            Remember me
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    import { defineComponent } from "vue";
  
    export default defineComponent({
      name: "Container",
      methods: {
        onSignUpTextClick() {
          this.$router.push("/");
        },
        onForgotPasswordClickClick() {
          this.$router.push("/password-reset-page");
        },
      },
    });
  </script>
  