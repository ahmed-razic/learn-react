function SubmitForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Submitted');
      }}
    >
      <button>Submit</button>
    </form>
  );
}
export default SubmitForm;
