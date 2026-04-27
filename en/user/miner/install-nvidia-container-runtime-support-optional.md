# Install NVIDIA Container Runtime Support（Optional）

*
  1. Install the nvidia-container package repository on the node by following the instructions at: https://nvidia.github.io/libnvidia-container/
*
  2. Install the nvidia container runtime packages. For example: apt install -y nvidia-container-runtime cuda-drivers-fabricmanager-515 nvidia-headless-515-server
*
  3. Install K3s, or restart it if already installed: curl -ksL get.k3s.io | sh -
*
  4. Confirm that the nvidia container runtime has been found by k3s: grep nvidia /var/lib/rancher/k3s/agent/etc/containerd/config.toml
*

    5. Install nvidia device plugin

    ```bash
    kubectl create -f ./hack/install/nvidia_runtime.yaml
    kubectl create -f ./hack/install/nvidia_device_plugin.yml
    ```
