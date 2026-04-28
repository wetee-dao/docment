# Table of contents

* [项目概述](README.md)

# 面向用户

## 产品介绍

* [机密服务 (Confidential Service)](user/products/confidential-service.md)
* [机密任务 (Confidential Task)](user/products/confidential-task.md)
* [GPU 计算服务](user/products/gpu-compute-service.md)
* [机密存储 (Confidential Storage)](user/products/confidential-storage.md)

## DAO 与治理

* [DAO 概述](user/dao/overview.md)
* [提案与投票](user/dao/proposals.md)

## Worker 安装指南

* [硬件要求](user/miner/supported-devices.md)
* [基于 K3s 安装](user/miner/install-k3s-cluster-on-linux.md)
* [部署 WeTEE Worker](user/miner/install-confidential-wetee-worker-operator-in-cluster.md)
* [GPU 支持 (可选)](user/miner/install-nvidia-container-runtime-support-optional.md)

# 面向开发者

## 架构深度解析

* [三层架构模型](dev/architecture/three-layer-model.md)
* [DKG 与侧链](dev/architecture/dkg-sidechain.md)
* [代理重加密 (PRE)](dev/architecture/pre.md)

## 开发指南

* [从 Docker 到 TEE](dev/guides/docker-to-tee.md)
* [使用 EGO SDK](dev/golang/libos-ego-sdk.md)
* [TEE DKG 集成](dev/guides/run-tee-dkg.md)

## 协议细节

* [区块链铸造](user/mint/blockchain-mint.md)
* [TEE 计算铸造](user/mint/tee-computing-mint.md)
* [质押与奖励](user/miner/staking-ant-mint.md)
* [工作证明 (DCAP)](user/miner/install-intel-sgx-tdx-pccs-service-in-cluster.md)
