// employee_detail.jsx
import React from 'react';

const EmployeeDetail = ({ employee }) => {
  if (!employee) return null; // Manejar el caso en que employee sea undefined

  const { name, email, phone, avatar } = employee;
  const defaultAvatar = 'https://b.fssta.com/uploads/application/soccer/headshots/85164.vresize.350.350.medium.28.png'; 
  return (
    <div key={employee._id} className='thumbnail'>
    <img src={avatar || defaultAvatar} onError={(e) => e.target.src = defaultAvatar} />
      <div className='caption'>
        <h4>{name}</h4>
        <ul className='list-group'>
          <li className='list-group-item'> Email: {email}</li>
          <li className='list-group-item'> Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
