// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { describe, expect, it } from "vitest";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/preact";
import { Paste } from ".";
import "@testing-library/jest-dom";

describe("Paste", () => {
  it("loads pastes", async () => {
    render(<Paste id="hello" />);
    expect(await screen.findByText("Hello, world!")).toBeInTheDocument();
  });
  it("shows loading message", async () => {
    render(<Paste id="hello" />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading…"));
  });
  it("shows share link", () => {
    render(<Paste id="hello" />);
    expect(screen.getByLabelText("Share link:")).toHaveValue(
      "https://pastebin.run/hello",
    );
  });
});
