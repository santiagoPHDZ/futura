import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAspectRatioString(width: number, height: number): string {
  if (width <= 0 || height <= 0) {
    throw new Error("Width and height must be positive values.");
  }

  // Calculate the greatest common divisor (GCD)
  const gcd: (a: number, b: number) => number = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const divisor = gcd(width, height);

  const aspectWidth = width / divisor;
  const aspectHeight = height / divisor;

  console.log(aspectHeight, aspectWidth)

  return `${aspectWidth}/${aspectHeight}`;
}

export function calculateAspectRatio(width: number, height: number): number {
  if (width <= 0 || height <= 0) {
    throw new Error("Width and height must be positive values.");
  }

  // Calculate the greatest common divisor (GCD)
  const gcd: (a: number, b: number) => number = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const divisor = gcd(width, height);

  const aspectWidth = width / divisor;
  const aspectHeight = height / divisor;

  console.log(aspectHeight, aspectWidth)

  return aspectWidth / aspectHeight
}