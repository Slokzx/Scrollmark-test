export interface Tag {
  label: string
  color?: string
}

export interface PostCardData {
  profile: {
    username: string
    followers: string
    avatar: string
  }
  media: {
    image: string
    alt: string
  }
  stats: {
    likes: string
    comments: string
    trend: number
  }
  caption: string
  timestamp: string
  tags: Tag[]
}

export interface ProfileMetric {
  icon: 'users' | 'trend'
  label: string
  delta: string
  accent?: string
}

export interface CarouselItem {
  image: string
  alt: string
  isAction?: boolean
}

export interface ProfileCardData {
  profile: {
    username: string
    name: string
    followers: string
    followersChange: string
    avatar: string
  }
  tags: Tag[]
  metrics: ProfileMetric[]
  carousel: CarouselItem[]
}

export interface AppData {
  postCard: PostCardData
  profileCard: ProfileCardData
}
