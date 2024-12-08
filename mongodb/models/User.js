import mongoose from 'mongoose';

// Define the user schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Create a User model
const User = mongoose.model('User', UserSchema);

// Export the User model
export default User;
