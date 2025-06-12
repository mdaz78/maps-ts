# TypeScript Maps Project

A TypeScript learning project that demonstrates object-oriented programming concepts, interfaces, and Google Maps API integration. This project was created while following the **TypeScript: The Complete Developer's Guide** course on Udemy.

## 🎯 Learning Objectives

This project demonstrates several key TypeScript concepts:

- **Interfaces** - Using the `Mappable` interface to ensure type safety
- **Classes** - Creating `User` and `Company` classes with proper typing
- **Type Definitions** - Working with external library types (`@types/google.maps`)
- **Modular Architecture** - Organizing code into separate, reusable modules
- **Integration** - Combining TypeScript with external APIs (Google Maps)

## 🚀 Features

- Interactive Google Maps integration
- Randomly generated users and companies using Faker.js
- Clickable map markers with info windows
- Type-safe implementation using TypeScript interfaces
- Modular, object-oriented design

## 🛠️ Technologies Used

- **TypeScript** - Main programming language
- **Parcel** - Zero-configuration build tool and development server
- **Google Maps API** - Map rendering and marker functionality
- **Faker.js** - Generate fake user and company data
- **HTML/CSS** - Basic web interface

## 📁 Project Structure

```
maps-ts/
├── src/
│   ├── index.ts          # Main application entry point
│   ├── Map.ts            # Map class and Mappable interface
│   ├── User.ts           # User class implementing Mappable
│   └── Company.ts        # Company class implementing Mappable
├── index.html            # HTML template with Google Maps script
├── package.json          # Project dependencies
└── README.md            # Project documentation
```

## 🏗️ Architecture Overview

### Mappable Interface

The `Mappable` interface ensures that any object displayed on the map has:

- A `location` property with latitude and longitude
- A `markerContent()` method that returns HTML for the info window

### Classes

- **User**: Generates random user data with name and location
- **Company**: Generates random company data with name, catchphrase, and location
- **Map**: Handles Google Maps initialization and marker management

## ⚙️ Setup & Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd maps-ts
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Get Google Maps API Key**

   - Visit the [Google Cloud Console](https://console.cloud.google.com/)
   - Enable the Maps JavaScript API
   - Create an API key
   - Replace the API key in `index.html`:

   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=Function.prototype"></script>
   ```

4. **Run the development server**

   ```bash
   npx parcel index.html
   ```

   This will:

   - Automatically compile TypeScript
   - Start a development server (usually on http://localhost:1234)
   - Enable hot module replacement for instant updates
   - Handle all bundling automatically

## 🎮 Usage

1. After running `npx parcel index.html`, open the provided local URL (usually http://localhost:1234) in your browser
2. The map will load with random user and company markers
3. Click on any marker to see details in an info window
4. Refresh the page to generate new random data
5. The development server will automatically reload when you make code changes

## 🔧 Key TypeScript Concepts Demonstrated

### Interface Implementation

```typescript
export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
}

export class User implements Mappable {
  // Implementation ensures type safety
}
```

### Type Safety with External Libraries

```typescript
/// <reference types="@types/google.maps" />
private googleMap: google.maps.Map;
```

### Modular Design

- Each class has a single responsibility
- Interface ensures consistent behavior across different types
- Easy to extend with new mappable objects

## 🚀 Extending the Project

You can extend this project by:

- Adding new classes that implement `Mappable` (e.g., `Restaurant`, `Event`)
- Adding custom marker icons for different object types
- Implementing clustering for better performance with many markers
- Adding search and filter functionality
- Integrating with real APIs instead of fake data

## 📚 Course Reference

This project was built following the **TypeScript: The Complete Developer's Guide** on Udemy, specifically covering:

- TypeScript interfaces and type definitions
- Object-oriented programming in TypeScript
- Integration with external JavaScript libraries
- Modular application architecture

## 📝 License

This project is for educational purposes as part of a TypeScript learning course.
