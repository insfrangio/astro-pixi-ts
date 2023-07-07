export function getSecondsAngle(seconds: number) {
  const secondAngle = (Math.PI / 30) * seconds;
  return secondAngle;
}
