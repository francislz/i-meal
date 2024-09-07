import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import './index.css';

interface ISelectProps {
  items: string[];
  label: string;
  isMultiselect?: boolean;
  menuIcon: IconDefinition;
  onChange?: (selectedItems: string[]) => void;
}

export function Select({ items, label, isMultiselect, menuIcon, onChange }: ISelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const onItemClick = (e: React.MouseEvent<HTMLElement>, item: string) => {
    e.preventDefault();
    let newSelectedItems: string[];
    if (isMultiselect) {
      if (selectedItems.includes(item)) {
        newSelectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
      } else {
        newSelectedItems = [...selectedItems, item];
      }
    } else {
      newSelectedItems = [item];
    }
    setSelectedItems(newSelectedItems);
    if (onChange) {
      onChange(newSelectedItems);
    }
  }

  return (
    <div>
      <div className='select-container' onClick={() => setOpen(!open)}>
        <div className='select-icon'>
          <FontAwesomeIcon icon={menuIcon} />
        </div>
        <div className='select-button'>
          {label} 
        </div>
        <div className='select-icon'>
          <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
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

