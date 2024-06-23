import { FLOMO_LOGIN_PAGE_URL, FLOMO_MINE_PAGE_URL } from '@/config/common'
import playwright from 'playwright'

export async function POST(request: Request) {
  try {
    // 从请求体中解析 JSON 数据
    const { username, password } = await request.json()
    console.log('username: ', username)
    console.log('password: ', password)

    // Setup
    const browser = await playwright.chromium.launch()
    const context = await browser.newContext(
      playwright.devices['Desktop Chrome']
    )
    const page = await context.newPage()

    await page.goto(FLOMO_LOGIN_PAGE_URL)

    await page.getByPlaceholder('手机号 / 邮箱').fill(username)
    await page.getByPlaceholder('密码').fill(password)
    await page.getByRole('button', { name: '登录' }).click()

    await page.waitForURL(FLOMO_MINE_PAGE_URL)
    // 获取 localStorage 的数据
    const localStorageData = await page.evaluate(() => {
      const storage = {}
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        // @ts-ignore
        storage[key] = localStorage.getItem(key)
      }
      return storage
    })

    // localstorage 中的用户信息
    // @ts-ignore
    const userInfo = JSON.parse(localStorageData['me'])

    // 返回成功响应
    return new Response(JSON.stringify({ data: userInfo }), { status: 200 })
  } catch (error) {
    // 异常处理
    // @ts-ignore
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    })
  }
}
