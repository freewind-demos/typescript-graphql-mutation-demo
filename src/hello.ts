import {graphql} from 'graphql';
import schema from './schema';

const query = `
mutation {
  addMessage(input: { newMessage: "new-message"})
}
`;

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 4));
});
