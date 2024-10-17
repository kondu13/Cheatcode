// lib/utils.ts

/**
 * Combines multiple class names into one string, filtering out any falsy values.
 * Useful when conditionally applying Tailwind or other CSS classes.
 * 
 * @param classes - An array of class name strings, potentially containing falsy values.
 * @returns A single string with all valid class names joined by a space.
 */
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
