# Neurelo SDK

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a [Promises/A+](https://promisesaplus.com/) library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`.

## Prerequisites:

- Download your generated SDK from the API Documentation page of your project & move generated SDK file `neurelo-sdk-x.x.x.tgz` to your project root.
- Tools for configuring environment variables (e.g. [dotenv](https://www.npmjs.com/package/dotenv)) or simply export before starting your dev server (Inline: Not recommended).

## Installation:

- Commit the `.tgz` file along with package.json and package-lock.json changes.
- `npm i ./neurelo-sdk-x.x.x.tgz` | `yarn add ./neurelo-sdk-x.x.x.tgz`
- You might need to configure your `webpack` to resolve npm package. For next.js, you can use `next-transpile-modules` to resolve npm package.
    - Example for `next.js`:
    
    ```tsx
    // File: [next.config.(js|ts)]
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      images: {
        domains: [],
      },
      transpilePackages: ['neurelo-sdk'],
    };
    
    module.exports = nextConfig;
    
    ```
    

## Modifications:

### Modifying API configuration

- To modify `Api Key` you can edit environment variable : `NEURELO_API_KEY`
- To modify `Base Path` you can edit environment variable : `NEURELO_API_BASE_PATH`

### Interceptors for axios (Request and Response)

- To modify axios config, you can create a `neurelo.config.(ts|js)` file in your project's root directory.
- Configuration file should export `AxiosInstance` using `customAxios` variable. If you don't export `AxiosInstance`, packaged SDK will use internal version of `axios`.

> Note: Neurelo SDK will be using internal version of axios if you don't install it or don't export `AxiosInstance` using `customAxios` variable.

- Here is an example:
```tsx
import axios from 'axios';

export const customAxios = axios.create({
  withCredentials: true,
});

customAxios.interceptors.response.use(
  (response) => {
    console.log('response', response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
```


## Getting Started:

- Using SDK in your TypeScript/React project:
  - To see full example application built with `next.js` and `neurelo-sdk`, please visit [Neurelo SDK Example 🔗](https://github.com/neurelo-public/neurelo-sdk-examples/tree/main/typescript/nextjs)
  ---

```tsx
import { GenericError, SafeError } from '@/types/generic';
import { Address, AddressApiService } from 'neurelo-sdk';

const getAddresses = async ({
  search,
}: {
  search: string;
}): Promise<[Address[] | undefined, SafeError | undefined]> => {
  try {
    const res = await AddressApiService.findAddress(undefined, {
      OR: [
        {
          address: {
            contains: search,
          },
        },
        // ...otherConditions
      ],
    });
    return [res.data.data, undefined];
  } catch (error) {
    const err = error as GenericError;
    return [
      undefined,
      { message: err.response.data?.errors?.[0]?.error || 'Encountered generic error' },
    ];
  }
};

export const UpdateAddressForm = async () => {
  const [data, error] = await getAddresses({ search: '1145' });

  // Handle error
  if (error) {
    return <div>{error.message}</div>;
  }

  // Handle success
  if (data) {
    return (
      <div>
        {data.map((address) => (
          <div key={address.address_id}>{address?.postal_code || '--'}</div>
        ))}
      </div>
    );
  }
};
```
