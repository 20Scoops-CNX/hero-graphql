export default {
  Query: {
    heros: async () => {
      return [{ name: '20scoops HERO 1' }];
    },
    hero: async () => {
      return {
        name: '20scoops',
      };
    },
  },

  Mutation: {
    create: async () => {
      const user = '20scoops CNX';

      return user;
    },
  },
};
