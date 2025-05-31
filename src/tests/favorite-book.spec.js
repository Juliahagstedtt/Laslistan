import { test, expect }  from '@playwright/test'
import { beforeEach } from 'node:test'

test.describe('Läslistan', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://tap-ht24-testverktyg.github.io/exam-template/')
    })
})