import React from 'react';
import { useState } from 'react';
import styles from "./Filter.module.css";

const options = [
    { name: "matches", id: 0},
    { name: "all", id: 1},
];

const Filter = ({handleItemClick}) => {
    const [activeItem, setActiveItem] = useState(1);

    const onFilterClick = (id, name) => {
        setActiveItem(id);
        handleItemClick(name, id);
    }

    return (
        <div className={styles.filter}>
            {options.map(option => (
                <div 
                    key={option.id} 
                    className={ `${styles.option} ${option.id === activeItem ? styles.active : "" }`}
                    onClick={() => onFilterClick(option.id, option.name)}
                >{option.name}
                </div>
            ))}
        </div>
    )
}

export default Filter;