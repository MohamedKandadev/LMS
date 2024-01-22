'use client';
import * as React from 'react';
import { ThemeProvider as NextThemProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemProvider { ...props }>{ children }</NextThemProvider>
)