//Only executed on the server

import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { Employees } from '../imports/collections/employees';
import _ from 'lodash';
import { faker } from '@faker-js/faker';

async function insertLink({ title, url }) {
  await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // Great place to generate data

  // Check to see if data exists in the collection
  // See if the collection has any records
  const numberRecorrds = Employees.find({}).count();
  if (!numberRecorrds) {
    // Generate some data....
    _.times(5000, () => {
      const name = faker.person.fullName();
      const email = faker.internet.email();
      const phone = faker.phone.number();
      const avatar = faker.image.avatar();

      Employees.insert({
         name:name,
         email:email,
         phone:phone,
         avatar:avatar
      });
    });
  }

  Meteor.publish('employees',function(per_page) {
    return Employees.find({},{limit:per_page});
  });
});
