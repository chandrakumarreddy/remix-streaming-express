import { defer } from "@remix-run/node";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export const loader = async () => {
  return defer({
    data: fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    ),
  });
};

export default function Index() {
  const { data } = useLoaderData();
  return (
    <section>
      <h1>Hello world</h1>
      <Suspense fallback={<h1>Loading..</h1>}>
        <Await resolve={data}>{(data) => <p>{JSON.stringify(data)}</p>}</Await>
      </Suspense>
    </section>
  );
}
