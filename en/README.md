---
description: PulsWeb2 - Confidential computing platform (no token issuance)
---

# OVERVIEW

<figure><img src=".gitbook/assets/chain (1).png" alt=""><figcaption></figcaption></figure>

PulsWeb2 is a confidential computing platform built on a three-layer architecture, intended for workloads that require runtime confidentiality and verifiability.

## Three-Layer Architecture

1.  **Layer 1: Main Chain (User Logic & Settlement)**
    Based on Polkadot (with support for more networks in the future), handling all user-facing business logic, governance, asset settlement, and task scheduling.
2.  **Layer 2: Side-chain (Key Management & Consensus)**
    Powered by `tee-dsecret` using CometBFT. This layer implements **Decentralized Key Generation (DKG)** and **Proxy Re-Encryption (PRE)** to reduce single-point exposure of full secrets (details depend on the protocol and implementation).
3.  **Layer 3: Computing Layer (Worker & Execution)**
    The execution layer where `tee-worker` runs as a Kubernetes controller on supported TEE hardware. It may use EGO/LibOS to host container workloads; compatibility and constraints depend on the current implementation.

## Core Products

*   **Confidential Service:** Persistent confidential containers with K8s features (Deployment, PVC, Networking).
*   **Confidential Task:** Ephemeral batch processing with verifiable execution results.
*   **GPU Compute Service:** High-performance AI and computing workloads protected by NVIDIA/Intel TEE.
*   **Confidential Storage:** Encrypted-at-rest storage for sensitive application data.

## Key Features

*   **Verifiability**: attestation evidence and audit records can be used for third-party verification (subject to supported evidence types).
*   **Container-oriented delivery**: a workflow for deploying container workloads to TEE (compatibility depends on runtime constraints).
*   **Governance modules**: governance may be enabled in specific environments (availability depends on deployment configuration).
