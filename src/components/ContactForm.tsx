'use client'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ContactFormInputField } from './ContactFormInputField'
import { ContactFormTextAreaField } from './ContactFormTextAreaField'
import { Button } from './Button'

type FormData = {
  name: string
  companyName: string
  email: string
  phoneNumber: number
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Server issue')
      }
      setHasSubmitted(true)
      setTimeout(() => {
        setHasSubmitted(false)
      }, 5000)
      clearErrors()
    } catch (e) {
      console.error(e)
      setError('root', {
        type: 'manual',
        message: 'Something went wrong. Please try again later.',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <ContactFormInputField
            label="Name"
            inputProps={register('name', {
              required: 'Please provide your name',
            })}
            autoComplete="name"
          />
          <ContactFormInputField
            label="Company"
            autoComplete="company-name"
            inputProps={register('companyName', {
              required: 'Please provide your company name',
            })}
          />
          <ContactFormInputField
            label="Email"
            autoComplete="email"
            className="sm:col-span-2"
            inputProps={register('email', {
              required: 'Please provide your e-mail address',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please provide a valid e-mail address',
              },
            })}
          />
          <ContactFormInputField
            label="Phone number (optional)"
            autoComplete="tel"
            className="sm:col-span-2"
            inputProps={register('phoneNumber')}
          />
          <ContactFormTextAreaField
            label="Message"
            className="sm:col-span-2"
            rows={4}
            textareaProps={register('message', {
              required: 'Please provide a message',
            })}
          />
        </div>
        <div className="mt-4 flex">
          <Button type="submit" className="mt-10" disabled={isSubmitting}>
            Let’s work together
          </Button>
        </div>
        {(errors.name ||
          errors.companyName ||
          errors.email ||
          errors.message ||
          errors.root) && (
          <p className="mt-4 text-red-400">
            {errors.name?.message ||
              errors.companyName?.message ||
              errors.email?.message ||
              errors.message?.message ||
              errors.root?.message}
          </p>
        )}
        <p className="mt-4 text-green-400">
          {hasSubmitted && 'Thank you for your message!'}
        </p>
      </div>
    </form>
  )
}
