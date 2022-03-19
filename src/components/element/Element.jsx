function Element() {
  const name = 'Ahmed Razic';

  return (
    <>
      <div>My name is {name}</div>
      <div>{2 + 2}</div>
      <div>{date()}</div>
    </>
  );
}

function date() {
  const myDate = Date.now();
  return myDate;
}

export default Element;
