import { TitleContext } from '../Context/TitleContext';
import SubHeading from './SubHeading';
import SubSubHeading from './SubSubHeading';

function Heading() {
  const title = 'Title received via contextAPI';
  return (
    <>
      <h1 className="text-3xl font-bold my-6">
        Sending a title using Context API to get it anywhere in the Heading
        Component Tree
      </h1>
      <TitleContext.Provider value={title}>
        <SubHeading />
        <SubSubHeading />
      </TitleContext.Provider>
    </>
  );
}
export default Heading;
