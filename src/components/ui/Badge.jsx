import { cn } from '@/lib/utils'

export default function Badge({ icon: Icon, children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700',
        className,
      )}
    >
      {Icon && <Icon className="h-3.5 w-3.5" />}
      {children}
    </span>
  )
}
