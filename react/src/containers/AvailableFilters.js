import { connect } from 'react-redux';
import { FilterSelector } from '../components';
import { setFilter } from '../actions';

const mapStateToProps = (state) => {
    let uniqueSources = new Set();
    state.filterState.filters.forEach(filter => uniqueSources.add(filter));
    return {
        filters: Array.from(uniqueSources),
        activeFilter: state.activeFilter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (filter) => {
            dispatch(fetchItems(filter));
            dispatch(setFilter(filter));
        }
    };
};

const AvailableFilters = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterSelector);

export default AvailableFilters;
