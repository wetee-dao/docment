# Blockchain validation node

## Getting Started

Follow the steps below to get started with the example node.

#### Rust Setup

* [Linux development environment](https://docs.substrate.io/install/linux/).
* [MacOS development environment](https://docs.substrate.io/install/macos/).
* [Windows development environment](https://docs.substrate.io/install/windows/).

## Run

Use Rust's native `cargo` command to build and launch the node:

```sh
cargo run --release -p wetee-node -- --dev
```

## Build

The `cargo run` command will perform an initial build. Use the following command to build the node without launching it:

```sh
cargo build --release
```

#### Embedded Docs

Once the project has been built, the following command can be used to explore all parameters and subcommands:

```sh
./target/release/wetee-node -h
```

## Run local dev chain

The provided `cargo run` command will launch a temporary node and its state will be discarded after you terminate the process.

After the project has been built, there are other ways to launch the node.

#### Single-Node Development Chain

This command will start the single-node development chain with non-persistent state:

```bash
./target/release/wetee-node --dev
```

Purge the development chain's state:

```bash
./target/release/wetee-node purge-chain --dev
```

Start the development chain with detailed logging:

```bash
RUST_BACKTRACE=1 ./target/release/wetee-node -ldebug --dev
```

> A development chain stores state in a temporary folder while the nodes are running. The following accounts are pre-funded in this mode:
>
> * Alice
> * Bob

To persist chain state between runs, provide a base path so the database is stored in a chosen directory rather than a temporary one. The following commands show how to create a folder and use it as the database base path.

```bash
// Create a folder to use as the db base path
$ mkdir local-chain-state

// Use of that folder to store the chain state
$ ./target/release/wetee-node --dev --base-path ./local-chain-state/

// Check the folder structure created inside the base path after running the chain
$ ls ./local-chain-state
chains
$ ls ./local-chain-state/chains/
dev
$ ls ./local-chain-state/chains/dev
db keystore network
```

## Unit Test

To run Unit Tests, execute the following command:

```bash
cargo test
```
