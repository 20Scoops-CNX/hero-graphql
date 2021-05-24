import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  id: {
    type: 'Number',
  },
  name: {
    type: 'String',
  },
  slug: {
    type: 'String',
  },
  powerstats: {
    intelligence: {
      type: 'Number',
    },
    strength: {
      type: 'Number',
    },
    speed: {
      type: 'Number',
    },
    durability: {
      type: 'Number',
    },
    power: {
      type: 'Number',
    },
    combat: {
      type: 'Number',
    },
  },
  appearance: {
    gender: {
      type: 'String',
    },
    race: {
      type: 'String',
    },
    height: {
      type: ['String'],
    },
    weight: {
      type: ['String'],
    },
    eyeColor: {
      type: 'String',
    },
    hairColor: {
      type: 'String',
    },
  },
  biography: {
    fullName: {
      type: 'String',
    },
    alterEgos: {
      type: 'String',
    },
    aliases: {
      type: ['String'],
    },
    placeOfBirth: {
      type: 'String',
    },
    firstAppearance: {
      type: 'Date',
    },
    publisher: {
      type: 'String',
    },
    alignment: {
      type: 'String',
    },
  },
  work: {
    occupation: {
      type: 'String',
    },
    base: {
      type: 'String',
    },
  },
  connections: {
    groupAffiliation: {
      type: 'String',
    },
    relatives: {
      type: 'String',
    },
  },
  images: {
    xs: {
      type: 'String',
    },
    sm: {
      type: 'String',
    },
    md: {
      type: 'String',
    },
    lg: {
      type: 'String',
    },
  },
});

const Hero = mongoose.model('Hero', heroSchema);

export default Hero;
