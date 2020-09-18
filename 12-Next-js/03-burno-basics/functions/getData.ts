import { NextPageContext } from 'next';
import Router from 'next/router';

export const getData = async (url: string, context: NextPageContext) => {
  const cookie = context.req?.headers.cookie;

  const res = await fetch(url, {
    headers: {
      cookie: cookie!,
    },
  });

  if (res.status === 401 && !context.req) {
    Router.replace('/login');
    return {};
  }

  if (res.status === 401 && context.req) {
    context.res?.writeHead(302, {
      Location: '/login',
    });
    context.res?.end();
    return {};
  }

  const data = await res.json();
  console.log(data);
  return data;
};
