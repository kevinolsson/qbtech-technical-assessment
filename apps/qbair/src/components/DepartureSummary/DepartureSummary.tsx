"use client"
import { Alert } from "ui"
import { useSearchParams } from "next/navigation"
import { parseDate, type CalendarDate } from "@internationalized/date"

const formatDate = (date: CalendarDate) => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date.toString()))
}

export const DepartureSummary = () => {
  const searchParams = useSearchParams()

  const params = {
    departureDate: (() => {
      try {
        const date = searchParams.get('departureDate')
        return date ? parseDate(date) : null
      } catch {
        return null
      }
    })(),
    returnDate: (() => {
      try {
        const date = searchParams.get('returnDate')
        return date ? parseDate(date) : null
      } catch {
        return null
      }
    })(),
    passengers: parseInt(searchParams.get('passengers') ?? '', 10),
  }

  // Return nothing if no valid params exist
  if (!params.departureDate && !params.returnDate && isNaN(params.passengers)) {
    return null
  }

  return (
    <Alert variant="info" className="space-y-2">
      {params.departureDate && (
        <p>
          <strong>Departure:</strong> {formatDate(params.departureDate)}
        </p>
      )}
      {params.returnDate && (
        <p>
          <strong>Return:</strong> {formatDate(params.returnDate)}
        </p>
      )}
      {!isNaN(params.passengers) && (
        <p>
          <strong>Passengers:</strong> {params.passengers} {params.passengers === 1 ? 'person' : 'people'}
        </p>
      )}
    </Alert>
  )
}