interface FetcherParams {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: unknown;
  params: string;
}

export const fetcher = async (fetcherOptions: FetcherParams) => {
  const options: RequestInit = {
    method: fetcherOptions.method,
    body: JSON.stringify(fetcherOptions.body),
  };

  const res = await fetch(
    `https://jsonplaceholder.typicode.com${fetcherOptions.params}`,
    options
  );
  const data = await res.json();

  return data;
};
