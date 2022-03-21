import { useState } from 'react';
import Warning from './Warning';

function Page() {
  const [showWarning, setShowWarning] = useState(true);

  const handleToggleClick = () => {
    setShowWarning((prevState) => !prevState);
    console.log(showWarning);
  };

  return (
    <div>
      <Warning warn={showWarning} />
      <button onClick={handleToggleClick}>
        {showWarning ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
export default Page;
