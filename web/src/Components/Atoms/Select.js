import React from 'react';

// STYLES
import styled from 'styled-components';

function Select({ selectLists, size, onChange }) {
  const { selects } = selectLists;
  return (
    <React.Fragment>
      <SelectElement size={size} onChange={onChange} name={selectLists.title}>
        <OptionElement value="none">===선택===</OptionElement>
        {selects.map(select => {
          const { title, id } = select;
          return (
            <OptionElement key={id} value={id}>
              {title}
            </OptionElement>
          );
        })}
      </SelectElement>
    </React.Fragment>
  );
}

export default Select;

const handleSize = size => {
  switch (size) {
    case 'lg':
      return `1rem`;
    case 'mid':
      return `0.4rem`;
    case 'sm':
      return `0.2rem`;
  }
};

const SelectElement = styled.select`
  ${({ theme }) => theme.flex('center', 'center', null)}
  margin: 0 1rem;
  padding: ${({ size }) => handleSize(size)};
  font-size: 1rem;
`;
const OptionElement = styled.option``;
