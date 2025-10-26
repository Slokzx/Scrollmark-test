import type {
  ButtonHTMLAttributes,
  CSSProperties,
  PropsWithChildren,
} from 'react'
import './PillButton.css'

type PillButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
> & {
  tone?: string
}

const PillButton = ({
  children,
  className = '',
  tone,
  style,
  ...props
}: PillButtonProps) => {
  const defaultColor = 'var(--pill-default-color)'
  const primaryColor = tone ?? defaultColor
  type PillStyle = CSSProperties & {
    '--pill-color'?: string
  }

  const customStyle: PillStyle = {
    '--pill-color': primaryColor,
    ...style,
  }

  return (
    <button
      className={`pill-button ${className}`.trim()}
      type="button"
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  )
}

export default PillButton
