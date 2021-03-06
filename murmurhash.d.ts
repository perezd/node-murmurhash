export = murmurhash;

/**
 * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
 *
 * @param key - ASCII only
 * @param seed - (optional) positive integer
 * @returns 32-bit positive integer hash
 */
declare function murmurhash(
  key: string | Uint8Array,
  seed?: number
): number;

declare namespace murmurhash {
  /**
   * JS Implementation of MurmurHash3 (r136) (as of May 20, 2011)
   *
   * @param key - ASCII only
   * @param seed - (optional) positive integer
   * @returns 32-bit positive integer hash
   */
  function v3(key: string | Uint8Array, seed?: number): number;

  /**
   * JS Implementation of MurmurHash2
   *
   * @param str - ASCII only
   * @param seed - (optional) positive integer
   * @returns 32-bit positive integer hash
   */
  function v2(str: string | Uint8Array, seed?: number): number;
}
