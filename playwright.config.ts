import { defineConfig, devices } from '@playwright/test'
import 'dotenv/config'

const hostUrl = process.env.URL || 'http://localhost/'

export default defineConfig({
    testDir: './e2e',
    outputDir: process.env.LOCAL ? './test-results' : './artifacts',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: process.env.CI ? 'list' : 'html',
    timeout: 30000,
    use: {
        baseURL: process.env.LOCAL ? hostUrl : 'http://localhost',
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
})
