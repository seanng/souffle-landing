import { UseFormRegisterReturn } from 'react-hook-form'

type Props = {
  label: string
  rows: number
  textareaProps: UseFormRegisterReturn<string>
} & React.ComponentPropsWithoutRef<'div'>

export const FormTextAreaField = ({
  label,
  rows,
  textareaProps,
  ...props
}: Props) => (
  <div {...props}>
    <label
      htmlFor={textareaProps.name}
      className="text-base font-semibold text-neutral-950"
    >
      {label}
    </label>
    <div className="mt-2.5">
      <textarea
        {...textareaProps}
        rows={rows}
        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
)
