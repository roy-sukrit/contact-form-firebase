import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 0rem 0;
`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  margin: 20px 20px;
  padding-left:20px;
  max-width: 520px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;


export const Input = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`;

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 8px;
  padding: 1rem 1.25rem;
  resize: none;
  font-size: 0.875rem;
  height: 185px;
  transition: border-color 0.3s ease-in;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`;
