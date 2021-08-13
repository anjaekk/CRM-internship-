import React from 'react';

// STYLES
import styled from 'styled-components';

function Select({ selectLists, size, onChange }) {
  const { selects } = selectLists;
  return (
    <React.Fragment>
      <SelectEle size={size} onChange={onChange} name={selectLists.title}>
        <OptionEle value="none">===선택===</OptionEle>
        {selects.map(select => {
          const { title, id } = select;
          return (
            <OptionEle key={id} value={id}>
              {title}
            </OptionEle>
          );
        })}
      </SelectEle>
    </React.Fragment>
  );
}

export default Select;

const handleSize = size => {
  switch (size) {
    case 'lg':
      return `1rem`;
    case 'mid':
      return `0.5rem`;
    case 'sm':
      return `0.2rem`;
  }
};

const SelectEle = styled.select`
  ${({ theme }) => theme.flex('center', 'center', null)}
  margin: 0 1rem;
  padding: ${({ size }) => handleSize(size)};
  font-size: 1rem;
`;
const OptionEle = styled.option``;
