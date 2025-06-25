// @ts-check
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  /* Configure projects */
  projects: [
    {
      name: 'reqres',
      testMatch: 'tests/api-tests/**/*.spec.js',
      use: {
        baseURL: process.env.API_URL ?? '',

        extraHTTPHeaders: {
          'x-api-key': process.env.API_KEY ?? '',
        },

        trace: 'on-first-retry',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'letcode',
      testMatch: 'tests/ui-tests/**/*.spec.js',
      use: {
        baseURL: process.env.UI_URL ?? '',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
