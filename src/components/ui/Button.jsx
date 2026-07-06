import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const variants = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 shadow-sm',
  outline:
    'bg-white text-brand-700 border border-brand-200 hover:bg-brand-50',
  ghost:
    'bg-white/10 text-white border border-white/30 hover:bg-white/20',
  dark:
    'bg-ink text-white hover:bg-black',
}

const sizes = {
  md: 'h-11 px-6 text-[15px]',
  lg: 'h-12 px-7 text-base',
  sm: 'h-9 px-4 text-sm',
}

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors whitespace-nowrap',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const Comp = as || 'button'
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  )
}
