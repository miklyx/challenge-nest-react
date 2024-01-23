
export const getRandomNumericData = () => {
  let numArray = [];
      for (let i=1; i<21; i++) {
        const data = Math.floor(Math.random() * 50) + 2;
        numArray.push({ data });
      }
  return {data: numArray}
    }