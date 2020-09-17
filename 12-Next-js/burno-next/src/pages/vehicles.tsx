import { Table } from 'antd';
import { GetServerSideProps } from 'next';
import Layout from '../components/layout';

interface IVehicles {
  id: number;
  brand: string;
  model: string;
  ownerId: number;
}

const columns = [
  {
    title: 'Brand',
    dataIndex: 'brand',
    key: 'brand',
  },
  {
    title: 'Model',
    dataIndex: 'model',
    key: 'model',
  },
  {
    title: 'OwnerId',
    dataIndex: 'ownerId',
    key: 'ownerId',
  },
];

const vehicles = ({ data }: { data: IVehicles[] }) => {
  return (
    <>
      <Layout>
        <h1>Vehicles</h1>

        <Table dataSource={data} columns={columns} />
      </Layout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/vehicles');
  const data: IVehicles[] = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default vehicles;
