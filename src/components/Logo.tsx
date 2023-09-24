import { useId } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import logo from '@/images/logo.png'

export function Logomark({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('relative h-8 w-8', className)} {...props}>
      <Image fill objectFit="contain" alt="logo" src={logo} />
    </div>
  )
}

export function Logo({
  // className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <div className="relative flex h-8 items-center gap-2">
        <Logomark />
        <span className="mt-1 font-display text-xl font-bold">
          Chat Souffle
        </span>
      </div>
    </div>
  )
}
