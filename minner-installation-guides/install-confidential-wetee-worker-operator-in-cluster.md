# Install Confidential wetee worker operator in cluster

```bash
git clone  https://github.com/wetee-dao/worker && cd worker
make deploy IMG=wetee/worker:2024-03-21-22_51
kubectl create -f ./hack/install/manager_headless.yaml
```
