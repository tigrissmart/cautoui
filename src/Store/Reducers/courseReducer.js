import * as actionTypes from "../Actions/actionTypes";

const initialState = {
 // courses: [],
 courses:
    {
      number:0,
      size :20,
      sort: {
          sorted:false ,
          unsorted: true,
          empty: true
      },
      totalPages: 0,
      totalElements: 0,
      content: []
  },
  course: {},
  currentCourse:{},
  loading: true,
  errors: {},
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_COURSE:
      return {...state, currentCourse: action.payload};
    case actionTypes.FETCH_COURSES_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_COURSES_SUCCESS:
      return { ...state, courses: action.payload,loading: false };
    case actionTypes.FETCH_COURSES_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_COURSE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_COURSE_SUCCESS:
      return { ...state, course: action.payload };
    case actionTypes.FETCH_COURSE_FAILED:
      return { ...state, loading:false, errors: action.payload };
    case actionTypes.NEW_COURSE:
      return { ...state, course: {} };
    case actionTypes.SAVE_COURSE_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_COURSE_SUCCESS:
      return {...state,courses: [...state.courses.content, action.payload],errors: {},loading:false,currentCourse:action.payload};
    case actionTypes.SAVE_COURSE_FAILED:
      return {...state,errors: action.payload.data,loading: false};
    case actionTypes.UPDATE_COURSE_REQUESTED: 
      return {...state,loading: true};
    case actionTypes.UPDATE_COURSE_SUCCESS: {
      const course = action.payload;
      return {
        ...state,
        courses: state.courses.content.map((item) =>
          item.id === course.id ? course : item,
         
        ),
        errors: {},
        loading: false,
        currentCourse:course
      };
    }
    case actionTypes.UPDATE_COURSE_FAILED: 
      return {...state,errors: action.payload,loading: false};

    case actionTypes.DELETE_COURSE_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        courses: state.courses.content.filter((item) => item.id !== id),loading:false,
    }
    }
    case actionTypes.DELETE_COURSE_REQUESTED:
        return {...state,loading:true};
    case actionTypes.DELETE_COURSE_FAILED: 
        return {...state,errors:action.payload,loading:false};

    default:
      return state;
  }
};

export default courseReducer;
