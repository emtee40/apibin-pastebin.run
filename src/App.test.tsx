// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/preact";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("supports navigation", async () => {
    render(<App />);
    screen.getByText("About").click();
    expect(await screen.findByText("Dogfooding")).toBeInTheDocument();
  });
});
