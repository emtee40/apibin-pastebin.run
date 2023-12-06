// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
// SPDX-FileCopyrightText: 2023 The Preact Authors
//
// SPDX-License-Identifier: AGPL-3.0-or-later
// SPDX-License-Identifier: MIT

import { CustomHistory, Route, Router } from "preact-router";
import { createHashHistory } from "history";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/_404";
import classes from "./style.module.css";
import { About } from "./pages/About";
import { Paste } from "./pages/Paste";

export default function App() {
  return (
    <div class={classes.app}>
      <Header />
      <main>
        <Router history={createHashHistory() as unknown as CustomHistory}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/:id" component={Paste} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </div>
  );
}
