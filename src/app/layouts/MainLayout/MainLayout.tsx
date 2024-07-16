/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

import { Layout } from "@/components/commons/LayoutClient";
import Intro from "@/components/Intro/Intro";
import Description from "@/components/description/description";
import Section from "@/components/Section/Section";

export default function MainLayout() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <Layout full>
      <Intro />
      <Description />
      <Section />
    </Layout>
  );
}
