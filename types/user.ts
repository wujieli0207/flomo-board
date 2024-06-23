export type Role = 0 | 2 // 0 Standard User; 2 Member User

export type RedisUserId = string | null

export interface UserId {
  userId: string
}

export interface RemainingParams {
  userId: string
  role?: Role
}

export interface UserInfo {
  userId: string
  username: string
  avatar?: string
  platform: string
  email: string
  role: Role
  membershipExpire?: number
  accessToken?: string
}

export interface IUserInfo {
  id: number
  name: string
  email: string
  language: string
  email_verified_at: string
  pro_expired_at: string
  apple_subscription: null | string
  apple_mac_subscription: null | string
  google_play_subscription: null | string
  api_token: string
  referer_id: null | string
  referee_pro_days: number
  register_via: string
  created_at: string
  access_token: string
  slug: string
  xgbj: boolean
  xgbj_entrance: boolean
  user_xgbj: {
    id: number
    user_id: number
    status: string
    init: string
    created_at: string
    updated_at: string
  }
}
