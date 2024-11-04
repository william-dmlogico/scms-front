import React from 'react';
import styles from './MenuComponent.module.css';
import MenuItem from './MenuItem';

const menuItems = [
    { id: 1, content: 'Princípios da entidade, Visão, Missão, Valores e Solidez' },
    { id: 2, content: 'História da comunidade' },
    { id: 3, content: 'Sustentabilidade' }
];

const MenuComponent = () => {
    return (
        <nav className={styles.menu}>
            <div className={styles.menuContainer}>
                <MenuItem>{menuItems[0].content}</MenuItem>
                <div className={styles.menuItemContainer}>
                    {menuItems.slice(1).map((item, index) => (
                        <MenuItem
                            key={item.id}
                            className={index === 1 ? styles.menuItemSpaced : ''}
                        >
                            {item.content}
                        </MenuItem>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default MenuComponent;