type ContactInfoProps = {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
  label: string
  value: string
  href?: string
}

export function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: ContactInfoProps) {
  return (
    <div className="flex gap-x-4">
      <dt className="flex-none">
        <span className="sr-only">{label}</span>
        <Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
      </dt>
      <dd>
        {href ? (
          <a className="hover:text-gray-900" href={href}>
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  )
}
