import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import { App } from '/imports/ui/App';

// After Meteor loads in the browser, render my app to the DOM.

Meteor.startup(() => {
  // React render call
  const container = document.getElementById('container');
  const root = createRoot(container);
  root.render(<App />);
});
