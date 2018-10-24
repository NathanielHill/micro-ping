# micro-ping

[![npm version](https://badge.fury.io/js/micro-ping.svg)](https://badge.fury.io/js/micro-ping)
[![Greenkeeper badge](https://badges.greenkeeper.io/NathanielHill/micro-ping.svg)](https://greenkeeper.io/)

Simple utility for testing network latency from [Zeit](https://zeit.co)
[datacenters](https://zeit.co/docs/features/scaling#data-centers)

Can also be imported and used a node module.

## Usage
<details>
<summary>Deployed to Zeit Now</summary>


If you haven't installed `now` already, start by following [these instructions](https://zeit.co/docs/getting-started/installation)

To deploy the service use the following command:

```
now NathanielHill/micro-ping
```

A unique deployment URL will be returned (and copied to the clipboard), now make sure to [scale](https://zeit.co/docs/getting-started/scaling) your deployment to the datacenter you want to test from.

For example, let's test from `bru1`:

```
now scale <deployment-url> all 0 0
now scale <deployment-url> bru1 0 1
```

You may also want to create an alias:

```
now alias <unique-deployment-url> ping.<your-domain.com>
```

Now, test away:

```
$ curl "<deployment-url>/?host=example.com&n=100"
{"host":"example.com","n":"100","avg":"75.550","stddev":"0.317"}
```

</details>

<details>
<summary>As a node module</summary>


Can also be used as a node module in your own project.

To install:

```
yarn add micro-ping
```
or
```
npm install --save micro-ping
```

The default export takes an optional config object and runs the microservice. Usage will look something like this:

```
const microPing = require('micro-ping')

microPing({ port: 80, log = true, n = 10 })
```

</details>

## Author

- Nathaniel Hill ([@NathanielHill](https://github.com/NathanielHill))
