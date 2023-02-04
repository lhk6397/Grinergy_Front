import Auth from "../../hoc/authHOC";
import Layout from "./Layout";
import UserIndex from "./user/UserIndex";
import UserCreate from "./user/UserCreate";
import PostIndex from "./post/PostIndex";
import PostCreate from "./post/PostCreate";
import PostUpdate from "./post/PostUpdate";
import AdminLogin from "./AdminLogin";
import AdminRegister from "./AdminRegister";

// const AuthUserIndex = Auth(UserIndex);
// const AuthUserCreate = Auth(UserCreate);
// const AuthPostIndex = Auth(PostIndex);
// const AuthPostCreate = Auth(PostCreate);
// const AuthPostUpdate = Auth(PostUpdate);
const AuthLayout = Auth(Layout);
const AuthAdminLogin = Auth(AdminLogin, false, false);
const AuthAdminRegister = Auth(AdminRegister, false, false);

export {
  UserIndex,
  UserCreate,
  PostIndex,
  PostCreate,
  PostUpdate,
  AuthAdminLogin,
  AuthAdminRegister,
  AuthLayout,
};
