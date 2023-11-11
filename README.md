# What is useCallback?

useCallback is a hook provided by React that returns a memoized callback. It's primarily used for performance optimization in your React components.

# Why Use useCallback?

When you create a function inside a functional component, that function is recreated on every render. This isn't usually a problem, but it can become one if the function is passed as a prop to child components. When the function is recreated, the child components receiving it as a prop will re-render even if their props haven't "changed", because the function is technically a new instance each time.

useCallback can help prevent these unnecessary re-renders by memoizing the function. The memoized function is only recreated if one of its dependencies changes.
