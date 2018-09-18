import { ADDED_ORDER, COURSE_TITLE, COURSE_TIME } from '../data/sortingOptions';
import { CHANGE_COURSES_SORTING_OPTION } from '../actions/types';

const sortingOption = (state = ADDED_ORDER, action) => {
  switch (action.type) {
    case CHANGE_COURSES_SORTING_OPTION:
      return action.payload.sortingOption;
    default:
      return state;
  }
};

export default sortingOption;

export const getSortingOption = state => state;
