require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoute');

const app = express();
connectDB();

app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
