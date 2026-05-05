# 术语与缩写（Terminology）

本页用于统一 PulsWeb2 文档中的关键术语与缩写写法，以减少中英文混用与同义词漂移。若与实现存在差异，以当前链端/产品实现为准。

## 核心组件与层级

- **主链（Main Chain）**：负责规则、结算、调度与审计记录的区块链层。
- **可信子网（Trusted Subnet）/侧链（Side-chain）**：用于密钥协作与机密状态相关流程的协同层（例如基于 CometBFT 的子网）。
- **计算执行层（Execution Layer）**：承载机密工作负载的执行环境，通常由 Kubernetes 编排与 TEE Worker 共同构成。

## 关键服务与模块

- **`tee-dsecret`**：可信子网实现，用于密钥协作与相关共识/协调流程。
- **`tee-worker`**：计算执行层的节点组件，负责在 TEE 环境中启动工作负载并上报证明材料。
- **Operator / 控制器（Worker Operator）**：在 Kubernetes 上管理机密工作负载生命周期的控制面组件。

## 密码学与安全机制

- **TEE（Trusted Execution Environment）**：受信任执行环境，用于定义运行时机密边界。
- **Attestation（远程证明）**：用于核验运行环境度量与工作负载标识的机制；文档中通常只记录其摘要/引用信息用于审计。
- **DKG（Decentralized Key Generation，分布式密钥生成）**：将密钥生成与控制分散到多节点，降低单点持有完整秘密的风险。
- **PRE（Proxy Re-Encryption，代理重加密）**：在不暴露明文的前提下，为指定工作负载提供可用的密文授权/重加密能力。

## 产品形态

- **机密服务（Confidential Service）**：面向长期运行的服务型工作负载（例如 Deployment）。
- **机密任务（Confidential Task）**：面向一次性/批处理的任务型工作负载（例如 Job）。
- **机密存储（Confidential Storage）**：与机密工作负载配套的存储形态（具体能力以产品实现为准）。

