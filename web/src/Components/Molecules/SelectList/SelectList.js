import React from 'react';

// ATOMS
import Select from '../../Atoms/Select/Select';

// STYLES
import styled from 'styled-components';

function SelectList({ selectLists }) {
  return (
    <SelectListEle>
      {selectLists.map((selectList, i) => {
        return (
          <Select
            name={selectList.title}
            option={selectList.title}
            size={selectList.size}
            selects={selectList.selects}
          />
        );
      })}
    </SelectListEle>
  );
}

export default SelectList;

const SelectListEle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
