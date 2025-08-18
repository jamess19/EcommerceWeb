# James Shop Web

## Overview

James Shop Web is an e-commerce platform designed for efficient product management, enabling users to list, search, add, update, and delete products. The application integrates Arcjet for API security, providing rate limiting and bot detection, and utilizes PostgreSQL (Neon Cloud) as a fast and flexible cloud-based database. Built with modern web technologies, it offers a responsive user interface and a robust backend for seamless online shopping experiences.

## Features

- **Product Listing**: Display a comprehensive list of products with details.
- **Search Functionality**: Search products by name for quick access.
- **Product Details**: View detailed information about individual products.
- **Add Products**: Create new product entries with relevant details.
- **Update Products**: Edit existing product information.
- **Delete Products**: Remove products from the catalog.
- **API Security**: Arcjet integration for rate limiting and bot protection.

## Project Structure

```
JamesShopWeb/
├── frontend/           # React + Vite frontend application
├── backend/            # Node.js backend with API endpoints
├── README.md           # Project documentation
```

## System Requirements

- **Node.js**: >= 16.x (for frontend and backend)
- **PostgreSQL**: Neon Cloud instance (or local PostgreSQL for development)
- **Git**: For version control
- **Arcjet**: API key for security and rate limiting
- **Browser**: Modern web browser (e.g., Chrome, Firefox)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/jamess19/EcommerceWeb.git
cd EcommerceWeb
```

### 2. Frontend Setup (React + Vite)

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the frontend application:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (default Vite port).

### 3. Backend Setup (Node.js)

1. Install dependencies:

```bash
cd backend
npm install
```

2. Configure environment variables in `backend/.env`. Example:

```env
DATABASE_URL=postgres://username:password@hostname:port/james_shop
ARCJET_API_KEY=your_arcjet_api_key
PORT=3000
```

> **Note**: Obtain the `DATABASE_URL` from your Neon Cloud PostgreSQL instance or configure a local PostgreSQL database.

3. Start the backend server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

### 4. Database Setup (PostgreSQL - Neon Cloud)

1. Set up a PostgreSQL database using [Neon Cloud](https://neon.tech/) or a local PostgreSQL instance.
2. Update the `DATABASE_URL` in `backend/.env` with your Neon Cloud or local database credentials.
3. The backend handles schema initialization and migrations automatically upon startup (ensure your Node.js application is configured to do so, or manually run migrations if provided).

## Usage

1. **Access the Application**: Open `http://localhost:5173` in your browser.
2. **Browse Products**: View the product list or search for products by name.
3. **Manage Products**: Add, update, or delete products using the intuitive interface.
4. **Secure API Access**: Arcjet ensures protection against bots and excessive API requests.

## Useful Commands

- **Frontend**:
  - Run: `npm run dev`
  - Build: `npm run build`
- **Backend**:
  - Run: `npm start`
  - Test: `npm test`

## Tech Stack

- **Frontend**: React, Vite, JavaScript, HTML, CSS
- **Backend**: Node.js
- **Database**: PostgreSQL (Neon Cloud)
- **Security**: Arcjet (Rate limiting + Bot detection)
- **Tools**: Git, GitHub, VS Code, Postman

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, reach out to [Nguyen Quang Thong](mailto:qthong2004@email.com) or open an issue on GitHub.
