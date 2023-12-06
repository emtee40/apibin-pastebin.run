// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import classes from "./style.module.css";
import baseUrl from "../../base-url";
import { useEffect, useState } from "preact/hooks";

export function Paste({ id }: { id: string }) {
  const [code, setCode] = useState<string | null>(null);
  const copyLink = (e: Event) => {
    e.preventDefault();
    navigator.clipboard.writeText(getLink());
  };
  const getLink = () => {
    return `https://pastebin.run/${id}`;
  };
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      let text;
      try {
        const response = await fetch(`${baseUrl}${id}.txt`, {
          signal: controller.signal,
        });
        text = await response.text();
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") {
          return;
        }
        throw e;
      }
      setCode(text);
    })();

    return () => controller.abort();
  }, [id, setCode]);
  return (
    <div>
      <div>
        <label>
          Share link: <input readonly value={getLink()} />
        </label>{" "}
        <button onClick={copyLink}>Copy link</button>
      </div>
      {code === null ? (
        "Loading…"
      ) : (
        <pre class={classes.pre}>
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
