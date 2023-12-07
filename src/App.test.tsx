// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { describe, expect, it } from "vitest";
import { screen, render } from "@testing-library/preact";
import App from "./App";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { server } from "./test/server";
import { HttpResponse, http } from "msw";

describe("App", () => {
  it("supports navigation", async () => {
    render(<App />);
    screen.getByText("About").click();
    expect(await screen.findByText("Dogfooding")).toBeInTheDocument();
  });

  it("supports submitting pastes", async () => {
    server.use(
      http.post("https://pastebin.run/api/v1/pastes", async ({ request }) => {
        const formData = await request.formData();
        expect(formData.get("code")).toBe("My paste");
        expect(formData.get("language")).toBe("php");
        expect(formData.get("expiration")).toBe("P7D");
        return HttpResponse.text("received");
      }),
      http.get("https://pastebin.run/received.txt", () =>
        HttpResponse.text("My paste"),
      ),
    );
    const user = userEvent.setup();
    render(<App />);
    screen.getByText("Home").click();
    const language = await screen.findByLabelText("Language:");
    const php = await screen.findByRole("option", { name: "PHP" });
    await user.selectOptions(language, php);
    const expires = screen.getByLabelText("Expires:");
    await user.selectOptions(expires, "1 week");
    await user.type(screen.getByRole("textbox"), "My paste");
    await user.click(screen.getByRole("button", { name: "Share" }));
    const shareLink = await screen.findByLabelText("Share link:");
    expect(shareLink).toHaveValue("https://pastebin.run/received");
    expect(await screen.findByText("My paste")).toBeInTheDocument();
  });
});
