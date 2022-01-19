import * as actionTypes from "../Actions/actionTypes";

const initialState = {
 // teachers: [],
 teachers:
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
  teacher: {},
  currentTeacher:{},
  loading: true,
  errors: {},
};

const teacherReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TEACHER:
      return {...state, currentTeacher: action.payload};
    case actionTypes.FETCH_TEACHERS_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_TEACHERS_SUCCESS:
      return { ...state, teachers: action.payload,loading: false };
    case actionTypes.FETCH_TEACHERS_FAILED:
      return { ...state, loading: false, errors: action.payload };
    case actionTypes.FETCH_TEACHER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.FETCH_TEACHER_SUCCESS:
      return { ...state, teacher: action.payload };
    case actionTypes.FETCH_TEACHER_FAILED:
      return { ...state, loading:false, errors: action.payload };
    case actionTypes.NEW_TEACHER:
      return { ...state, teacher: {} };
    case actionTypes.SAVE_TEACHER_REQUESTED:
      return { ...state, loading: true };
    case actionTypes.SAVE_TEACHER_SUCCESS:
      return {...state,teachers: [...state.teachers.content, action.payload],errors: {},loading:false,currentTeacher:action.payload};
    case actionTypes.SAVE_TEACHER_FAILED:
      return {...state,errors: action.payload.data,loading: false};
    case actionTypes.UPDATE_TEACHER_REQUESTED: 
      return {...state,loading: true};
    case actionTypes.UPDATE_TEACHER_SUCCESS: {
      const teacher = action.payload;
      return {
        ...state,
        teachers: state.teachers.content.map((item) =>
          item.id === teacher.id ? teacher : item,
         
        ),
        errors: {},
        loading: false,
        currentTeacher:teacher
      };
    }
    case actionTypes.UPDATE_TEACHER_FAILED: 
      return {...state,errors: action.payload,loading: false};

    case actionTypes.DELETE_TEACHER_SUCCESS: {
      const id = action.payload;
      return {
        ...state,
        teachers: state.teachers.content.filter((item) => item.id !== id),loading:false,
    }
    }
    case actionTypes.DELETE_TEACHER_REQUESTED:
        return {...state,loading:true};
    case actionTypes.DELETE_TEACHER_FAILED: 
        return {...state,errors:action.payload,loading:false};

    default:
      return state;
  }
};

export default teacherReducer;
