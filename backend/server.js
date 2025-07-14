const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ Allow frontend origin for Theia environment
const allowedOrigin = 'https://dhiraj-3000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai';

app.use(cors({
  origin: allowedOrigin,
  methods: ['GET', 'POST'],
  credentials: true,
}));

// Middleware
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('✅ Backend is working!');
});

// Register route
app.post('/api/auth/register', (req, res) => {
  const { name, phone, email, password } = req.body;

  if (!name || !phone || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  console.log('✅ Registering user:', { name, phone, email });

  // Respond with a dummy token
  res.status(201).json({ authtoken: 'dummy-token' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
