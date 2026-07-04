const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export class ApiError extends Error {
  status: number;
  body: unknown;

  constructor(status: number, body: unknown, message?: string) {
    super(message ?? `API request failed with status ${status}`);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const contentType = res.headers.get("content-type");
  const body = contentType?.includes("application/json") ? await res.json() : await res.text();

  if (!res.ok) {
    throw new ApiError(res.status, body);
  }

  return body as T;
}

export const api = {
  get: <T>(path: string, options?: RequestInit) => apiFetch<T>(path, { ...options, method: "GET" }),
  post: <T>(path: string, data?: unknown, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: "POST", body: data ? JSON.stringify(data) : undefined }),
  put: <T>(path: string, data?: unknown, options?: RequestInit) =>
    apiFetch<T>(path, { ...options, method: "PUT", body: data ? JSON.stringify(data) : undefined }),
  del: <T>(path: string, options?: RequestInit) => apiFetch<T>(path, { ...options, method: "DELETE" }),
};
