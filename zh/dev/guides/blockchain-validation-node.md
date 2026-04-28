# 区块链验证节点（Validation Node）

## 快速开始

按以下步骤即可启动示例节点。

#### Rust 环境准备

* [Linux development environment](https://docs.substrate.io/install/linux/).
* [MacOS development environment](https://docs.substrate.io/install/macos/).
* [Windows development environment](https://docs.substrate.io/install/windows/).

## Run

使用 Rust 原生的 `cargo` 命令编译并启动节点：

```sh
cargo run --release -p wetee-node -- --dev
```

## Build

`cargo run` 会在首次运行时自动构建。如果你只想构建而不启动节点，使用：

```sh
cargo build --release
```

#### Embedded Docs

项目构建完成后，可以用下面命令查看全部参数与子命令：

```sh
./target/release/wetee-node -h
```

## Run local dev chain

使用 `cargo run` 启动的是临时开发节点；进程退出后其状态会被丢弃。

构建完成后，你也可以用其它方式启动节点。

#### Single-Node Development Chain

启动单节点开发链（状态默认不持久化）：

```bash
./target/release/wetee-node --dev
```

清理开发链状态：

```bash
./target/release/wetee-node purge-chain --dev
```

以更详细的日志启动开发链：

```bash
RUST_BACKTRACE=1 ./target/release/wetee-node -ldebug --dev
```

> “开发链”表示链状态会被放到临时目录中。默认会预置以下测试账户余额：
>
> * Alice
> * Bob

如果你希望多次运行之间保留链状态，需要指定 `--base-path`，把数据库存到指定目录而不是临时目录。该目录下会为不同的链创建不同子目录。示例：

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
