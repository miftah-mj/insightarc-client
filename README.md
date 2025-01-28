# InsightArc

InsightArc is a platform that provides users with access to premium content through subscription plans. Users can browse articles, view publishers, and subscribe to different plans to access exclusive content.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Admin Credentials](#admin-credentials)
-   [Live Site URL](#live-site-url)
-   [API Endpoints](#api-endpoints)
-   [Technologies Used](#technologies-used)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   User authentication and registration
-   Subscription plans with different durations
-   Premium content access for subscribed users
-   Trending articles slider
-   Publisher listing
-   User statistics
-   Responsive design
-   Secure payment integration with Stripe
-   Profile management with image upload
-   Google Sign-In for quick registration
-   Real-time updates and notifications

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/insightarc.git
    ```

````

2. Navigate to the project directory:

```bash
cd insightarc
````

3. Install the dependencies:

```bash
npm install
```

4. Set up the environment variables by creating a `.env` file in the root directory and adding the necessary configuration.

5. Start the development server:

```bash
npm start
```

## Usage

1. Open your browser and navigate to `http://localhost:3000` to access the application.

2. Register a new account or log in with an existing account.

3. Browse articles, view publishers, and subscribe to a plan to access premium content.

## Admin Credentials

To access the admin panel, use the following credentials:

-   **Username:** `jannat234@gmail.com`
-   **Password:** `123ABC#`

## Live Site URL

You can access the live site at [insightarc](https://insightarc-2d4c8.web.app)

## API Endpoints

-   `GET /api/articles` - Retrieve a list of articles
-   `POST /api/auth/register` - Register a new user
-   `POST /api/auth/login` - Log in a user
-   `GET /api/subscriptions` - Retrieve subscription plans

## Technologies Used

-   React
-   Node.js
-   Express
-   MongoDB
-   JWT for authentication
-   Styled-components for styling
