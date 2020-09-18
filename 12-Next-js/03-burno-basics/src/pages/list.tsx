import Link from 'next/link';
import { IVehicles } from '../../types/VehiclePerson';
import Layout from '../components/layout';

const vehicleCard = {
  padding: '1rem',
  margin: '3rem',
  boxShadow: '-1px 0px 5px 1px rgba(0,0,0,0.75)',
  display: 'flex',
  cursor: 'pointer',
  color: 'purple',
};

export interface ListProps {
  data?: IVehicles[];
}

export default function List({ data }: ListProps) {
  return (
    <Layout>
      {data?.map((owner) => (
        <Link
          as={`/${owner.vehicle}/${owner.ownerName}`}
          href="/[vehicle]/[person]"
        >
          <a>
            <pre style={vehicleCard}>{JSON.stringify(owner, null, 2)}</pre>
          </a>
        </Link>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4001/vehicles');
  const data: IVehicles[] | undefined = await response.json();
  return { props: { data } };
}
