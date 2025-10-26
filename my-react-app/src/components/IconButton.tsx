import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import './IconButton.css'

type IconButtonProps = PropsWithChildren<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>
> & {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  'aria-label': string
}

const IconButton = ({
  className = '',
  type = 'button',
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={`icon-button ${className}`.trim()}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}

export default IconButton
