// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import './style.css';
import { Link } from 'preact-router/match';

export function Header() {
	return (
		<header class="header">
			<h1><a href="/">apibin</a></h1>
			<nav>
				<Link activeClassName="active" href="/">Home</Link>
				<Link activeClassName="active" href="/about">About</Link>
				<a href="https://github.com/pastebinrun/apibin">Source code</a>
			</nav>
		</header>
	);
}