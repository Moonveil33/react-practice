import {
  FETCH_POSTS,
  FIRSTNAME,
  LASTNAME,
  EMAIL,
  PHONE,
  BIRTH_DATE,
  GENDER,
  NATIONALITY,
  MARITAL_STATUS,
} from "../actions/user";

// 1. payload standard or convention
// 2. better use snakecase:uppercase for action.type ==> SNAKE_CASE
const userReducer = (user, action) => {
  switch (action.type) {
    case FIRSTNAME: {
      return { ...user, firstName: action.payload };
    }
    case LASTNAME: {
      return { ...user, lastName: action.payload };
    }
    case EMAIL: {
      return { ...user, email: action.payload };
    }
    case PHONE: {
      return { ...user, phone: action.payload };
    }
    case BIRTH_DATE: {
      return { ...user, birthDate: action.payload };
    }
    case GENDER: {
      return { ...user, gender: action.payload };
    }
    case NATIONALITY: {
      return { ...user, nationality: action.payload };
    }
    case MARITAL_STATUS: {
      return { ...user, maritalStatus: action.payload };
    }
    case FETCH_POSTS: {
      return { ...user, posts: action.payload };
    }
    default: {
      return user;
    }
  }
};

export default userReducer;
