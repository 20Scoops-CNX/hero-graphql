import heroModel from './../models/hero';

export default {
  Query: {
    heros: async (_: any, params: any) => {
      return await heroModel.find().limit(100).skip(params.skip);
    },
    hero: async (_: any, params: any) => {
      return await heroModel.findById(params.id);
    },
  },

  Mutation: {
    create: async (_: any, params: any) => {
      const result = await heroModel.create(params.body);
      return await heroModel.findById(result._id);
    },
  },
};
