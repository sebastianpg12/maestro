import { cn } from '@/lib/utils'

export default function Card({ className, children }) {
  return (
    <div className={cn('rounded-xl shadow-card', className)}>
      {children}
    </div>
  )
}
