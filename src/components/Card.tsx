import type { PropsWithChildren } from 'react'
import './Card.css'

interface CardProps extends PropsWithChildren {
  className?: string
  variant?: 'post' | 'profile'
}

const Card = ({ children, className = '', variant }: CardProps) => {
  const variantClass = variant ? `card--${variant}` : ''

  return (
    <article className={`card ${variantClass} ${className}`.trim()}>
      {children}
    </article>
  )
}

export default Card
