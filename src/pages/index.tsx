import { GetServerSideProps } from 'next';

export default function Index() {
  return <span>Teste</span>;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
