declare namespace JSX {
  interface IntrinsicAttributes {
    key?: string | number;
  }

  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare module 'react' {
  export type ReactNode = any;
  export const StrictMode: any;
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function useState<T>(initial: T): [T, (value: T | ((previous: T) => T)) => void];
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom/client' {
  export function createRoot(element: Element): { render: (node: any) => void };
}
