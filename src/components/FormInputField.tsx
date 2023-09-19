type Props = {
  label: string
  type: string

  name: string
  id: string
  autoComplete: string
} & React.ComponentPropsWithoutRef<'div'>

export const FormInputField = ({
  label,
  type,
  name,
  id,
  autoComplete,
  ...props
}: Props) => (
  <div {...props}>
    <label htmlFor={id} className="text-base font-semibold text-neutral-950">
      {label}
    </label>
    <div className="mt-2.5">
      <input
        type={type}
        name={name}
        id={id}
        autoComplete={autoComplete}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
)
