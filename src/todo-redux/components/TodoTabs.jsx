import React from 'react';

import VisibilityFilters from '../maps/VisibilityFilters';

const TodoTabs = props => (
  <div className="tabs-container">
    <div className={props.visibilityFilter === VisibilityFilters.ALL ? 'tab-items active' : 'tab-items'}>All</div>
    <div className={props.visibilityFilter === VisibilityFilters.ACTIVE ? 'tab-items active' : 'tab-items'}>Active</div>
    <div className={props.visibilityFilter === VisibilityFilters.COMPLETED ? 'tab-items active' : 'tab-items'}>
      Completed
    </div>
  </div>
);

export default TodoTabs;
