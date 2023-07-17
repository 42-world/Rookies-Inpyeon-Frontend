interface Props {
  path: string;
  method?: string;
  body?: any;
  headers?: any;
}

export async function httpClient({
  path,
  method = "GET",
  body,
  headers,
}: Props) {
  const res = await fetch("http://localhost:8889" + path, {
    method: method,
    body,
    headers: { ...headers, "Content-Type": "application/json;charset=utf-8" },
    credentials: "include",
  });
  if (!(res.status >= 200 && res.status < 400)) {
    console.log(res);
    return null;
  }

  const text = await res.text();
  if (!text) return;
  return JSON.parse(text);
}
