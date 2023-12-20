import { Card } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../..';

const Bio = () => {
  const { user } = useContext(Context);
  return (
    <Card className="card-bio">
      <h5>Bio</h5>
      <hr />
      <div>
        <ul>
          <li className="copy">
            <div>
              <img src="/img/profile/number.png" alt="number" />
              <p>+375 (29) 000-00-00</p>
            </div>
            <img src="/img/profile/copy.png" />
          </li>
          <li className="copy">
            <div>
              <img src="/img/profile/email.png" alt="email" />
              <p>{user.user.email}</p>
            </div>
            <img src="/img/profile/copy.png" />
          </li>
          <li>
            <img src="/img/profile/location.png" alt="point" />
            <p>Belarus, Gomel</p>
          </li>
          <li>
            <img src="/img/profile/hb.png" alt="hb" />
            <p>December 24</p>
          </li>
        </ul>
      </div>
    </Card>
  );
};
export default Bio;
