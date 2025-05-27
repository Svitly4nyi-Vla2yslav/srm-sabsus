import { useState } from 'react';
import { supabase } from '../../supabaseClient';
import {
  FormContainer,
  Success,
  FormGroup,
  Input,
  Textarea,
  Button,
} from './ContactForm.styled';

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    if (!fullName || !email || !validateEmail(email)) {
      setError('Please fill out the required fields correctly.');
      return;
    }

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          full_name: fullName,
          email: email,
          subject: subject,
          message: message,
          created_at: new Date(),
        },
      ]);

      if (error) throw error;

      setSuccess(true);
      setFullName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setError(null);
      setSubmitted(false);
    } catch (error) {
      setError('Something went wrong. Please try again later.');
      setSuccess(false);
    }
  };

  return (
    <FormContainer>
      {success && <Success>Your message has been sent successfully!</Success>}
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            placeholder="Full Name (required)"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            hasError={submitted && !fullName}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Email (required)"
            value={email}
            onChange={e => setEmail(e.target.value)}
            hasError={submitted && (!email || !validateEmail(email))}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Textarea
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Send a Message</Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
