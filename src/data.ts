export type User = {
  name: string,
  email: string,
}

export type Article = {
  title: string,
  content: string
}

export const users: User[] = [
  {name: 'user1', email: 'email1'},
  {name: 'user2', email: 'email2'},
];

const articles: { [userName: string]: Article[] } = {
  user1: [
    {title: 'article1', content: 'content1'},
    {title: 'article2', content: 'content2'},
  ],
  user2: [
    {title: 'article3', content: 'content3'},
    {title: 'article4', content: 'content4'},
  ]
}

export function getArticles(userName: string): Article[] {
  return articles[userName];
}
