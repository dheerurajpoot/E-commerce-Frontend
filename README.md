# DRStore E-commerce Website Documentation

## Project Overview
DRStore is a fully functional e-commerce website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). The project features a comprehensive frontend for customers, a backend for handling business logic and data management, and an admin panel for managing products, orders, and customer support. The website is live at [DRStore](https://drstore.vercel.app/).

### Key Features
- **User Interface**: A user-friendly frontend allowing customers to browse products, add items to the cart, and make purchases.
- **Admin Panel**: A dedicated interface for administrators to manage products, categories, brands, colors, and orders.
- **Payment Gateway**: Integrated with Razorpay for secure online payments.
- **Email Automation**: Automated emails using Nodemailer for order confirmations and status updates.
- **Order Management**: Efficient handling of order placements and updates.
- **Support System**: Mechanism for managing customer support inquiries.

## Tech Stack
- **Frontend**: React.js, Redux, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer

## Project Structure
```
drstore/
├── client/               # React frontend
├── server/               # Node.js backend
│   ├── controllers/      # Request handlers
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routes
│   ├── utils/            # Utility functions (e.g., email automation)
│   ├── config/           # Configuration files (e.g., database, Razorpay)
│   └── index.js         # Entry point for the backend server
├── admin/                # Admin panel
│   ├── public/           # Public assets (images)
│   ├── src/              # Source files (React components, Redux store)
│   ├── App.js            # Main app component
│   └── index.js          # Entry point for the admin panel
└── README.md             # Project documentation
```

## Features in Detail

### User Interface
- **Product Browsing**: Users can browse products by category, brand, and color.
- **Cart Management**: Users can add products to the cart, view cart items, and proceed to checkout.
- **Order Placement**: Users can place orders and make payments through Razorpay.
- **Order Tracking**: Users receive email updates on their order status.

### Admin Panel
- **Product Management**: Add, edit, delete products along with their categories, brands, and colors.
- **Order Management**: View and update the status of customer orders.
- **Support Management**: Handle customer support inquiries efficiently.

### Payment Integration
- **Razorpay Integration**: Secure payment processing integrated using Razorpay's API.
- **Payment Flow**: Users can make payments seamlessly during the checkout process.

### Email Automation
- **Nodemailer Setup**: Automated email notifications for order confirmations and updates.
- **Email Templates**: Predefined templates for different email notifications (order placed, order shipped, etc.).

## Deployment
The application is deployed on Vercel, providing a scalable and reliable hosting solution. The live website can be accessed at [DRStore](https://drstore.vercel.app/).

### Deployment Steps
1. **Frontend Deployment**: Deployed using Vercel, leveraging its continuous integration and deployment capabilities.
2. **Backend Deployment**: Hosted on Render, connected to MongoDB for database management.

## Usage Instructions

### Running Locally
1. **Clone the Repository**:
   ```sh
   git clone https://github.com/dheerurajpoot/E-commerce-Frontend.git
   ```
2. **Install Dependencies**:
   ```sh
   cd E-commerce-Frontend
   npm install
   ```
3. **Do the same with the backend as well**:
   
4. **Configure Environment Variables**:
   - Create a `.env` file in the `server` directory with the following variables:
     ```env
     PORT = your_port
     DB_URL=your_mongodb_uri
     JWT_SECRET = your_JWT_secret
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_KEY_SECRET=your_razorpay_key_secret
     MAIL_ID=your_email_address
     MAIL_PASS=your_email_password
     CLOUDINARY_KEY = your_cloudinary_key
     CLOUDINARY_NAME = your_cloudinary_name
     CLOUDINARY_SECRET = your_cloudinary_secret
     ```


### Accessing the Application
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:5000](http://localhost:5000)
- **Admin Panel**: [http://localhost:3001](http://localhost:3001)

## Conclusion
DRStore is a robust e-commerce platform designed to provide a seamless shopping experience for customers and an efficient management system for administrators. With its advanced features and modern tech stack, it is well-suited for real-world deployment and scalability.

For any further queries or support, please contact rajpootdheeru90@gmail.com.
