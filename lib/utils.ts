import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount?: number | string): string {
  if (amount === undefined || amount === null || amount === '') {
    return 'Fees confirmed following assessment';
  }
  if (typeof amount === 'number') {
    return `£${amount.toFixed(2)}`;
  }
  return amount.startsWith('£') ? amount : `£${amount}`;
}
