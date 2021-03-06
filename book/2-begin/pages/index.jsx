import Head from 'next/head';
import PropTypes from 'prop-types';

const propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
  }),
};

const defaultProps = {
  user: null,
};

const Index = ({ user }) => (
  <div style={{ padding: '10px 45px' }}>
    <Head>
      <title>Dashboard</title>
      <meta name="description" content="This is SEO description of Index page" />
    </Head>

    <p>Content on Index page</p>

    <p>Email: {user.email}</p>
  </div>
);

Index.propTypes = propTypes;
Index.defaultProps = defaultProps;
Index.getInitialProps = async (ctx) => ({ user: ctx.query.user });

export default Index;
