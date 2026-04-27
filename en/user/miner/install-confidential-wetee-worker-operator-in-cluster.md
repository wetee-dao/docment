# Deploying WeTEE Worker

The WeTEE Worker is a Kubernetes controller that manages confidential workloads on SGX/GPU enabled nodes.

## Prerequisites

*   A Kubernetes cluster (K3s recommended).
*   Intel SGX drivers and PCCS service installed.
*   GPU drivers (optional for GPU Compute Service).

## Installation

1.  **Clone the Worker Repository:**
    ```bash
    git clone https://github.com/wetee-dao/worker && cd worker
    ```

2.  **Run Pre-installation Script:**
    This script installs necessary docker images and basic configurations.
    ```bash
    sh hack/pre_install.sh
    ```

3.  **Deploy the Worker Controller:**
    Run the install script to deploy the `worker-controller-manager` and its associated services.
    ```bash
    sh hack/install.sh
    ```

4.  **Verify Deployment:**
    Check if the pods are running correctly:
    ```bash
    kubectl get pod -A | grep worker
    ```
    You should see `worker-controller-manager-*` in the `worker-system` namespace.
