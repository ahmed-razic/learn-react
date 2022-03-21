function List() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const double = numbers.map((number) => {
    return number * 2;
  });
  console.log(double);

  return <div>List</div>;
}
export default List;
