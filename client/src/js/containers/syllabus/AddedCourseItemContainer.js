import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-s-alert';

import { removeCourse } from '../../actions/syllabus';
import CourseItem from '../../components/syllabus/CourseItem';

class AddedCourseItemContainer extends React.Component {

  handleRemoveCourse = event => {
    event.preventDefault();
    const { course } = this.props;
    this.props.removeCourse(course._id);
    Alert.success('Course removed from timetable.', {
      position: 'bottom',
      effect: 'jelly',
    });
  }

  render() {
    const { searchTerm, course, byId } = this.props;
    return (
      <CourseItem handleOnClick={this.handleRemoveCourse}
        isAddable = {false}
        searchTerm={searchTerm}
        course={course}
      />
    );
  }
}

const mapDispatchToProps = {
  removeCourse
};

export default connect(null, mapDispatchToProps)(
  AddedCourseItemContainer
);