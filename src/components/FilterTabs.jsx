import { cn } from '@/lib/utils'

export default function FilterTabs({ options, active, onChange, className }) {
  return (
    <div className={cn('inline-flex flex-wrap gap-1 rounded-full bg-gray-100 p-1', className)}>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            'rounded-full px-4 py-2 text-sm font-medium transition-colors',
            active === opt ? 'bg-white text-ink shadow-sm' : 'text-gray-500 hover:text-ink',
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}
