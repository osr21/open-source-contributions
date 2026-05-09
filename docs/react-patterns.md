# Common React Patterns

## Component Patterns

### Compound Components
Group related components under a shared parent that manages state.

```jsx
<Select>
  <Select.Option value="a">Option A</Select.Option>
  <Select.Option value="b">Option B</Select.Option>
</Select>
```

### Render Props
Pass a function as a prop to share stateful logic.

```jsx
<Mouse render={({ x, y }) => <Cursor x={x} y={y} />} />
```

### Custom Hooks (preferred over render props)
Extract and share stateful logic without wrapping components.

```js
function useWindowSize() {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return size;
}
```

## State Patterns

### Lifting State Up
When siblings need to share state, lift it to their nearest common parent.

### Context + Reducer (lightweight Redux)
```jsx
const StateContext = createContext();
function StateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <StateContext.Provider value={{ state, dispatch }}>{children}</StateContext.Provider>;
}
```

### Derived State
Compute values from existing state instead of duplicating state.

```js
// Bad — duplicated state
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);

// Good — derived
const [items, setItems] = useState([]);
const count = items.length;
```

## Performance Patterns

| Pattern | Hook/API | Use When |
|---------|----------|---------|
| Skip re-renders | `React.memo` | Child rerenders with same props |
| Cache expensive value | `useMemo` | Heavy computation on every render |
| Stable function reference | `useCallback` | Passing callbacks to memoized children |
| Defer non-urgent updates | `useTransition` | Keeping UI responsive during slow updates |
| Lazy load components | `React.lazy` + `Suspense` | Code splitting by route/feature |

## Data Fetching

Use a library (React Query, SWR) over raw `useEffect` for:
- Automatic caching and deduplication
- Loading/error states out of the box
- Background refetching and stale-while-revalidate
- Optimistic updates

```js
const { data, isLoading, error } = useQuery({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
});
```
