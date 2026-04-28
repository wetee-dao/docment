# Deploy Trusted Subnet `tee-dsecret` (Consensus Security Mining)

`tee-dsecret` is a **Trusted Subnet** component in PulsWeb2. It hosts consensus-protected security coordination flows (such as DKG, membership management, and key rotation).

It is different from the Worker role:
- `tee-worker`: runs confidential workloads (compute mining)
- `tee-dsecret`: provides security consensus and trusted-subnet capability (consensus security mining)

## What you need

Since different environments (testnet/private/cooperation networks) may require different topology and parameters, this page only lists **environment-agnostic prerequisites**:

- One or more stable servers (recommend at least 3 nodes for fault tolerance)
- Stable networking (public IPs or reliable private connectivity)
- Persistent storage for consensus/state data
- Ops readiness: monitoring, logs, backups, and upgrade windows

## Suggested deployment approach

In this workspace, the Worker path is documented with Kubernetes/K3s. For consistent operations, deploying `tee-dsecret` with the same approach is recommended:

1. Prepare a Kubernetes/K3s cluster
2. Provision persistent volumes and required ports
3. Start nodes using environment-provided configs (genesis/peers/validator, etc.)
4. Confirm nodes join and consensus starts progressing

> Note: exact flags/ports and the node-join process depend on your network’s “subnet configuration package”, usually provided by the network operator/admin.

## Basic health checks

After deployment, verify at least:
- peers/connectivity are healthy
- consensus height keeps increasing
- logs have no repeating critical errors (network/storage/signing)
- monitoring/alerting is enabled (CPU/mem/disk/net)

