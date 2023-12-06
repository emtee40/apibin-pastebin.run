// SPDX-FileCopyrightText: 2023 The Preact Authors
//
// SPDX-License-Identifier: MIT

import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/apibin/",
  plugins: [preact()],
});
