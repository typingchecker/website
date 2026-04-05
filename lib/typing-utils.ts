export function calculateWPM(correctChars: number, timeInSeconds: number): number {
  if (timeInSeconds === 0) return 0
  const minutes = timeInSeconds / 60
  const words = correctChars / 5
  return Math.round(words / minutes)
}

export function calculateAccuracy(correctChars: number, totalChars: number): number {
  if (totalChars === 0) return 0
  return Math.round((correctChars / totalChars) * 100)
}

export const keyboardLayout = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
]
