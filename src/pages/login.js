import React from "react";

function LoginForm(props) {
  return (
    <div className="bg-orange-50 flex flex-col pl-14 pr-14 max-md:px-5">
      <img
        loading="lazy"
        srcSet= '.\assets\logo.png' className="aspect-[0.30] object-contain object-center w-[91px] overflow-hidden self-stretch shrink-0 max-w-full"
      />
      <h2 className="text-rose-800 text-2xl font-bold leading-7 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
        Welcome Back!
      </h2>
      <div className="flex w-[72px] max-w-full items-stretch gap-1.5 ml-2.5 mt-7 self-start">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d46c468f-83ec-4405-8838-acb10c8d580c?apiKey=60dd791ba11a4fdf9e473212b883e17d&"className="aspect-square object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
        />
        <label className="text-neutral-500 text-xs leading-3 tracking-wider self-center grow whitespace-nowrap my-auto">
          Username
          <input type="text" />
        </label>
      </div>
      <div className="bg-neutral-500 self-stretch shrink-0 h-px mt-2" />
      <div className="flex w-[67px] max-w-full items-stretch gap-1 ml-2.5 mt-5 self-start">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2e86871a-8df0-420c-b291-f5fbe3a7fdff?apiKey=60dd791ba11a4fdf9e473212b883e17d&"className="aspect-[0.88] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full"
        />
        <label className="text-neutral-500 text-xs leading-3 tracking-wider self-center grow whitespace-nowrap my-auto">
          Password
          <input type="password" />
        </label>
      </div>
      <div className="bg-neutral-500 self-stretch shrink-0 h-px" />
      <div className="self-center flex w-full max-w-[298px] items-stretch justify-between gap-5 mt-3.5">
        <div className="flex items-stretch justify-between gap-2">
          <div className="rounded border bg-orange-50 flex w-[13px] shrink-0 h-[13px] flex-col border-solid border-zinc-900" />
          <div className="text-zinc-900 text-center text-xs font-bold leading-3 tracking-wide self-center grow whitespace-nowrap my-auto">
            Remember me
          </div>
        </div>
        <a
          href="/forgot-password"
          className="text-zinc-900 text-center text-xs font-bold leading-3 tracking-wide grow whitespace-nowrap self-start"
        >
          Forgot password?
        </a>
      </div>
      <button className="text-orange-50 text-center text-base font-bold leading-4 whitespace-nowrap bg-rose-800 self-stretch items-center mt-11 px-5 py-4 rounded-md max-md:mt-10">
        Login
      </button>
      <div className="border border-[color:var(--Red,#A50832)] bg-orange-50 self-stretch flex pt-0 pb-0 items-center justify-between gap-0 mt-2.5 pl-20 pr-20 rounded-md border-solid max-md:px-5">
        <div className="text-zinc-900 text-center text-base font-bold leading-4 my-auto max-md:-mr-px">
          Login with
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/39238790-f0b9-4137-9c30-93c034e75f2f?apiKey=60dd791ba11a4fdf9e473212b883e17d&"className="aspect-[1.75] object-contain object-center w-[91px] overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
      <div className="text-red-500 text-center text-xs font-medium leading-4 tracking-wider underline self-center whitespace-nowrap mt-3">
        <span className="text-neutral-500">Don’t have an account? </span>
        <a href="/signup" className="text-red-500">
          Sign up!
        </a>
      </div>
      <div className="bg-black self-center flex w-[134px] shrink-0 h-[5px] flex-col mt-60 mb-2 rounded-xl max-md:mt-10" />
    </div>
  );
}

export default function Login(
) {
    return LoginForm()
  }