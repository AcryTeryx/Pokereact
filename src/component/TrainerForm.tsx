interface Props 
{
    getter: string[];
    setter:React.Dispatch<React.SetStateAction<string[]>>;
}

const TrainerForm: React.FC<Props> = ({getter , setter}) => {
  return (<div> hello </div>);
};

export default TrainerForm;