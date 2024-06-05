import { test, expect } from '@playwright/test'

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('domcontentloaded')
    await expect(page).toHaveTitle('Assets Library', {
        timeout: 10000,
    })
})
