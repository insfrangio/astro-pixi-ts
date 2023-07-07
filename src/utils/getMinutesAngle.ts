export function getMinutesAngle(minutes: number) {
  const minuteAngle = (Math.PI / 30) * minutes;
  return minuteAngle;
}
