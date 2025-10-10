from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000/update-instructors")
    page.get_by_role("button", name="Edit").first.click()
    # The quill editor is a div with class ql-editor
    page.locator(".ql-editor").fill("<h1>This is a heading</h1><p>This is a paragraph with <strong>bold</strong> text and <em>italic</em> text.</p><ul><li>Bullet 1</li><li>Bullet 2</li></ul>")
    page.get_by_role("button", name="Update Instructor").click()
    page.goto("http://localhost:3000/instructors")
    page.screenshot(path="jules-scratch/verification/verification.png")
    browser.close()

with sync_playwright() as playwright:
    run(playwright)
