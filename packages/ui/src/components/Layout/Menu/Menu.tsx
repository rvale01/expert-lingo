import { Menu as MenuAnt } from "antd";
import { useState } from 'react';
import "./Menu.css";

/**
 * Props for the Menu component.
 */
export interface MenuProps {
  /**
   * Array of items for the menu.
   */
  items: Array<{
    /**
     * The key of the menu item.
     */
    key: string;
    /**
     * The label of the menu item.
     */
    label: string;
  }>;
}

/**
  * Horizontal menu shown in every page. 
*/
const Menu = ({items}: MenuProps) => {
  const [current, setCurrent] = useState('home');

  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  return <MenuAnt 
    style={{justifyContent: 'end'}}
    onClick={onClick} 
    selectedKeys={[current]} 
    mode="horizontal" 
    items={items} 
  />;
};

export default Menu;