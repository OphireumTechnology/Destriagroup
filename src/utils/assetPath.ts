/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Resolves a public asset path taking into account Vite's base URL
 * (e.g., /Destriagroup/ on GitHub Pages or / locally).
 */
export function assetUrl(path: string): string {
  const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : '/Destriagroup/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}
