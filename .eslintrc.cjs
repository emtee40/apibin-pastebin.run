// SPDX-FileCopyrightText: 2023 Kamila Borowska <kamila@borowska.pw>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'preact'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true,
    settings: { jest: { version: 29 } },
};
