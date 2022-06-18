import type { MetaFunction, LoaderFunction } from 'remix';
import { useLoaderData, json, Link } from 'remix';

type IndexData = {
  resources: Array<{ name: string; url: string }>;
  // demos: Array<{ name: string; to: string }>;
};

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export let loader: LoaderFunction = () => {
  let data: IndexData = {
    resources: [
      {
        name: 'Spotify',
        url: 'https://open.spotify.com/show/22QW65J5GAFLUwcAGZDPdT',
      },
      {
        name: 'Anchor.fm',
        url: 'https://anchor.fm/fedbites',
      },
      {
        name: 'Medium',
        url: 'https://medium.com/fedbites',
      },
      {
        name: 'Dev.to',
        url: 'https://dev.to/fedbites',
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/fedbites',
      },
    ],
    // demos: [
    //   {
    //     to: 'demos/actions',
    //     name: 'Actions',
    //   },
    //   {
    //     to: 'demos/about',
    //     name: 'Nested Routes, CSS loading/unloading',
    //   },
    //   {
    //     to: 'demos/params',
    //     name: 'URL Params and Error Boundaries',
    //   },
    // ],
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  };
};

// https://remix.run/guides/routing#index-routes
export default function Index() {
  let data = useLoaderData<IndexData>();

  return (
    <div className="remix__page">
      <main>
        <h2 className="text-3xl">Welcome to Fedbites!</h2>
        <p className="mt-6">We're stoked that you're here. 🥳</p>
        <p>
          We're still in the early stages of development, so please be patient.
        </p>
      </main>
      <aside>
        <h2 className="underline">Resources</h2>
        <ul className="mt-4">
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url} target="_blank">
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
