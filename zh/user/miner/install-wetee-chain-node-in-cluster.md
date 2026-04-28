# Install wetee chain node in cluster

```bash
git clone  https://github.com/wetee-dao/worker && cd worker
kubectl create -f ./hack/install/chain.yaml 
kubectl create -f ./hack/install/chain_headless.yaml
```
