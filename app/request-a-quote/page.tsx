'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Link from 'next/link'

const quoteSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  direction: z.enum(['EU-CA', 'CA-EU', 'Not sure'], {
    required_error: 'Please select a direction',
  }),
  pickupCountry: z.string().min(2, 'Pickup country is required'),
  pickupCity: z.string().min(2, 'Pickup city is required'),
  pickupZip: z.string().optional(),
  deliveryCountry: z.string().min(2, 'Delivery country is required'),
  deliveryCity: z.string().min(2, 'Delivery city is required'),
  deliveryZip: z.string().optional(),
  readyDate: z.string().min(1, 'Ready date is required'),
  mode: z.enum(['Ocean', 'Air', 'Road', 'Not sure'], {
    required_error: 'Please select a transport mode',
  }),
  cargoDescription: z.string().min(10, 'Cargo description is required'),
  weight: z.string().optional(),
  volume: z.string().optional(),
  pallets: z.string().optional(),
  dimensions: z.string().optional(),
  dangerous: z.boolean().default(false),
  temperature: z.boolean().default(false),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to the privacy policy',
  }),
})

type QuoteFormData = z.infer<typeof quoteSchema>

export default function RequestAQuote() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  })

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-12">
            <svg className="w-16 h-16 text-green-600 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Your quote request has been submitted successfully. We&apos;ll review your requirements and get back to you within 24 hours.
            </p>
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Request a Quote</h1>
          <p className="text-xl text-primary-100">
            Fill out the form below and we&apos;ll provide you with a detailed quote for your shipment.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-md p-8 space-y-6">
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Company Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  {errors.company && <p className="text-red-600 text-sm mt-1">{errors.company.message}</p>}
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold mb-4">Shipment Details</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="direction" className="block text-sm font-medium text-gray-700 mb-1">
                    Direction *
                  </label>
                  <select
                    {...register('direction')}
                    id="direction"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  >
                    <option value="">Select direction</option>
                    <option value="EU-CA">Europe → Canada</option>
                    <option value="CA-EU">Canada → Europe</option>
                    <option value="Not sure">Not sure</option>
                  </select>
                  {errors.direction && <p className="text-red-600 text-sm mt-1">{errors.direction.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pickup Location</h3>
                    <div className="space-y-2">
                      <input
                        {...register('pickupCountry')}
                        type="text"
                        placeholder="Country *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                      {errors.pickupCountry && <p className="text-red-600 text-sm">{errors.pickupCountry.message}</p>}
                      <input
                        {...register('pickupCity')}
                        type="text"
                        placeholder="City *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                      {errors.pickupCity && <p className="text-red-600 text-sm">{errors.pickupCity.message}</p>}
                      <input
                        {...register('pickupZip')}
                        type="text"
                        placeholder="ZIP/Postal Code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Delivery Location</h3>
                    <div className="space-y-2">
                      <input
                        {...register('deliveryCountry')}
                        type="text"
                        placeholder="Country *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                      {errors.deliveryCountry && <p className="text-red-600 text-sm">{errors.deliveryCountry.message}</p>}
                      <input
                        {...register('deliveryCity')}
                        type="text"
                        placeholder="City *"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                      {errors.deliveryCity && <p className="text-red-600 text-sm">{errors.deliveryCity.message}</p>}
                      <input
                        {...register('deliveryZip')}
                        type="text"
                        placeholder="ZIP/Postal Code"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="readyDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Ready Date *
                    </label>
                    <input
                      {...register('readyDate')}
                      type="date"
                      id="readyDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    />
                    {errors.readyDate && <p className="text-red-600 text-sm mt-1">{errors.readyDate.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="mode" className="block text-sm font-medium text-gray-700 mb-1">
                      Transport Mode *
                    </label>
                    <select
                      {...register('mode')}
                      id="mode"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    >
                      <option value="">Select mode</option>
                      <option value="Ocean">Ocean Freight</option>
                      <option value="Air">Air Freight</option>
                      <option value="Road">Road Freight</option>
                      <option value="Not sure">Not sure</option>
                    </select>
                    {errors.mode && <p className="text-red-600 text-sm mt-1">{errors.mode.message}</p>}
                  </div>
                </div>
              </div>
            </div>

            {/* Cargo Information */}
            <div className="border-t pt-6">
              <h2 className="text-2xl font-bold mb-4">Cargo Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="cargoDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Cargo Description *
                  </label>
                  <textarea
                    {...register('cargoDescription')}
                    id="cargoDescription"
                    rows={4}
                    placeholder="Describe your cargo in detail..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  {errors.cargoDescription && <p className="text-red-600 text-sm mt-1">{errors.cargoDescription.message}</p>}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    {...register('weight')}
                    type="text"
                    placeholder="Weight (kg)"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <input
                    {...register('volume')}
                    type="text"
                    placeholder="Volume (m³)"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <input
                    {...register('pallets')}
                    type="text"
                    placeholder="Number of Pallets"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                  <input
                    {...register('dimensions')}
                    type="text"
                    placeholder="Dimensions (L x W x H)"
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      {...register('dangerous')}
                      type="checkbox"
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Dangerous goods / Hazardous materials</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      {...register('temperature')}
                      type="checkbox"
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">Temperature-controlled cargo</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="border-t pt-6">
              <label className="flex items-start">
                <input
                  {...register('consent')}
                  type="checkbox"
                  className="mt-1 mr-2"
                />
                <span className="text-sm text-gray-700">
                  I consent to the processing of my personal data in accordance with the{' '}
                  <Link href="/privacy-policy" className="text-primary-600 hover:underline">
                    Privacy Policy
                  </Link>
                  . *
                </span>
              </label>
              {errors.consent && <p className="text-red-600 text-sm mt-1">{errors.consent.message}</p>}
            </div>

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">There was an error submitting your quote request. Please try again or contact us directly.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

