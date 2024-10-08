import { LIGHT_BLUE } from "./const.js";

/**
 *  Draw a line between 2 points
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @param {string | null} color
 */
export function drawLine(ctx, x1, y1, x2, y2, color = LIGHT_BLUE) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.closePath();
}

/**
 *  Convert degree to radian
 * @param {number} deg
 * @returns {number}
 */
export function degToRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Calculate the Euclidean distance between 2 points
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @returns {number}
 */
export function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

/**
 *  Invert a number
 * @param {number} val
 * @returns {number}
 */
export function invert(val) {
  if (val === 0) return 0;
  return 1 / val;
}

/**
 *  Calculate the opacity of a column based on the given distance
 * @param {number} dis
 * @returns {number}
 */
export function calculateOpacity(dis) {
  const minDis = 0;
  const maxDis = 350; // max distance for full transparency

  const distance = Math.max(minDis, Math.min(maxDis, dis));

  // higher distance should lead to higher transparency
  const opacity = (distance - minDis) / (maxDis - minDis);

  // ensure opacity is within the 0 to 1 range
  return Math.max(0, Math.min(1, opacity));
}
