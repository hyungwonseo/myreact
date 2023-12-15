export function Test1() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  //console.log(makeArray(array, 12));
  const result = makeArray(array, 12);
  function makeArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i = i + size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <>
      <h1>테스트</h1>
      {result?.map((a) => (
        <>
          <Comp array={a} />
          <hr />
        </>
      ))}
    </>
  );
}

function Comp({ array }) {
  return (
    <>
      {array?.map((a) => (
        <p>{a}</p>
      ))}
    </>
  );
}
