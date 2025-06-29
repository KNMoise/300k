// API client with authentication
export async function apiClient<T>(url: string, options: RequestInit = {}): Promise<T> {
  const token = localStorage.getItem("token")

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  }

  if (token) {
    headers["Authorization"] = `Bearer ${token}`
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({}))
    throw new Error(error.error || `API error: ${response.status}`)
  }

  return response.json()
}
