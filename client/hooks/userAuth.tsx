import { useSelector } from "react-redux";

const UserAuth = () => {
  const auth = useSelector((state: any) => state.auth);
  if(auth.user) return true;
  return false;
}

export default UserAuth;