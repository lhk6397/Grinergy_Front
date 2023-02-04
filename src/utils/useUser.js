import useSWR from "swr";

export default function useUser() {
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/user/auth`);

  return data;
}
