import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResetPasswordAgrotech: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const token = location.search.replace('?token=', '');

    window.location.href = `appagrotech://appagrotech.com/resetpassword/${token}`;
  }, [location]);

  return <div />;
};

export default ResetPasswordAgrotech;
