# 从 Docker 到 TEE（机密镜像）

PulsWeb2 允许开发者以最小改造，将标准 Linux 容器运行在可信执行环境（TEE）中。其核心思路是结合 LibOS（例如 EGO）完成签名、打包与证明，让“容器”具备可验证的机密执行能力。

## 工作流程

1. **准备 Docker 镜像**：确保你的应用作为普通 Docker 容器可以正常运行。
2. **EGO 打包（Packaging）**：使用 EGO 工具链对二进制进行签名/打包以适配 SGX Enclave（通常需要编写 `enclave.json` 配置）。
3. **上传到 PulsWeb2**：通过 PulsWeb2 dApp 或 CLI 指定 Docker 镜像与必要的 TEE 配置。
4. **远程证明（Remote Attestation）**：容器启动时，Worker 生成 DCAP 证明报告，向网络证明代码确实运行在真实 SGX 硬件内。
5. **机密执行（Execution）**：应用在硬件隔离与内存加密保护下运行。

## 最佳实践

- **默认无状态（Stateless by Default）**：尽可能让 TEE 容器无状态；如需持久化，使用 PulsWeb2 的机密存储能力。
- **精简基础镜像（Minimal Base Images）**：使用更小的基础镜像（如 Alpine）以降低可信计算基（TCB）。
- **安全注入环境变量（Secure Env Vars）**：使用 PulsWeb2 的秘密管理，将敏感环境变量直接注入到 TEE 内，避免在 TEE 外泄露。
