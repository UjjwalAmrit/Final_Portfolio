import { QueryClient, QueryFunction } from "@tanstack/react-query";


const API_BASE_URL = 
  process.env.NODE_ENV === "development" 
    ? "http://localhost:5000" 
    : "https://ujjwalamrit-api.onrender.com"; 

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  path: string, // Changed 'url' parameter to 'path' for clarity
  data?: unknown | undefined,
): Promise<Response> {
  // Construct the full URL using the defined base URL and the relative path
  const fullUrl = `${API_BASE_URL}${path}`;

  const res = await fetch(fullUrl, { // ⬅️ Use fullUrl here
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Similarly, inject the base URL for react-query's default fetcher
    const fullUrl = `${API_BASE_URL}${queryKey.join("/") as string}`;

    const res = await fetch(fullUrl, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});