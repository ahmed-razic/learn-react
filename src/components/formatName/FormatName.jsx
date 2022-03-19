function FormatName() {
  const user = {
    name: 'Ahmed',
    age: 46,
  };

  return <div>{ageName(user)}</div>;
}

function ageName(user) {
  return 'Name: ' + user.name + ', Age: ' + user.age;
}

export default FormatName;
