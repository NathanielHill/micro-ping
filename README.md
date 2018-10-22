# micro-ping

Simple utility for testing network latency from Zeit datacenters

## Usage

Install:

```
now NathanielHill/micro-ping
```

A unique deployment URL will be returned (and copied to the clipboard), now make sure to [scale](https://zeit.co/docs/getting-started/scaling) your deployment to the datacenter you want to test from.

For example, let's test from `bru1`:

```
now scale <deployment-url> all 0 0
now scale <deployment-url> bru1 0 1
```

Now, test away:

```
$ curl "<deployment-url>/?host=example.com&n=100"
{"host":"example.com","n":"100","avg":"75.550","stddev":"0.317"}
```
