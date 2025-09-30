from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    try:
        page.goto("http://localhost:3000", timeout=30000)
        page.wait_for_timeout(5000) # Wait 5 seconds for app to load/crash
        page.screenshot(path="jules-scratch/verification_final_site/debug_screenshot_v2.png")
    except Exception as e:
        print(f"An error occurred during Playwright execution: {e}")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)