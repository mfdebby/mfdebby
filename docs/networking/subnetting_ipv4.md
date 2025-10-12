# Subnetting IPv4

## What is the subnet mask for the CIDR `/26`?

#### 1. Convert `/26` to a binary

```bash
11111111.11111111.11111111.11000000
```

#### 2. Convert the binary to decimal

> The binary table below will help us find the decimal value <br>
> by adding the columns with a value of `1`.

> First octet
>
> | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |
>
> 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = `255`

> Second octet
>
> | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |
>
> 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = `255`

> Third octet
>
> | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |
>
> 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = `255`

> Fourth octet
>
> | 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
> | --- | --- | --- | --- | --- | --- | --- | --- |
> | 1   | 1   | 0   | 0   | 0   | 0   | 0   | 0   |
>
> 128 + 64 = `192`

The subnet mask is `255.255.255.192`

## How to convert decimal subnet mask `255.255.255.192` to binary

> We will use repeated division by 2 to find the binary equivalent of each octet.

Let's take the last octet `192` as an example:

192 / 2 = 96 remainder 0  
96 / 2 = 48 remainder 0  
48 / 2 = 24 remainder 0  
24 / 2 = 12 remainder 0  
12 / 2 = 6 remainder 0  
6 / 2 = 3 remainder 0  
3 / 2 = 1 remainder 1  
1 / 2 = 0 remainder 1

Reading the remainders **from bottom to top**, we get:

`11000000`

So, the full binary form of `255.255.255.192` is:

`11111111.11111111.11111111.11000000`

## How to calculate the number of usable host ID's in subnet `255.255.255.192`?

> We can use the formula h=2<sup>x</sup>-2

The `x` stand for the number of zeros on the subnet mask

`255.255.255.192` is `11111111.11111111.11111111.11000000` in binary.

> h = 2 <sup>6</sup> - 2
>
> There are `6` zeros in the binary subnet mask

> = 64 - 2
>
> The first IP is reserve for the network ID.
>
> The last IP is reserve for the broadcast ID.
>
> That is why we need to subtract `2`.

> = 62

We have `62` available host ID's.
