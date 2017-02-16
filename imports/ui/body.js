import './body.html';
import { Contacts } from '../api/contacts';
import { Template } from 'meteor/templating';

Template.body.helpers({
  contacts () {
    return  Contacts.find({});
  }
});
Template.body.events(
  {
    'click .enviamanolo'(event){
      debugger;
      event.preventDefault();
      const name =document.querySelectorAll('.new-contact')[0].name.value;
      const numero = document.querySelectorAll('.new-contact')[0].number.value;
      const tp = document.querySelectorAll('.new-contact')[0].tp.value;

    },
  }
);