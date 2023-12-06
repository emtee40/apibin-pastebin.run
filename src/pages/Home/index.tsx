// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import "./style.css";
import baseUrl from "../../base-url";
import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";

type Language = {
  identifier: string;
  name: string;
};

export function Home() {
  const [code, setCode] = useState("");
  const [expiration, setExpiration] = useState("PT1H");
  const [languages, setLanguages] = useState<Language[]>([]);
  const [language, setLanguage] = useState("plaintext");
  const onLanguageChange = (e) => setLanguage(e.target.value);
  const onExpirationChange = (e) => setExpiration(e.target.value);
  const onTextareaChange = (e) => setCode(e.target.value);
  const onSubmit = async (e) => {
    e.preventDefault();
    const request = await fetch(`${baseUrl}api/v1/pastes`, {
      body: new URLSearchParams({ code, expiration, language }),
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    route(`/${await request.text()}`);
  };
  useEffect(() => {
    (async () =>
      setLanguages(await (await fetch(`${baseUrl}api/v1/languages`)).json()))();
  }, []);
  return (
    <form onSubmit={onSubmit}>
      <label>
        Language:{" "}
        <select value={language} onInput={onLanguageChange}>
          {languages.map(({ identifier, name }) => (
            <option key={identifier} value={identifier}>
              {name}
            </option>
          ))}
        </select>
      </label>{" "}
      <label>
        Expires:{" "}
        <select value={expiration} onInput={onExpirationChange}>
          <option value="PT1H">1 hour</option>
          <option value="P1D">1 day</option>
          <option value="P7D">1 week</option>
          <option>Never</option>
        </select>
      </label>
      <button class="submit" type="submit">
        Share
      </button>
      <textarea class="full" required onInput={onTextareaChange}>
        {code}
      </textarea>
    </form>
  );
}
