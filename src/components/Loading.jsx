import { useJsonFetch } from "../hooks/useJsonFetch";

export const Loading = () => {
  const { data, loading, error } = useJsonFetch(
    import.meta.env.VITE_LOADING_URL,
    []
  );
  return (
    <div>
      <h1>Loading data</h1>
      {loading ? <p>Loading...</p> : <p>{data.status}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
