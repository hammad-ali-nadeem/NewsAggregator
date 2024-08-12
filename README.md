# News Aggregator App

This is a news aggregator application built with React, featuring a personalized news feed that allows users to select their preferred sources, categories, and authors. It uses the NewsAPI to fetch articles and displays them in a user-friendly interface.

## Features

- Search and filter articles by keyword, date, category, and source.
- Customize news feed based on preferred sources, categories, and authors.
- Mobile-responsive design.
- Docker support for easy deployment.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Docker (for containerization)

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/news-aggregator-app.git
   cd news-aggregator-app

2. **Using npm:**

   ```bash
   npm install

3. **Using yarn:**

   ```bash
   yarn install

3. **Set Up Environment Variables**

   ```bash
  REACT_APP_NEWS_API_KEY=your_newsapi_key

## Running the Application

1. **Start the Development Server**

   ```bash
   npm start
   yarn start

This will start the development server at http://localhost:3000.

Open the Application

Open your web browser and navigate to http://localhost:3000 to view the application.

## Building the Application
1. **Start the Development Server**

   ```bash
   npm build
   yarn build


## Docker Setup

1. **Build the Docker Image**

   ```bash
   docker build -t news-aggregator-app .

2. **Run the Docker Container**

   ```bash
   docker run -p 3000:3000 --env-file .env news-aggregator-app


Testing
Testing is not configured yet. Add tests as needed for your application.

Contributing
Contributions are welcome! Please follow the standard pull request process and ensure that your code adheres to the project's coding standards.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
NewsAPI for providing news articles.
React for building the user interface.
