import { Outlet } from "react-router";
import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToHash from "@/components/layout/ScrollToHash";

export default function RootLayout() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand-pink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <ScrollToHash />
        <div className="relative flex min-h-dvh flex-col overflow-x-clip">
          <BackgroundGlow />
          <Navbar />
          <main id="main" className="flex-1">
            <Outlet />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </LazyMotion>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[48rem]">
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-pink/15 blur-3xl dark:bg-brand-pink/20" />
      <div className="absolute top-40 -right-40 h-[24rem] w-[32rem] rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute top-60 -left-40 h-[24rem] w-[28rem] rounded-full bg-brand-teal/10 blur-3xl" />
    </div>
  );
}
