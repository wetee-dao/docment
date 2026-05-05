# 平台技术原理图

本页用于说明 PulsWeb2 的关键组件边界，以及任务执行过程中数据与密钥的主要流转路径。内容覆盖区块链侧的调度与审计、可信子网的密钥协作（DKG/PRE），以及 TEE 计算执行层。

## 1) 整体组件关系图

<div class="mermaid">
flowchart LR
  U[用户/开发者] --> D[dApp / API]

  subgraph L1[第一层：主链（规则/结算/调度/审计）]
    MC[链上模块/合约]
    SCH[任务调度与状态]
    AUD[审计记录（Attestation/证明摘要）]
    MC <--> SCH
    SCH --> AUD
  end

  D --> MC

  subgraph L2[第二层：可信子网/侧链（密钥协作）]
    DS[tee-dsecret 可信子网]
    DKG[DKG（分布式密钥生成）]
    PRE[PRE（代理重加密/授权）]
    DS --- DKG
    DS --- PRE
  end

  subgraph L3[第三层：计算执行层（TEE Workers / K8s）]
    K8S[K3s/K8s]
    OP[Worker Operator]
    W[TEE Worker（SGX/TDX/GPU TEE）]
    APP[机密工作负载（服务/任务）]
    K8S --> OP --> W --> APP
  end

  SCH --> OP
  DS -->|密钥份额/重加密授权| W
  W -->|Attestation/证明摘要| AUD
</div>

## 2) 机密任务/机密服务的执行流程（概览）

<div class="mermaid">
sequenceDiagram
  autonumber
  participant U as 用户/开发者
  participant D as dApp/API
  participant MC as 主链（调度/结算/审计）
  participant DS as tee-dsecret（DKG/PRE）
  participant OP as Worker Operator（K8s）
  participant W as TEE Worker
  participant APP as 机密工作负载（服务/任务）

  U->>D: 提交任务/部署服务（镜像、配置、权限）
  D->>MC: 提交链上请求（计费、权限、调度参数）
  MC->>OP: 下发调度结果（目标 Worker/资源）
  OP->>W: 启动工作负载（在 TEE 中运行）
  W->>MC: 上报 Attestation/证明摘要

  Note over U,DS: 涉及机密数据/密钥时
  U->>DS: 触发密钥协作（DKG）或授权（PRE）
  DS-->>W: 按策略向通过验证的工作负载提供密钥材料
  W->>APP: 在 TEE 内使用密钥完成计算
</div>

## 3) 可见性与可验证性

- **链上可见**：任务/服务请求、状态流转、计费/结算，以及 Attestation/证明的摘要记录（用于第三方核验）。
- **机密边界**：明文数据、明文密钥、模型权重等在设计上由 TEE 边界承载；可信子网侧通过 DKG/PRE 降低单点获取完整秘密的风险。
- **核验要点**：在密钥授权或数据访问前，可依据链上记录的 Attestation/证明摘要核验运行环境与工作负载标识是否满足预期。

