// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

import { useLocation } from 'preact-iso';
import './style.css';

export function Header() {
	const { url } = useLocation();

	return (
		<header class="header">
			<h1><a href="/">apibin</a></h1>
			<nav>
				<a class={url === '/' && 'active'} href="/">Home</a>
				<a class={url === '/about' && 'active'} href="/about">About</a>
				<a href="https://github.com/pastebinrun/apibin">Source code</a>
			</nav>
		</header>
	);
}
