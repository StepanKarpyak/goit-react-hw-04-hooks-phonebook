import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
  align-items: flex-start;
  width: 330px;
  border: 2px solid #949090;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-flow: column wrap;
  font-weight: 500;
  font-size: 18px;
  height: 50px;
  margin: 15px;
  margin-bottom: 0;
`;

export const ButtonForm = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 15px;
  border-radius: 4px;
  background-color: rgb(0, 162, 255);
  color: #e9e5e5;
  border: none;
  font-weight: 600;
  cursor: pointer;
  padding: 5px;
`;

export const InputForm = styled(Field)`
  border: 1px solid #9bd5f7;
  margin-top: 5px;

`;

export const ErrorText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: red;
  /* padding-left: 15px; */
`;