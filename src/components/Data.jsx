import { useJsonFetch } from "../hooks/useJsonFetch";

export const Data = () => {
  const { data, loading, error } = useJsonFetch(
    import.meta.env.VITE_DATA_URL,
    []
  );
  return (
    <div>
      <h1>Receiving data</h1>
      {loading ? <p>Loading...</p> : <p>{data.status}</p>}
      {error && {error}}
    </div>
  );
};
