interface ShowProps<T> {
  fallback?: JSX.Element | null;
  when: T;
  children: JSX.Element | ((item: T) => JSX.Element);
}

export function Show<T>(props: ShowProps<T>) {
  return props.when
    ? typeof props.children === "function"
      ? props.children(props.when)
      : props.children
    : (props.fallback ?? null);
}
