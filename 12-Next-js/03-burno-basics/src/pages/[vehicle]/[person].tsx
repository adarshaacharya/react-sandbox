import { NextPageContext } from 'next';
import { IVehicles } from '../../../types/VehiclePerson';
import Layout from '../../components/layout';

export interface PersonProps {
  data?: IVehicles[];
}

const Person = ({ data }: PersonProps) => {
  return (
    <Layout>
      <h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </h1>
    </Layout>
  );
};

export default Person;

// if we have to do ssr then use get serverside props else use useRouter() hooks
export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;

  const response = await fetch(
    `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
  );
  const data = await response.json();
  return { props: { data } };
};
