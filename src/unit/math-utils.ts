export class MathUtils {
  /**
   * Generate a pseudo-random integer in a given interval
   * @param {number} min
   * @param {number} max
   * @returns {number}
   */
  static getRandomArbitrary(min: number = 0, max: number = 999999): number {
    return Math.floor(Math.random() * (max - min) + min);
  }
}
