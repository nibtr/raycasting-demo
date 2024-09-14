export const MAGNITUDE = 15;

export function degToRad(deg) {
  return deg * (Math.PI / 180);
}

export function distance(pt1, pt2) {
  return Math.sqrt(Math.pow(pt1.x - pt2.x, 2), Math.pow(pt1.y - pt2.y, 2));
}
