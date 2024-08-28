
Certainly! Here is a comprehensive README file that includes overall project documentation, service details, and how to get started with the application.

Angular Country Information Application
This Angular application provides information about countries and public holidays. It interacts with a backend API to fetch data related to countries, including a list of available countries, details about specific countries, and public holidays for various years.

Table of Contents
Project Overview
Prerequisites
Installation
Running the Application
Building the Application
API Integration
Nager.Date API
Service Documentation
CountryInfoRequestService
Contributing
Project Overview
This Angular project is designed to provide a user-friendly interface for viewing and interacting with country-related information and public holidays. The application uses Angular Material for UI components and includes functionalities to:

Fetch and display a list of available countries.
Retrieve and show public holidays for a given country and year.
Display detailed information about specific countries.
Prerequisites
Before you start, ensure you have the following installed:

Node.js (>= 14.x)
npm (>= 6.x)
Installation
Clone the repository:

bash
Копировать код
git clone <repository-url>
cd <repository-directory>
Install the dependencies:

bash
Копировать код
npm install
This will install all the necessary packages listed in package.json.

Running the Application
To start the development server and run the application, use:

bash
Копировать код
ng serve
The application will be accessible at http://localhost:4200.

Building the Application
To build the application for production, use:

bash
Копировать код
ng build --prod
The built files will be output to the dist/ directory.

API Integration
Nager.Date API
The application integrates with the Nager.Date API to retrieve public holidays.

Example API Endpoints
Get Available Countries:

Endpoint: /api/available-countries
Description: Retrieves a list of available countries.
Get Public Holidays:

Endpoint: /api/public-holidays/{year}/{countryCode}
Description: Retrieves public holidays for a specific country and year.
Get Country Information:

Endpoint: /api/country-info/{countryCode}
Description: Retrieves detailed information about a specific country.
Service Documentation
CountryInfoRequestService
The CountryInfoRequestService is responsible for making HTTP requests to the API and handling responses related to country data.

Methods
GetAvailableCountries()

Description: Fetches a list of all available countries.
Returns: Observable<Country[]>
GetPublicHolidays(codeCounty: string | null, year: number)

Description: Retrieves a list of public holidays for a given country and year.
Parameters:
codeCounty (string | null): Country code.
year (number): Year for the holidays.
Returns: Observable<Holiday[]>
GetInfoCountry(codeCounty: string | null)

Description: Fetches detailed information about a specific country.
Parameters:
codeCounty (string | null): Country code.
Returns: Observable<CountryInfo>
Service Implementation
The service is implemented in country-info-request.service.ts and uses Angular's HttpClient to communicate with the backend API. Ensure that the HttpClientModule is imported into your Angular module.

Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a feature branch (git checkout -b feature/new-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Feel free to customize this README to fit your project specifics and add more details if necessary. This document should provide a solid foundation for understanding and working with your Angular application.




