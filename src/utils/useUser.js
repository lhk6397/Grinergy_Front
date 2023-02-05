import useSWR from "swr";

export default function useUser() {
  const { data } = useSWR(`/api/user/auth`);

  return data;
}
