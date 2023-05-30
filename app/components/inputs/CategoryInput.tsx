import { IconType } from 'react-icons';
interface CategoryInputProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  icon: Icon,
  label,
  selected,
  onClick,
}) => {
  const isSelected = selected ? 'border-black' : 'border-neutral-200';
  return (
    <>
      <div
        onClick={() => {
          onClick(label);
        }}
        className={`${isSelected} flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black`}>
        <Icon size={30} />
      </div>
    </>
  );
};

export default CategoryInput;
