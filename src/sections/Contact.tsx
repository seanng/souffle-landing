'use client'

import { Button } from '@/components/Button'
import { ContactInfo } from '@/components/ContactInfo'
import { FadeIn } from '@/components/FadeIn'
import { FormInputField } from '@/components/FormInputField'
import { FormTextAreaField } from '@/components/FormTextAreaField'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormData = {
  name: string
  companyName: string
  email: string
  phoneNumber: number
  message: string
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log('data: ', data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormInputField
            label="Name"
            inputProps={register('name', { required: true })}
            autoComplete="name"
          />
          <FormInputField
            label="Company"
            autoComplete="company-name"
            inputProps={register('companyName', { required: true })}
          />
          <FormInputField
            label="Email"
            autoComplete="email"
            className="sm:col-span-2"
            inputProps={register('email', { required: true })}
          />
          <FormInputField
            label="Phone number (optional)"
            autoComplete="tel"
            className="sm:col-span-2"
            inputProps={register('phoneNumber')}
          />
          <FormTextAreaField
            label="Message"
            className="sm:col-span-2"
            rows={4}
            textareaProps={register('message', { required: true })}
          />
        </div>
        <div className="mt-4 flex justify-end lg:mt-8">
          <Button type="submit" className="mt-10">
            Let’s work together
          </Button>
        </div>
      </div>
    </form>
  )
}

export function Contact() {
  return (
    <FadeIn>
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h1>
                <span className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                  Let’s work together
                </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fill out the form or email us at hello@chatsouffle.com and we’ll
                get back to you ASAP.
              </p>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </FadeIn>
  )
}
