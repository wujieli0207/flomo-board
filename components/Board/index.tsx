// components/Board/index.tsx
'use client'

import { useEffect, useState } from 'react'
import { localforageInstance } from '@/lib/storage'
import { FLOMO_USER_INFO_KEY } from '@/config/common'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IUserInfo } from '@/types/user'
import { IMemo } from '@/types/flomo'

// 定义 Memo 的类型
interface Memo {
  id: number
  content: string
  created_at: string
  updated_at: string
}

const Board = () => {
  const [memos, setMemos] = useState<Memo[]>([]) // 用于存储 memo 数据的状态
  const [loading, setLoading] = useState<boolean>(true) // 用于指示数据是否正在加载

  useEffect(() => {
    fetchMemos() // 执行 fetchMemos 函数
  }, [])

  if (loading) {
    return <div>Loading...</div> // 数据加载时显示加载状态
  }

  async function fetchMemos() {
    try {
      const timestamp = new Date().getTime().toString().substring(0, 10)

      // 从 localforage 中获取用户信息
      const userInfo = await localforageInstance.get<IUserInfo>(
        FLOMO_USER_INFO_KEY
      )
      if (userInfo && userInfo.access_token) {
        // 构造 Flomo API 的 URL
        const url = `https://flomoapp.com/api/v1/memo/updated/?limit=200&latest_updated_at=1718551965&latest_slug=MTIzNTE0MjY4&tz=8:0&timestamp=${timestamp}&api_key=flomo_web&app_version=4.0&platform=web&webp=1&sign=0cb06e15f807276ccf0fb92f5d9241ba`

        // 发起请求，附加 Authorization 头部
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
        })

        if (response.ok) {
          const result = await response.json()
          // 过滤掉已删除的 memo
          const filterdMemoList = (result.data as IMemo[]).filter(
            (memo) => !memo.deleted_at
          )
          setMemos(filterdMemoList)
        } else {
          console.error('Failed to fetch memos from Flomo API')
        }
      }
    } catch (error) {
      console.error('Error fetching user info or memos:', error)
    } finally {
      setLoading(false) // 无论请求是否成功，都设置 loading 为 false
    }
  }

  return (
    <div className="grid gap-4">
      {memos.map((memo) => (
        <Card key={memo.id} className="mb-4">
          <CardHeader>
            <CardTitle>Memo {memo.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{memo.content}</p>
            <small>
              Created at: {new Date(memo.created_at).toLocaleString()}
            </small>
            <br />
            <small>
              Updated at: {new Date(memo.updated_at).toLocaleString()}
            </small>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Board
