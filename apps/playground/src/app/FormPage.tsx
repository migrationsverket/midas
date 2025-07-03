import { Button, TextField, TextArea, DatePicker } from '@midas-ds/components';
import { Form } from 'react-aria-components';
import { useState } from 'react';
import { parseDate, CalendarDate, DateValue } from '@internationalized/date';
import { toastQueue } from '@midas-ds/components';

function FormPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [favoriteDate, setFavoriteDate] = useState<CalendarDate | null>(parseDate('1999-05-29'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      message,
      favoriteDate: favoriteDate ? favoriteDate.toString() : null,
    };
    toastQueue.add({
      message: JSON.stringify(formData, null, 2),
      type: 'info',
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Form Page</h1>
      <Form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <TextField label="Name" name="name" value={name} onChange={setName} isRequired description="This field is required." />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <TextArea label="Message" name="message" value={message} onChange={setMessage} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <DatePicker label="Favorite Date" value={favoriteDate} onChange={setFavoriteDate as (value: DateValue | null) => void} />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default FormPage;