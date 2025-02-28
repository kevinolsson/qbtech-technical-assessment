# QBTech Technical Assessment

This monorepo contains my submission for the QBTech technical assessment for Senior Software Engineer Frontend.

You can visit the deployed project [here](https://qbtech-technical-assessment.vercel.app/). This project will be unpublished after the assessment is over.

## Installation

```bash
cd qbtech-technical-assessment
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

### Project Structure

```bash
monorepo/
├── apps/
│   ├── qbair/        # NextJS project containing the assessment
│   ├── storybook/    # Storybook containing the UI components
├── packages/
│   ├── ui/           # UI package containing Tailwind && UI reusable UI components
│   └── utils/        # Utility package containing utility (if any)
```

### Testing
- Snapshot tests for all the UI components. Nice to have: Chromatic???
- Unit tests for all the business logic + UI components.

### Dependencies used (and why)
- NextJS > I'm very comfortable with projects such as CRA (Create React App) and Vite. But given that there is no explicit requirement to use a specific framework and that I am to only spend 4 hours on this, I figured I'd go with NextJS as it abstracts a lot of the lower levels details such as routing and allows me to easily deploy to Vercel.
- TailwindCSS > Part of the requirements. I also really like Tailwind.
- Storybook > Helps me develop and organize any UI component in isolation. Good way to get some snapshot tests + check accessibility on the individual UI components.
- React Hook Form + Zod > I'm very comfortable with react-hook-form. Form validation can get tricky very fast and there is no need to reinvent the wheel when packages such as react-hook-form and zod already exists + has been battle tested by the community.
- React Aria (UI Library) > To begin with, I like going as primitive as possible. That being said, sometimes primitive HTML elements don't fit the bill (yet). A good example are datepickers (`input type="date"`). They rely on browsers to set locale. The problem being is that browsers sometimes don't respect user locale settings. SO I've decided to use React Aria + to save time by using some pre-built components provided by them.I like trying new libraries whenever I get the chance! I've worked a lot with MUI, MantineUI, Daisy, etc but not yet with React Aria. I chose it due to its heavy focus on accessibility and its unstyled nature which makes it styling with Tailwind easy. Also building your own datepicker is a nightmare!
- RTL + Jest for unit testing. Pretty standard stuff.

## Personal notes
Just writing down everything that I've done / plan to do. I'll update this as I go along.

### Method to the madness
- Read the requirements.
- Given the requirements, look around and think about best way to solve this assessment.
- Steal QBTech logos off their website and create a few basic wireframes on Figma for QBAir.
- Write a README file to organize my thoughts.
- Setup the monorepo and install all the dependencies.
- Create UI components + Storybook - Write tests and check if adding Chromatic can be done without too much of a headache.
- Implement business logic inside the NextJS project.
- Deploy to Vercel.
- Update documentation with additional notes and learnings.
- Submit the assessment. OBS: SUBMIT BY SUNDAY 15:00
