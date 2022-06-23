import React from 'react';
import { PersonName } from './PersonName';

type Props = {
  person: Child,
};

export const PersonRow: React.FC<Props> = ({ person }) => {
  return (
    <tr key={person.slug} className="Person">
      <td>
        <PersonName person={person} />
      </td>
      <td>
        {person.sex}
      </td>
      <td>
        {person.born}
      </td>
      <td>
        {person.died}
      </td>
      <td>
        {person.mother
          ? <PersonName person={person} />
          : (
            <p style={{ color: 'black', fontSize: 'bold' }}>
              {person.motherName}
            </p>
          )}
      </td>
      <td>
        {person.father
          ? <PersonName person={person} />
          : (
            <p style={{ color: 'black', fontSize: 'bold' }}>
              {person.fatherName}
            </p>
          )}
      </td>
    </tr>
  );
};