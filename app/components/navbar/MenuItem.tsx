'use client';

import styled from 'styled-components';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <>
      <Menu onClick={onClick}>{label}</Menu>
    </>
  );
};

export default MenuItem;

const Menu = styled.div`
  transition: 0.1s;
  padding: 0.75rem 1rem;
  font-weight: 600;

  &:hover {
    background-color: rgb(245, 245, 245);
  }
`;
