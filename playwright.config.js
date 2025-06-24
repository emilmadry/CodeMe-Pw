// @ts-check
import { defineConfig, devices } from '@playwright/test';

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
        baseURL: 'https://reqres.in/',
        extraHTTPHeaders: {
          'x-api-key': 'reqres-free-v1'
        },
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
      },
    },
    {
      name: 'letcode',
      testMatch: 'tests/ui-tests/**/*.spec.js',
      use: {
        baseURL: 'https://letcode.in/',
        trace: 'on-first-retry',
        ...devices['Desktop Chrome']
      },
    },
  ],
});
