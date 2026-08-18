const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsDoc');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const publicRoutes = require('./routes/publicRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info:{
            title: 'Modern Real Estate API',
            version: '1.0.0',
            description: 'API documentation for Real Estate application',
        },
        servers: [
            {
                url: "http://localhost:${process.env.PORT || 5000}",
            }
        ]
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.get('/', (req, res) => {
    res.send('Welcome to the Modern Real Estate API');
});
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/public', publicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});