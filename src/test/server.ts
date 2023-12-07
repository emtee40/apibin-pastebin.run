// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { setupServer } from "msw/node";
import { HttpResponse, http } from "msw";

export const server = setupServer(
  http.get("https://pastebin.run/api/v1/languages", () =>
    HttpResponse.json([
      { identifier: "plaintext", name: "Plain text" },
      { identifier: "php", name: "PHP" },
    ]),
  ),
  http.get("https://pastebin.run/hello.txt", () =>
    HttpResponse.text("Hello, world!"),
  ),
);
