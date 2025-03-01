# QBTech Technical Assessment

This monorepo contains my submission for the QBTech technical assessment for Senior Software Engineer Frontend.

You can visit the deployed project [here](https://qbtech-technical-assessment.vercel.app/). This project will be unpublished after the assessment is over.

## Installation

```bash
npm install
npm run dev
```

## Requirements

Create a web application where you can book a trip with the airline "QBAir".

## General

- Written with React and Tailwind.
- No need for backend (ie submitting the form doesn't need to do anything), but a receipt would be nice!

### Features

- Choose and book a one-way trip
  - Default option
  - Departure date cannot be earlier than today
  - Return date is disabled.
- Choose and book a two-way trip
  - Return date is available.
  - Return date must be the same or later than departure date.
- Contain form validation
  - Date formatted as yyyy-mm-dd
  - Validation must make sense in relation to choosing dates for a trip.
  - Validation must be communicated to the user.

### Additional

- Form inputs can be set from query parameters (ie `?departure=2021-12-31`)
  - If a query parameter is not valid, it should be ignored.
  - Vertically stacked inputs, centered on the page.

## Scope

### Webapp

- Home page
  - A form with the following inputs:
    - Departure date
    - Return date (if applicable)
    - Number of passengers
    - A submit button
  - The form inputs can be set from query parameters (ie `?departure=2021-12-31`)
- Booking page
  - The information from the home page
  - The form inputs can be set from query parameters (including the departure & return date)
  - A form with the following inputs: (grouped, multiplied by the number of passengers)
    - Name
    - Email
    - Phone number
    - Nationality
    - Passport number
- Receipt page
  - Outline all the information from the booking page.
  - A button to go back to the home page.

### Additional

These features are not explicitly required but I've included to enhance the submission:

- **Dark mode** - Implemented dark mode using Tailwind `:dark` variant.
- **Storybook** - Deployed to showcase the proper breakdown of components into Atoms, Molecules, and Organisms. I like nicely organized projects!
- **Tests** - Because writing tests is important! (IIRC I don't recall finding this in the requirements!)

### Limitations

Due to time constraints, the following will not be implemented:

- **Fully fleshed-out design system/component library.** UI components will be built with interfaces sufficient for my needs rather than as open-ended components typical of a traditional library.
- **Destination selection or flight selection from a table.** These features will not be included.
- **Database persistence.** Data will not be saved to a database, though this can be revisited if needed.
- **Additional receipts.** The confirmation page will serve as the only receipt; no receipts will be sent via email.

### Project Structure

```bash
monorepo/
├── apps/
│   ├── qbair/        # NextJS project containing the assessment
│   ├── storybook/    # Storybook containing the UI components
├── packages/
│   └── ui/           # UI package containing Tailwind && UI reusable UI components
```

### Dependencies Used (and Why)

#### Core Framework

- **Next.js**
  I'm very comfortable with projects like CRA (Create React App) and Vite. Since there is no explicit requirement for a specific framework and I only have 4 hours, I chose Next.js. It abstracts lower-level details like routing and allows easy deployment to Vercel.

#### Styling

- **Tailwind CSS**
  Part of the requirements. I also really like Tailwind.

#### UI Development

- **Storybook**
  Helps develop and organize UI components in isolation. It's a great tool for snapshot testing and checking accessibility at the component level.

#### Forms & Validation

- **React Hook Form + Zod**
  I'm very comfortable with React Hook Form. Form validation can get tricky quickly, so there's no need to reinvent the wheel when well-tested libraries like `react-hook-form` and `zod` exist.

#### UI Library

- **Origin UI**
  I like trying out different UI libraries. After my initial sketches, OirginUI seemed to cover majority of the UI elements that I will be needing for this task. The UI package itself is compatible with Tailwind and seems to be grounded on accessibility. Note: I don't think I'd use this in a real-life application without further vetting.

#### Testing

- **RTL (React Testing Library) + Jest**
  Standard tools for unit testing.

## Personal notes

Just writing down everything that I've done / plan to do. I'll update this as I go along.

### Method to the madness

- Read the requirements.
- Given the requirements, look around and think about best way to solve this assessment.
- Write a README file to organize my thoughts.
- Steal QBTech logos off their website and create a few basic wireframes on Figma for QBAir.
- Choose packages that I will be using based off my requirements + sketches.
- Setup the monorepo and install all the dependencies.
- Create UI components + Storybook - Write tests and check if adding Chromatic can be done without too much of a headache.
- Implement business logic inside the NextJS project.
- Deploy to Vercel.
- Update documentation with additional notes and learnings.
- Submit the assessment. OBS: SUBMIT BY SUNDAY 15:00
