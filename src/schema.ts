import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList} from 'graphql';
import {users, User, getArticles, Article} from './data';

const ArticleType = new GraphQLObjectType({
  name: 'Article',
  fields: () => ({
      title: {
        type: GraphQLString,
        resolve: (article: Article) => {
          return article.title;
        }
      },
      content: {
        type: GraphQLString,
        resolve: (article: Article) => {
          return article.content;
        }
      }
    }
  )
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: (user: User) => {
        return user.name;
      },
    },
    email: {
      type: GraphQLString,
      resolve: (user: User) => {
        return user.email;
      }
    },
    articles: {
      type: GraphQLList(ArticleType),
      resolve: (user: User) => {
        return getArticles(user.name);
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: () => ({
      users: {
        type: GraphQLList(UserType),
        resolve: () => users
      }
    }),
  }),
});

export default schema;
