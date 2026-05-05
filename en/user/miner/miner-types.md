# Two Node Roles: Compute vs Consensus Security

In PulsWeb2, there are two node roles:

## 1) Compute Node

This role provides **confidential compute** and actually runs users’ Confidential Services / Confidential Tasks.

- **What you deploy**: `tee-worker` (Worker node)
- **What you provide**: CPU / memory / (optional) GPU plus TEE-capable hardware environment (e.g., Intel SGX)
- **Responsibilities**:
  - Run confidential workloads
  - Provide verifiable attestation (hardware proof)
  - Keep the node stable and online

## 2) Consensus Security Node

This role provides **security and consensus** by operating a Trusted Subnet that runs sensitive coordination protocols.

In the current architecture, `tee-dsecret` is a **Trusted Subnet** component:
- It can serve as a subnet for **multiple blockchain mainnets**.
- It is responsible for consensus-protected flows such as DKG (Decentralized Key Generation), membership management, and key rotation.

- **What you deploy**: `tee-dsecret` (Trusted Subnet node)
- **What you provide**: reliable networking/storage and a stable validator-style runtime
- **Responsibilities**:
  - Participate in subnet consensus and provide protocol-correctness guarantees per consensus rules
  - Maintain availability and safety of DKG/Epoch flows
  - Provide “trusted subnet services” for upper-layer mainnets

---

For compute-only participation, deploy `tee-worker`.  \n+For trusted-subnet consensus participation, deploy `tee-dsecret`.

