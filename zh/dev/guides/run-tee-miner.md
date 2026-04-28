# 运行 TEE 节点（Worker / Miner）

### 硬件与软件要求

* [CPU 列表（点击查看）](https://ark.intel.com/content/www/us/en/ark/search/featurefilter.html?productType=873&2\_SoftwareGuardExtensions=Yes%20with%20Intel%C2%AE%20ME)
  * Intel 8th generation (Cannon Lake) Core i3, i5, i7, and i9 processors
  * Intel 9th generation (Cascade Lake) Core i3, i5, i7, and i9 processors
  * Intel 10th generation (Comet Lake) Core i3, i5, i7, and i9 processors
  * 2nd Generation Xeon Scalable processors (Cascade Lake) and later generations generally provide SGX capabilities.
* 建议使用 Ubuntu 20.04 或 22.04 作为 HostOS，避免在容器化系统里再套一层运行。

### 准备本地环境

#### 检查 Intel SGX 支持

```
The hardware must support SGX and it must be enabled in the BIOS:

$ sudo apt install cpuid
$ cpuid | grep SGX
      SGX: Software Guard Extensions supported = true
      SGX_LC: SGX launch config supported      = true
   SGX capability (0x12/0):
      SGX1 supported                         = true                       = true
```

* SGX: `Software Guard Extensions supported = true` 代表硬件支持 SGX。
* SGX\_LC: `SGX launch config supported = true` 代表硬件支持 FLC（远程证明需要）。
* SGX1 supported: 代表 BIOS 中已启用。

#### Ubuntu 20.04/22.04 安装 Intel SGX 依赖与 EGO

> 更多 EGO 信息请参考 `https://docs.edgeless.systems/ego/getting-started/install`

```bash
sudo apt install build-essential libssl-dev

sudo mkdir -p /etc/apt/keyrings
wget -qO- https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
sudo apt update

EGO_DEB=ego_1.5.3_amd64_ubuntu-$(lsb_release -rs).deb
wget https://github.com/edgelesssys/ego/releases/download/v1.5.3/$EGO_DEB
sudo apt install ./$EGO_DEB build-essential libssl-dev

sudo mkdir /opt/wetee-worker
sudo chmod 777 /opt/wetee-worker
```

#### Kubernetes  Setup

* [https://kubernetes.io/docs/setup/](https://kubernetes.io/docs/setup/)

#### 设置 Golang 环境

```bash
# 安装 Golang 1.21（Ubuntu 默认版本可能较低）
sudo apt install golang-1.21

# 设置 Golang 环境变量（建议写入 ~/.bashrc 或 ~/.zshrc）
export GOROOT=/usr/lib/go-1.21/
export PATH=$PATH:$GOROOT/bin
```

### 部署 Worker（示例）

````bash
git clone  https://github.com/wetee-dao/worker && cd worker

# 1.0 Setup Env
go mod tidy
sudo chmod 744 /etc/rancher/k3s/k3s.yaml

# 1.1 install addn docker images to k3s
sh hack/pre_install.sh

# 等待上述镜像与组件部署完成，可用 `kubectl get pod -A` 检查 sgx-device-plugin、sgx-pccs-api、wetee-dapp-*、wetee-node-* 是否已正常运行。

# 1.2 and then install worker
sh hack/install.sh

# 1.3 使用 `kubectl get pod -A` 检查 worker-controller-manager-* 是否部署成功。
```bash
$ kubectl get pod -A
NAMESPACE       NAME                                        READY   STATUS      RESTARTS   AGE
kube-system     local-path-provisioner-6c86858495-cr2nz     1/1     Running     0          2m22s
kube-system     coredns-6799fbcd5-pjvqk                     1/1     Running     0          2m22s
kube-system     helm-install-traefik-crd-c4vdc              0/1     Completed   0          2m23s
kube-system     helm-install-traefik-7m6xf                  0/1     Completed   1          2m23s
kube-system     sgx-device-plugin-ds-22p9v                  1/1     Running     0          118s
kube-system     svclb-traefik-17b1b422-ztq68                2/2     Running     0          118s
kube-system     metrics-server-67c658944b-29qp8             1/1     Running     0          2m22s
worker-addon    wetee-dapp-86b4cb47b8-m2f6k                 1/1     Running     0          117s
worker-addon    wetee-node-5d4bf8bc57-6rfbx                 1/1     Running     0          116s
kube-system     traefik-f4564c4f4-p8k75                     1/1     Running     0          118s
worker-addon    sgx-pccs-api-67c56bc9d5-4lkqd               1/1     Running     0          116s
worker-system   worker-controller-manager-59bccdd4c-gpt8q   2/2     Running     0          82s
````
