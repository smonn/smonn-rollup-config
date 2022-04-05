import { RollupOptions } from 'rollup';

/**
 * Create a rollup configuration for main and module bundles, and a typings bundle.
 * @param  mainFile The main bundle destination.
 * @param  moduleFile The module bundle destination.
 * @param  typingsFile The typings destination.
 * @returns Rollup configuration
 */
export function createConfig(
  mainFile: string,
  moduleFile: string,
  typingsFile: string
): RollupOptions[];
