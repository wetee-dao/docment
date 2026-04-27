# Install Intel SGX/TDX PCCS service in cluster

```bash
git clone  https://github.com/wetee-dao/worker && cd worker
kubectl create -f ./hack/install/pccs.yaml
kubectl create -f ./hack/install/pccs_headless.yaml
```
