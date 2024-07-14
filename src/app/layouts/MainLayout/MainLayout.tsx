"use client";
import React from "react";

import { Layout } from "@/components/commons/LayoutClient";
import FrontPage from "@/pages/Main";

export default function MainLayout() {
  return (
    <Layout full>
      <FrontPage />
    </Layout>
  );
}
