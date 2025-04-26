export const isBrowser = typeof window !== "undefined"

export function getWindowDimensions() {
  if (!isBrowser) {
    return {
      width: 1200,
      height: 800,
    }
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}
