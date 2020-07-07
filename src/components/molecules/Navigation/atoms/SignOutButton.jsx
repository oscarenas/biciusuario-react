import React from 'react';

import { withFirebase } from '../../../../utils/Firebase';

const SignOutButton = ({ firebase }) => (
  <>
    <button
      className="signout-btn"
      onClick={firebase ? firebase.doSignOut : () => {}}
    >
      Sign Out
    </button>  
  </>
);

export default withFirebase(SignOutButton);
