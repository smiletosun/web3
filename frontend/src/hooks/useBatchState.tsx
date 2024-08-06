import { useReducer } from "react";

export function useBatchState<S>(initialState: S) {
  const [state, dispatch] = useReducer((state: S, action: Partial<S>) => {
    return { ...state, ...action };
  }, initialState);

  return [state, dispatch] as const;
}
