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
    'click .insertContact'(event, instance){
      debugger;
      event.preventDefault();
      // const name =document.querySelectorAll('.new-contact')[0].name.value;
      // const number = document.querySelectorAll('.new-contact')[0].number.value;
      // const tp = document.querySelectorAll('.new-contact')[0].tp.value;

      const name    = instance.find('#name').value;
      const number  = instance.find('#number').value;
      const tp      = instance.find('#tp').value

      Contacts.insert({
        name,
        number,
        tp,
        createdAt: new Date(),
       });
     },
  }
);