import styled from 'styled-components'
// Стилізовані компоненти
export const FormContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 46px;
`

export const FormGroup = styled.div`
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  font-family: var(--third-family);
  font-weight: 600;
  font-size: 16px;
  color: rgb(250, 250, 250);
  width: 100%;
  padding: 13px 20px;
  margin: 5px 0;
  border-radius: 4px;
  background: #0c0c0c;
  border: 1px solid ${props => (props.hasError ? '#ff4d4f' : 'transparent')};
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${props => (props.hasError ? '#ff4d4f' : '#1890ff')};
  }
`;

export const Textarea = styled.textarea`
font-family: var(--third-family);
font-weight: 600;
font-size: 16px;
color:rgb(255, 255, 255);
  width: 100%;
  padding: 20px;
  margin: 5px 0;
  border: none;
  height: 100px;
  background: #0d0d0d;
   resize: none;
   overflow-y: auto; 
`;

export const Button = styled.button`
 width: 100%;
  padding: 10px 20px;
background: #fff;
font-family: var(--third-family);
font-weight: 600;
font-size: 16px;
color: #000;
border: none;
  cursor: pointer;

   &:hover {
    color: #808080;
    background: #0d0d0d;
  }
`

export const Error = styled.p`
  color: red;
`

export const Success = styled.p`
  color: green;
`