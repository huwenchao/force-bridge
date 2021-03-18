# Force Bridge

[![codecov](https://codecov.io/gh/huwenchao/force-bridge/branch/main/graph/badge.svg?token=P8L5KWBIII)](https://codecov.io/gh/huwenchao/force-bridge)

> This project is still in active development.

A general new designed Force Bridge.

- It can connect to all chains which support multiple signature account and
  Non-fungible token transfer. We plan to support EOS, TRON, BTC and Polkadot in the first stage.
- You have to trust the committee who runs the bridge.

## Quick Start

### Install Development Tools

- `docker`: https://docs.docker.com/get-docker/
- `docker-compose`: https://docs.docker.com/compose/install/
- `Node.js`: https://nodejs.org/en/
- `rust`(optional): https://www.rust-lang.org/learn/get-started

```bash
# install capsule with cargo
cargo install capsule --git https://github.com/nervosnetwork/capsule.git --tag v0.2.3
# or download the binary and put it in you PATH
# https://github.com/nervosnetwork/capsule/releases/v0.2.3

# run the integration test with docker
make local-ci

# run the bridge server manually
cd offchain-modules
yarn install
cp config.json.example config.json
# edit the config file on your demands
yarn start
```