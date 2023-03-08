import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useSWR from "swr";

const Auth = (SpecificComponent, option = true, adminRoute = true) => {
  /*
    option (null/true/false)
    null -> 아무나 출입 가능
    true -> 로그인한 유저만 출입 가능
    false -> 로그인한 유저는 출입 불가능
  */

  function AuthenticationCheck() {
    const navigate = useNavigate();
    const { data } = useSWR(option !== null && `/api/user/auth`);
    useEffect(() => {
      const fetchAuthUser = async () => {
        if (data) {
          if (!data.isAuth) {
            if (option) {
              navigate("/admin/login");
            }
          } else {
            // 로그인 한 상태
            if (adminRoute && !data.isAdmin) {
              navigate("/admin");
            } else {
              if (option === false) {
                navigate("/admin");
              }
            }
          }
        }
      };
      fetchAuthUser();
    }, [data]);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
};

export default Auth;
