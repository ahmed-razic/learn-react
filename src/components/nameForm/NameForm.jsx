import { useReact } from 'react';

function NameForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    alert('Entered name is: ' + value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name:
        <input
          type='text'
          name='name'
          id='name'
          value={value}
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
}

export default NameForm;
