# 部署 WeTEE Worker

WeTEE Worker 是一个 Kubernetes 控制器，用于在启用 SGX/GPU 的节点上管理机密工作负载。

## 前置条件

*   一个 Kubernetes 集群（推荐 K3s）。
*   已安装 Intel SGX 驱动和 PCCS 服务。
*   GPU 驱动（对于 GPU 计算服务是可选的）。

## 安装步骤

1.  **克隆 Worker 仓库:**
    ```bash
    git clone https://github.com/wetee-dao/worker && cd worker
    ```

2.  **运行预安装脚本:**
    该脚本安装必要的 Docker 镜像和基础配置。
    ```bash
    sh hack/pre_install.sh
    ```

3.  **部署 Worker 控制器:**
    运行安装脚本以部署 `worker-controller-manager` 及其相关服务。
    ```bash
    sh hack/install.sh
    ```

4.  **验证部署:**
    检查 Pod 是否正常运行：
    ```bash
    kubectl get pod -A | grep worker
    ```
    您应该能在 `worker-system` 命名空间中看到 `worker-controller-manager-*`。
