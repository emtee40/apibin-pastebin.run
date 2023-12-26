// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import classes from "./style.module.css";

export function About() {
  return (
    <div class={classes.about}>
      <p>
        This is a demonstration of the{" "}
        <a href="https://pastebin.run">pastebin.run</a>'s API. Every API used by
        apibin is public and can be used by both JavaScript applications running
        in a web browser and applications running outside of web browser (such
        as Discord bots).
      </p>
      <p>
        If you are looking for a pastebin, please visit our main website,{" "}
        <a href="https://pastebin.run/">pastebin.run</a>. While this demo can be
        used as a pastebin, it requires JavaScript (unlike the main pastebin),
        and it's much more prone to breaking. This is not because APIs change
        &mdash; they're designed to be stable, but because we can change the
        routes at any time &mdash; this is not a production application.
      </p>
      <p>
        Why does this exist?{" "}
        <a href="https://en.wikipedia.org/wiki/Eating_your_own_dog_food">
          Dogfooding
        </a>
        , basically.
      </p>
    </div>
  );
}
