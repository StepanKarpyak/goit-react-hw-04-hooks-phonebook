import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { FormContainer, LabelForm, ButtonForm, InputForm, ErrorText } from './ContactForm.styled';

function ContactForm({ onSubmit }) {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  }

  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.string().required(),
  });

  return (
    <>
      <Formik initialValues={{ name: '', number: '' }}
        validationSchema={schema} onSubmit={handleSubmit} >

        <FormContainer autoComplete="off" >

        <LabelForm>
          Name
          <InputForm type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required placeholder='A-я A-z'/>
            <ErrorMessage name="name" render={message => <ErrorText>{message}</ErrorText>} />
          </LabelForm>
          
        <LabelForm>
          Number
          <InputForm type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required placeholder='+380000000000'/>
            <ErrorMessage name="number" render={message => <ErrorText>{message}</ErrorText>} />
        </LabelForm>
        
          <ButtonForm type='submit'>Add contact</ButtonForm>
          
        </FormContainer>
        
      </Formik>
    </>
  );
}

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};