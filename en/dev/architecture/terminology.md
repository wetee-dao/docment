# Terminology

This page defines consistent names and abbreviations used across PulsWeb2 documentation to reduce ambiguity between English and Chinese materials. If any description differs from implementation, the current chain/product behavior prevails.

## Core layers

- **Main Chain**: the blockchain layer for rules, settlement, scheduling, and audit records.
- **Trusted Subnet / Side-chain**: the collaboration layer for key workflows and confidential-state related coordination (e.g., a CometBFT-based subnet).
- **Execution Layer**: where confidential workloads run, typically composed of Kubernetes orchestration plus TEE workers.

## Key services and modules

- **`tee-dsecret`**: trusted subnet implementation used for key collaboration and related consensus/coordination workflows.
- **`tee-worker`**: execution-layer node component that starts workloads inside TEE and reports proof materials.
- **Worker Operator (controller)**: the Kubernetes control-plane component that manages confidential workload lifecycle.

## Cryptography and security mechanisms

- **TEE (Trusted Execution Environment)**: the runtime confidentiality boundary for workload execution.
- **Attestation (remote attestation)**: a mechanism to verify environment measurements and workload identity; documentation typically refers to its audit summary/reference.
- **DKG (Decentralized Key Generation)**: distributes key generation/control across multiple nodes to reduce single-point access to full secrets.
- **PRE (Proxy Re-Encryption)**: enables encrypted authorization/re-encryption for designated workloads without revealing plaintext.

## Product forms

- **Confidential Service**: long-running service workloads (e.g., Deployment).
- **Confidential Task**: batch/ephemeral task workloads (e.g., Job).
- **Confidential Storage**: storage form used with confidential workloads (capabilities depend on product implementation).

