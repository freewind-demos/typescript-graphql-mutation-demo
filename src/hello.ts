import {graphql} from 'graphql';
import schema from './schema';

const query = '{ users { name, email, articles { title } } }';

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 4));
});
