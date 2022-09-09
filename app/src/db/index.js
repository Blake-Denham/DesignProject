const mongoose = require('mongoose')
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/DesignProject'

// Create a new mongoose connection
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
})
  .then(() => {
    console.log('Database connected ✨')
  })
  .catch((err) => {
    console.error.bind(console, 'connection error:', err)
  })

module.exports.db = mongoose.connection
