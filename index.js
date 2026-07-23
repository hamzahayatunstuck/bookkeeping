require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const connectDb = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const libraryRecordsRoutes = require('./routes/libraryRecords');
connectDb();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/library-records', libraryRecordsRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});