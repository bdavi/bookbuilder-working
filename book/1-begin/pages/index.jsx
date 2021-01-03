import Head from 'next/head';
import Button from '@material-ui/core/Button';

const Index = () => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Index Page</title>
      <meta name="description" content="The description goes here" />
    </Head>

    <p>Content on Index page</p>

    <Button variant="contained">MUI Button</Button>
  </div>
);

export default Index;
