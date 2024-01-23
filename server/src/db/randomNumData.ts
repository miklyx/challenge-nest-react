
export const getRandomNumericData = () => {
  let numArray = [];
      for (let i=0; i<20; i++) {
        const data = Math.floor(Math.random() * 10 * i + 1);
        numArray.push({ data });
      }
  return {data: numArray}
    }