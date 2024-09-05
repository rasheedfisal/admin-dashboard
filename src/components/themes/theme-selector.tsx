import { useTheme } from '@/components/themes/use-theme'
import { Button } from '@/components/custom/button'
import { cn } from '@/lib/utils'

export function ThemeSelector() {
  const [theme, setTheme] = useTheme()

  return (
    <div className='flex items-center justify-center gap-2'>
      <Button
        size='icon'
        variant='outline'
        className={cn('h-7 w-7', theme === 'slate' && 'border-slate-950')}
        onClick={() => setTheme('slate')}
      >
        <div className='aspect-square w-5 rounded-sm bg-slate-950' />
        <span className='sr-only'>Slate</span>
      </Button>
      <Button
        size='icon'
        variant='outline'
        className={cn('h-7 w-7', theme === 'orange' && 'border-orange-400')}
        onClick={() => setTheme('orange')}
      >
        <div className='aspect-square w-5 rounded-sm bg-orange-400' />
        <span className='sr-only'>Orange</span>
      </Button>
      <Button
        size='icon'
        variant='outline'
        className={cn('h-7 w-7', theme === 'green' && 'border-green-600')}
        onClick={() => setTheme('green')}
      >
        <div className='aspect-square w-5 rounded-sm bg-green-600' />
        <span className='sr-only'>Orange</span>
      </Button>
    </div>
  )
}
