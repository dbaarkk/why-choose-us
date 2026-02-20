import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        # The server should be running on 3006 based on previous logs
        try:
            await page.goto("http://localhost:3006", timeout=60000)
            await asyncio.sleep(2) # Wait for animations
            await page.screenshot(path="final_verification.png", full_page=True)
            print("Screenshot saved to final_verification.png")
        except Exception as e:
            print(f"Error: {e}")
        await browser.close()

asyncio.run(run())
