import * as React from 'react';

interface Props {
  getter: string[];
  setter: React.Dispatch<React.SetStateAction<string[]>>;
}

const TrainerForm: React.FC<Props> = () => {
  return (<div> hello </div>);
};

export default TrainerForm;