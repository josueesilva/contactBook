import './body.html';
import { Contacts } from '../api/contacts';
import { Template } from 'meteor/templating';

Template.body.helpers({
  contacts () {
    return  Contacts.find({});
  }
});