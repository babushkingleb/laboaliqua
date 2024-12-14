   // index.js or app.js
   require('dotenv').config();

   // Now you can access the variables defined in your .env file
   const port = process.env.PORT;
   const dbUrl = process.env.DATABASE_URL;
   const secretKey = process.env.SECRET_KEY;

   console.log(`Server running on port ${port}`);
   console.log(`Database URL: ${dbUrl}`);
   console.log(`Secret Key: ${secretKey}`);
   