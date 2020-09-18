import { Table } from 'antd';
import { GetServerSideProps } from 'next';
import Layout from '../components/layout';
import { NextPageContext } from 'next';
import { getData } from '../../functions/getData';

interface IVehicles {
  id: number;
  brand: string;
  model: string;
  ownerId: number;
}

const vehicles = ({ data }: any) => {
  console.log(data)
  const columns = [data];

  return (
    <>
      <Layout>
        <h1>Vehicles</h1>

        <Table dataSource={data} columns={columns} />
      </Layout>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch('http://localhost:3000/api/vehicles');
//   const data: IVehicles[] = await response.json();
//   return {
//     props: {
//       data,
//     },
//   };
// };

vehicles.getInitialProps = async (context: NextPageContext) => {
  const data = await getData('http://localhost:3000/api/vehicles', context);
  return {
    data,
  };
};

export default vehicles;

// const vehicles = ({ data }: any) => {
//   return (
//     <Layout>
//       <h1>vehicles List</h1>
//       {JSON.stringify(data, null, 2)}
//     </Layout>
//   );
// };
