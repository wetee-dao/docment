# DKG 与侧链（可信子网）

PulsWeb2 使用第二层的侧链/可信子网来处理**敏感操作**与**去中心化的秘密管理**，从设计上确保：系统根秘密（root secrets）不会被任何单一实体完整掌控。

## 分布式密钥生成（DKG, Decentralized Key Generation）

DKG 是一种协议：由一组节点共同生成一对公钥/私钥，但**私钥不会在任何单点被完整重构**。

- **没有单一真相源（No Single Source of Truth）**：私钥以“份额（shares）”的形式分散保存于参与节点。
- **门限密码学（Threshold Cryptography）**：使用私钥的操作（例如签名、解密）需要达到门限数量的节点（例如 2/3）共同参与，各自提供份额完成计算。
- **安全性（Security）**：即使单个节点被攻破，攻击者也只拿到无意义的碎片，无法单独恢复私钥或冒充系统。

## 侧链/子网的角色（CometBFT 协调层）

基于 CometBFT 的侧链/可信子网充当 DKG 的协调与执行层，通常包括：

1. **节点选择（Node Selection）**：选举/确定被授权参与 DKG 的节点集合（例如一部分 Worker 节点）。
2. **Epoch 管理（Epoch Management）**：通过 Epoch 管理密钥轮换、成员变更等关键流程。
3. **治理同步（Governance Sync）**：将主链上会影响侧链运行的治理决议同步到侧链/子网执行。
