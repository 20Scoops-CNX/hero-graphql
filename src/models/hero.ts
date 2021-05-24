import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  }
});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
