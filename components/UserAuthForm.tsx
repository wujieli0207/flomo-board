'use client'

import { cn } from '@/lib/utils'
import { IUserInfo } from '@/types/user'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Loading from '@/components/ui/Icon/Loading'
import { Input } from '@/components/ui/input'
import { FLOMO_USER_INFO_KEY } from '@/config/common'
import { localforageInstance } from '@/lib/storage'
import { useRouter } from 'next/navigation'

interface IUserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const BOARD_ROUTE = '/board'

export function UserAuthForm({ className, ...props }: IUserAuthFormProps) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  useEffect(() => {
    // 检查 localforage 中的用户信息
    const checkUserInfo = async () => {
      try {
        const userInfo = await localforageInstance.get<IUserInfo>(
          FLOMO_USER_INFO_KEY
        )
        if (userInfo) {
          // 如果用户信息存在，跳转到 白板页面
          router.push(BOARD_ROUTE)
        }
      } catch (error) {
        console.error('Error checking user info:', error)
      }
    }

    checkUserInfo()
  }, [router])

  async function handleAuth() {
    setIsLoading(true)
    try {
      const response = await fetch('/api/flomo-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const result = await response.json()

      if (response.ok) {
        const useInfo = result.data as IUserInfo
        await localforageInstance.set<IUserInfo>(FLOMO_USER_INFO_KEY, useInfo)
        router.push(BOARD_ROUTE)
      } else {
        console.error('Failed to auth. Please try again later.')
      }
    } catch (error) {
      console.error('An error occurred. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <div className="xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <Input
              value={form.username}
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="手机号 / 邮箱"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            <Input
              value={form.password}
              type="password"
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
              placeholder="密码"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <Button
              disabled={isLoading}
              className="w-full"
              onClick={handleAuth}
            >
              {isLoading && <Loading />}
              <span className=" ml-2">Login</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
