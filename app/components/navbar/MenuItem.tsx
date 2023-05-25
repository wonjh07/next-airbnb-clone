'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="hober:bg-neutral-100 trasition px-4 py-3 font-semibold">
        {label}
      </div>
    </>
  );
};

export default MenuItem;
