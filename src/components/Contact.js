import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AppContext } from './Wrapper';

function Contact() {
  const {theme} = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {
    window.open(
      `mailto:raj612r@gmail.com?subject=${'[Rajkumar-Blog]: ' +
      subject}&body=${encodeURIComponent('Hi Rajkumar, I am ' +
      name + '\n\n' + message + '\n\nRegards,\n' + name)}`);
  };

  const onChange = (e) => {
    switch(e.target.name) {
      case 'message':
        setMessage(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'subject':
        setSubject(e.target.value);
        break;
    }
  };

  return (
    <div id="contact" className='mt-4'>
        <h2 className='heading'>Contact me</h2>
        <Form autoComplete='off'>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Please enter your name</Form.Label>
            <Form.Control type="text" placeholder="Name" name='name' onChange={onChange} value={name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChange} value={email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="subject">
            <Form.Label>Please enter your subject</Form.Label>
            <Form.Control type="text" placeholder="Subject" name='subject' onChange={onChange} value={subject} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Please enter your message</Form.Label>
            <Form.Control type="text" placeholder="Message" name='message' onChange={onChange} value={message} />
          </Form.Group>

          <Button variant={theme === 'light' ? "outline-dark" : "outline-light"} onClick={submitForm}>
            Submit
          </Button>
        </Form>
    </div>
  );
}

export default Contact;
