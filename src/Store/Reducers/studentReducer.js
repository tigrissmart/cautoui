import * as actionTypes from "../Actions/actionTypes";

const initialState = {
 // students: [],
 students:
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
  student: {},
  currentStudent:{},
  loading: true,
  errors: {},
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STUDENT:
      return {...state, currentStudent: action.payload};
    case actionTypes.FETCH_STUDENTS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_STUDENTS_SUCCESS:
      return { ...state, students: action.payload,loading: false };
    case actionTypes.FETCH_STUDENTS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_STUDENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case actionTypes.FETCH_STUDENT_FAILED:
      return { ...state, loading:false, errors: action.payload };
    case actionTypes.NEW_STUDENT:
      return { ...state, student: {} };
    case actionTypes.SAVE_STUDENT_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_STUDENT_SUCCESS:
      return {...state,students: [...state.students.content, action.payload],errors: {},loading:false,currentStudent:action.payload};
    case actionTypes.SAVE_STUDENT_FAILED:
      return {...state,errors: action.payload.data,loading: false};
    case actionTypes.UPDATE_STUDENT_REQUESTED: 
      return {...state,loading: true};
    case actionTypes.UPDATE_STUDENT_SUCCESS: {
      const student = action.payload;
      return {
        ...state,
        students: state.students.content.map((item) =>
          item.id === student.id ? student : item,
         
        ),
        errors: {},
        loading: false,
        currentStudent:student
      };
    }
    case actionTypes.UPDATE_STUDENT_FAILED: 
      return {...state,errors: action.payload,loading: false};

    case actionTypes.DELETE_STUDENT_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        students: state.students.content.filter((item) => item.id !== id),loading:false,
    }
    }
    case actionTypes.DELETE_STUDENT_REQUESTED:
        return {...state,loading:true};
    case actionTypes.DELETE_STUDENT_FAILED: 
        return {...state,errors:action.payload,loading:false};

    default:
      return state;
  }
};

export default studentReducer;
