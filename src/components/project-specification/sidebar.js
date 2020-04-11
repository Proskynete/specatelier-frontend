import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLocalStorage } from '@Helpers/localstorage.helper';
import getEndPoint from '@Configurations/config';
import { onSelectMenu } from '@Actions/project-specification.actions';
import SidebarProducts from '../../components/project-specification/sidebar-products';
import SidebarProductsItems from '../../components/project-specification/sidebar-products-items';
import SidebarIndex from '../../components/project-specification/sidebar-index';

const Sidebar = props => {

  const [currentlyActive, ItemClickHandler] = useState('index');
  const [items, getItems] = useState(false);
  const dispatch = useDispatch();

  const SectionClickHandler = type => {
    const endpoint = getEndPoint({ service: `sections/${type}/items` });
    fetch(`${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getLocalStorage('token')}`,
      },
    }).then(res => res.json()).then(response => {
      getItems(response);
      ItemClickHandler(false);
    })
  }

  const item = type => (
    <div key={type} className="sidebar__item" onClick={() => {
      getItems(false)
      ItemClickHandler(type)
      dispatch(onSelectMenu({ menu: type }));
    }}>
      <span className={`sidebar__item--icon ${type} ${currentlyActive == type ? 'active' : ''}`} />
    </div>
  )

  return (
    <>
      <div className="sidebar"> {['products', 'index', 'config'].map(type => item(type))} </div>
      {currentlyActive == 'products' && <SidebarProducts itemClick={SectionClickHandler} />}
      {currentlyActive == 'index' && <SidebarIndex section={items.section} items={items.items} />}
      {items && <SidebarProductsItems section={items.section} items={items.items} />}
    </>
  );
};

export default Sidebar;
