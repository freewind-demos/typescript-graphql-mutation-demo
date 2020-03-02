import {GraphQLSchema, GraphQLObjectType, GraphQLInputObjectType, GraphQLString, GraphQLList} from 'graphql';

const messages: string[] = [
  'existing-message'
]

const NewMessageInput = new GraphQLInputObjectType({
  name: 'NewMessageInput',
  fields: {
    newMessage: {type: GraphQLString},
  }
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: () => ({
        messages: {
          type: GraphQLList(GraphQLString),
          resolve: () => messages
        }
      }),
    }),
    mutation: new GraphQLObjectType({
      name: 'Mutation',
      fields: {
        addMessage: {
          type: GraphQLList(GraphQLString),
          args: {
            input: {
              type: NewMessageInput
            }
          },
          // FIXME how to specify the typing of `args`
          resolve: (source, args) => {
            const newMessage = args.input.newMessage;
            messages.push(newMessage);
            return messages;
          }
        }
      }
    })
  })
;

export default schema;
