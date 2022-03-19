function Attributes() {
  const user = {
    imgUrl: 'https://wwww.myimage.com',
    name: 'Ahmed',
  };

  return (
    <div>
      <a href={user.imgUrl}>{user.name}</a>
      <br />
      <a href='https://www.homepage.com'>Home Page</a>
    </div>
  );
}

export default Attributes;
