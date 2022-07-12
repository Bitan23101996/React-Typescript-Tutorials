import {PersonsProps} from './Persons.Types'

const Persons = ({ name }: PersonsProps) => {
  return (
    <div>
      {name.firstName} {name.lastName}
    </div>
  );
};

export default Persons;
