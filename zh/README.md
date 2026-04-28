---
description: PulsWeb2 - 机密计算平台（不发币）
---

# 项目概述

<figure><img src=".gitbook/assets/chain (1).png" alt=""><figcaption></figcaption></figure>

PulsWeb2 是基于三层架构构建的机密计算平台，为现代应用程序提供安全、隐私和高性能的运行环境。

## 三层架构

1.  **第一层：主链层 (用户逻辑与结算)**
    基于 Polkadot 构建（未来将接入更多网络），负责处理用户所有的业务逻辑、全局治理、资产结算和任务调度。
2.  **第二层：侧链层 (密钥管理与共识)**
    由 `tee-dsecret` 驱动，使用 CometBFT 共识。它实现了**分布式密钥生成 (DKG)** 和**代理重加密 (PRE)**，确保密钥由去中心化网络管理，消除了单点故障。
3.  **第三层：计算层 (Worker 与执行)**
    执行层，`tee-worker` 作为 Kubernetes 控制器运行在 Intel SGX/GPU TEE 硬件上。它利用 EGO/LibOS 技术，允许标准 Linux 容器在无需修改代码的情况下安全地运行在 TEE 环境中。

## 核心产品

*   **机密服务 (Confidential Service):** 具有 K8s 特性（部署、存储卷、网络）的长期运行机密容器。
*   **机密任务 (Confidential Task):** 具有可验证执行结果的短期批处理任务。
*   **GPU 计算服务:** 由 NVIDIA/Intel TEE 保护的高性能 AI 和计算负载。
*   **机密存储:** 为敏感应用数据提供静态加密存储。

## 核心特性

*   **零信任架构:** 无需信任云服务商，甚至无需信任单个工作节点。
*   **无缝开发者体验:** 只需极少修改即可将现有的 Docker 镜像部署到 TEE。
*   **去中心化治理:** 通过集成的 DAO 模块实现完全由社区驱动。
