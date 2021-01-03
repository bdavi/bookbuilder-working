import Link from 'next/link';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { styleToolbar } from './SharedStyles';

const Header = () => {
  return (
    <div>
      <Toolbar style={styleToolbar}>
        <Grid container direction="row" justify="space-around" align="center">
          <Link href="/login">
            <a style={{ margin: '0 20px 0 auto' }}>Login</a>
          </Link>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Header;
