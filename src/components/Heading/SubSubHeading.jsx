import { useContext } from 'react';
import { TitleContext } from '../Context/TitleContext';

function SubSubHeading() {
  const title = useContext(TitleContext);
  return (
    <>
      <h1 className="text-lg my-6">
        <span className="text-purple-500">Inside SubSubHeading Component:</span>{' '}
        {title}
      </h1>
    </>
  );
}
export default SubSubHeading;
