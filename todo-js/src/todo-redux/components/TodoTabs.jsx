import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/ui';
import VisibilityFilters from '../maps/VisibilityFilters';

const TodoTabs = props => (
  <div className="tabs-container">
    <div
      className={props.visibilityFilter === VisibilityFilters.ALL ? 'tab-items active' : 'tab-items'}
      onClick={() => props.setVisibilityFilter(VisibilityFilters.ALL)}
    >
      All
    </div>
    <div
      className={props.visibilityFilter === VisibilityFilters.ACTIVE ? 'tab-items active' : 'tab-items'}
      onClick={() => props.setVisibilityFilter(VisibilityFilters.ACTIVE)}
    >
      Active
    </div>
    <div
      className={props.visibilityFilter === VisibilityFilters.COMPLETED ? 'tab-items active' : 'tab-items'}
      onClick={() => props.setVisibilityFilter(VisibilityFilters.COMPLETED)}
    >
      Completed
    </div>
  </div>
);

const mapStateToProps = state => ({
  visibilityFilter: state.ui.visibilityFilter
});

const mapDispatchToProps = {
  setVisibilityFilter
};

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default enhance(TodoTabs);
