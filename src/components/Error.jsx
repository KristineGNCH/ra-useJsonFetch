import { useJsonFetch } from "../hooks/useJsonFetch";

export const Error = () => {
  const { data, loading, error } = useJsonFetch(
    import.meta.env.VITE_ERROR_URL,
    []
  );
  return (
    <div>
      <h1>Error</h1>
      {loading ? <p>Loading...</p> : <p>{data.status}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};
