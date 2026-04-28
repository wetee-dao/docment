# Table of contents

* [项目概述](README.md)

# 👤 用户文档（如何使用 PulsWeb2）

## 1. 认识 PulsWeb2
* [什么是 PulsWeb2？](user/intro/what-is-wetee.md)
* [核心优势：为什么要用？](user/intro/benefits.md)

## 2. 准备工作
* [设置钱包](user/intro/wallet-setup.md)
* [开通权限与配额](user/intro/get-tokens.md)

## 3. 使用产品
* [部署机密应用 (Confidential Service)](user/products/confidential-service.md)
* [运行机密任务 (Confidential Task)](user/products/confidential-task.md)
* [使用 GPU 算力](user/products/gpu-compute-service.md)
* [机密存储](user/products/confidential-storage.md)

## 4. 社区与治理
* [参与 DAO 治理](user/dao/overview.md)
* [如何发起提案](user/dao/proposals.md)

## 5. 算力节点
* [支持的机密计算设备](user/miner/supported-devices.md)
* [准备 K3s 环境](user/miner/install-k3s-cluster-on-linux.md)
* [安装 PulsWeb2 Worker](user/miner/install-confidential-wetee-worker-operator-in-cluster.md)
* [配置机密计算证书 (DCAP)](user/miner/install-intel-sgx-tdx-pccs-service-in-cluster.md)
* [开启 GPU 支持（可选）](user/miner/install-nvidia-container-runtime-support-optional.md)
* [节点运行说明（不涉及发币）](user/miner/staking-ant-mint.md)

## 6. 安全共识节点
* [运行 tee-dsecret 可信子网](user/miner/miner-types.md)
* [部署 tee-dsecret](user/miner/deploy-tee-dsecret.md)

# 💻 开发者手册

## 7. 架构解析
* [三层架构模型](dev/architecture/three-layer-model.md)
* [DKG & 侧链技术](dev/architecture/dkg-sidechain.md)
* [代理重加密 (PRE)](dev/architecture/pre.md)

## 8. 开发实战
* [将 Docker 镜像转换为机密镜像](dev/guides/docker-to-tee.md)
* [使用 EGO SDK 开发](dev/golang/libos-ego-sdk.md)
* [集成机密 DKG](dev/guides/run-tee-dkg.md)
