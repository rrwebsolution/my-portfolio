import { chromium } from "playwright-core"
import path from "node:path"

const executablePath = "C:/Users/DICT10-pc-2/AppData/Local/ms-playwright/chromium-1228/chrome-win64/chrome.exe"

const browser = await chromium.launch({ executablePath })
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } })
const errors = []
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text())
})
page.on("pageerror", (err) => errors.push(String(err)))

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" })
await page.waitForSelector("text=Ryan Jay T. Reyes")

const before = await page.evaluate(() => {
  const heading = [...document.querySelectorAll("h3")].find((el) => el.textContent === "Beyond the Code")
  const wrapper = heading.parentElement
  const cs = getComputedStyle(wrapper)
  return { translate: cs.translate, opacity: cs.opacity }
})
console.log("Gallery block BEFORE scroll:", JSON.stringify(before))

const hobbiesBefore = await page.evaluate(() => {
  const heading = [...document.querySelectorAll("h3")].find((el) => el.textContent === "Hobbies & Interests")
  const wrapper = heading.parentElement.parentElement
  const cs = getComputedStyle(wrapper)
  return { translate: cs.translate, opacity: cs.opacity }
})
console.log("Hobbies block BEFORE scroll:", JSON.stringify(hobbiesBefore))

await page.locator("text=Beyond the Code").scrollIntoViewIfNeeded()
await page.waitForTimeout(900)

const after = await page.evaluate(() => {
  const heading = [...document.querySelectorAll("h3")].find((el) => el.textContent === "Beyond the Code")
  const wrapper = heading.parentElement
  const cs = getComputedStyle(wrapper)
  return { translate: cs.translate, opacity: cs.opacity }
})
console.log("Gallery block AFTER scroll+wait:", JSON.stringify(after))

const hobbiesAfter = await page.evaluate(() => {
  const heading = [...document.querySelectorAll("h3")].find((el) => el.textContent === "Hobbies & Interests")
  const wrapper = heading.parentElement.parentElement
  const cs = getComputedStyle(wrapper)
  return { translate: cs.translate, opacity: cs.opacity }
})
console.log("Hobbies block AFTER scroll+wait:", JSON.stringify(hobbiesAfter))

await page.screenshot({ path: path.resolve("gallery-anim-check.png") })

console.log("CONSOLE_ERRORS:", JSON.stringify(errors))
await browser.close()
