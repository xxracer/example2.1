from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # 1. Navigate to the home page and verify initial state
        page.goto("http://localhost:3000")
        navbar = page.locator(".main-navbar")
        navbar.wait_for(state="visible", timeout=10000)
        expect(navbar).to_be_visible()

        # Verify Bebas Neue font on the hero title
        hero_title = page.locator(".hero-main-title")
        expect(hero_title).to_have_css("font-family", '"Bebas Neue", cursive')

        # Take screenshot of the initial homepage
        page.screenshot(path="jules-scratch/verification_final_site/01_homepage_initial.png")

        # 2. Test the "Programs" dropdown and navigate to Kids Program page
        programs_dropdown = page.locator("li.dropdown:has-text('Programs')")
        programs_dropdown.hover()

        kids_program_link = programs_dropdown.locator(".dropdown-menu").get_by_role("link", name="Kids Program")
        expect(kids_program_link).to_be_visible()
        kids_program_link.click()

        # 3. Verify the redesigned Kids Program page
        expect(page).to_have_url("http://localhost:3000/kids-program", timeout=10000)
        expect(page.locator(".kids-hero-title")).to_be_visible()

        # Take screenshot of the Kids Program page
        page.screenshot(path="jules-scratch/verification_final_site/02_kids_program_page.png")

        # 4. Verify the color inversion on scroll
        page.evaluate("window.scrollBy(0, 200)")

        scrolled_app = page.locator(".App.scrolled")
        expect(scrolled_app).to_be_visible()

        # Verify that the navbar background has changed
        scrolled_navbar = page.locator(".scrolled .main-navbar")
        expect(scrolled_navbar).to_have_css("background-color", "rgb(13, 13, 13)")

        # Verify that the text color on the Kids Program page has inverted
        scrolled_hero_title = page.locator(".scrolled .kids-hero-title")
        expect(scrolled_hero_title).to_have_css("color", "rgb(255, 255, 255)")

        # Take a screenshot of the scrolled Kids Program page
        page.screenshot(path="jules-scratch/verification_final_site/03_kids_program_scrolled.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)