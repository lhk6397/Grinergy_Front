import axios from "axios";
import { useState } from "react";

export default function useMutation(url, config = { withCredentials: true }) {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  async function mutation(data) {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const res = await axios.post(url, data, config);
      setState((prev) => ({ ...prev, data: res.data }));
    } catch (error) {
      setState((prev) => ({ ...prev, error }));
    }
    setState((prev) => ({ ...prev, loading: false }));
  }
  return [mutation, { ...state }];
}
