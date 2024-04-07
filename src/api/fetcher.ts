const isProduction = process.env.NODE_ENV === "production";
const PROD_URL = "https://www.kenglernitas.wtf/api/graphql";
const LOCAL_URL = "http://localhost:4000/graphql";

const endpointUrl = isProduction ? PROD_URL : LOCAL_URL;

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit["headers"],
): ((variables?: TVariables) => Promise<TData>) => {
  return async (variables?: TVariables) => {
    const res = await fetch(endpointUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || {};
      throw new Error(message || "Error...");
    }

    return json.data;
  };
};
