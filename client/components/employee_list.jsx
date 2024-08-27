import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends Component {
  componentDidMount() {
    this.page = 1;
  }

  handleButtonClick = () => {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    console.log('Data', this.props.employees);
    return (
      <div>
        <h1 className="title">Lista de Empleados</h1>
        <div className='employee-list'>
          {this.props.employees.map((employee) => (
            <EmployeeDetail key={employee._id} employee={employee} />
          ))}
        </div>
        <button 
          onClick={this.handleButtonClick} 
          className="btn btn-primary load-more-btn">
          Load More....
        </button>
      </div>
    );
  }
}

export default withTracker(() => {
  const handle = Meteor.subscribe('employees', PER_PAGE);

  return { employees: Employees.find({}).fetch() };
})(EmployeeList);
