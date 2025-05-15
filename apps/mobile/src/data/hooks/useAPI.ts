import { useCallback } from "react";

const URL_BASE = "http://localhost:3001" || 'http://192.168.12.6:3001'; // process.env.URL_BASE

export default function useAPI() {
  const httpGet = useCallback(async function (uri: string): Promise<any> {
    try {
      const res = await fetch(`${URL_BASE}/${uri}`);
      const data = await res.json();
      console.log("RES", res);
      console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const httpPost = useCallback(async function (
    uri: string,
    body: any
  ): Promise<any> {
    await fetch(`${URL_BASE}/${uri}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }, []);

  return { httpGet, httpPost };
}
