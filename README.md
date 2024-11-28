# Swiggy Clone

A **Swiggy-inspired** food ordering application built using **Angular** and **Tailwind CSS**. This application enables users to browse restaurants, add items to the cart, manage a favorites list, authenticate securely, and place orders.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Services](#services)
- [Tech Stack](#tech-stack)

---

## Features

**1. Home Page**
- Lists featured food items and top restaurants.
- Users can scroll to explore available restaurants and dishes.

**2. Search Feature**
- A search bar allows filtering by food or restaurant name.
- Helps users easily find specific items or restaurants.

**3. Favorites Page**
- Users can mark restaurants and dishes as favorites directly from the homepage.
- Favorites are saved with Angular services and `localStorage`, enabling quick access.

**4. Restaurant Page**
- Displays a detailed menu with various food items available for selection.
- Users can add items from only one restaurant at a time to their cart.

**5. Cart Page**
- Allows users to add items to the cart with real-time cost calculation.
- Users can adjust item quantities; only authenticated users can proceed to place an order.

**6. Authentication**
- Managed by MockAPI, enabling secure login and registration.

**7. Place Order**
- A modal prompts users to enter their address to finalize an order.
- Order details, including user information, address, cart contents, and restaurant name, are stored in MockAPI.

---

## Project Structure

The project is organized as follows:

- **/src/app**: Main application folder containing components, services, and configuration files.
  - **cart**: Handles cart-related functionalities, including item addition, removal, and quantity updates.
  - **favourite**:Displays the user's favorites list.
  - **hero**: Contains the homepage features, such as top dishes and featured restaurants.
  - **login**: User login functionality and interface.
  - **navbar**: Displays the navigation bar, including links to different pages and cart status.
  - **orders**: Displays order details and handles order placement.
  - **signup**: User registration interface and functionality.

- **app.component.ts**: Root component of the application.
- **app.config.ts**: Configuration settings for the application, such as API URLs.
- **app.routes.ts**: Defines the routing for the application.

---

## Services

The application uses multiple Angular services to manage data and user interactions:

- **CartService**: Manages the cart, including item addition, removal, and total cost calculation.
- **LoginService**: Manages user authentication.
- **OrderService**: Manages order-related functionality i.e. placing orders.
- **RestaurantService**: Handles restaurant data, including retrieving restaurant lists.
- **SearchService**: Provides search functionality, allowing users to filter by food or restaurant names.
- **SignupService**: Manages user registration functionality.

Each service encapsulates specific logic and data operations, promoting a clean separation of concerns.

---

## Tech Stack

- **Frontend**: Angular, Tailwind CSS
- **Authentication & Data Storage**: MockAPI
- **State Management**: Angular Services

---



