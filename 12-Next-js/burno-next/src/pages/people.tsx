import { NextPageContext } from 'next';
import { getData } from '../../functions/getData';
import Layout from '../components/layout';

const people = ({ data }: any) => {
  return (
    <Layout>
      <h1>Peoples List</h1>
      {JSON.stringify(data, null, 2)}
    </Layout>
  );
};

people.getInitialProps = async (context: NextPageContext) => {
  const data = await getData('http://localhost:3000/api/people', context);
  return {
    data,
  };
};

export default people;
