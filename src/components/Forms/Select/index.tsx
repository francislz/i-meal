import React from 'react'
import './index.css';

interface ISelectProps {
  items: string[];
  label: string;
  isMultiselect?: boolean;
}

export function Select({ items, label, isMultiselect }: ISelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const onItemClick = (e: React.MouseEvent<HTMLElement>, item: string) => {
    e.preventDefault();
    if (isMultiselect) {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter(i => i !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems([item]);
    }
  }

  return (
    <div>
      <div className='select-container' onClick={() => setOpen(!open)}>
        <div className='select-button'>
          {label} 
        </div>
      </div>
      {open && <div className='select-menu'>
        {items.map((item, index) => (
          <div key={index} className='select-item' onClick={(e) => onItemClick(e, item)}>
            {isMultiselect && <input type='checkbox' checked={selectedItems.includes(item)} readOnly/>}
            {item}
          </div>
        ))}
      </div>}
    </div>
  )
}

