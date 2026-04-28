---
description: PulsWeb2 - Confidential computing platform (no token issuance)
---

# OVERVIEW

<figure><img src=".gitbook/assets/chain (1).png" alt=""><figcaption></figcaption></figure>

PulsWeb2 is a confidential computing platform built on a robust three-layer architecture, providing a secure, private, and high-performance environment for modern applications.

## Three-Layer Architecture

1.  **Layer 1: Main Chain (User Logic & Settlement)**
    Based on Polkadot (with support for more networks in the future), handling all user-facing business logic, governance, asset settlement, and task scheduling.
2.  **Layer 2: Side-chain (Key Management & Consensus)**
    Powered by `tee-dsecret` using CometBFT. It implements **Decentralized Key Generation (DKG)** and **Proxy Re-Encryption (PRE)**, ensuring that secrets are managed by a decentralized network rather than a single point of failure.
3.  **Layer 3: Computing Layer (Worker & Execution)**
    The execution layer where `tee-worker` runs as a Kubernetes controller on Intel SGX/GPU TEE hardware. It uses EGO/LibOS to allow standard Linux containers to run securely within TEE environments without code modification.

## Core Products

*   **Confidential Service:** Persistent confidential containers with K8s features (Deployment, PVC, Networking).
*   **Confidential Task:** Ephemeral batch processing with verifiable execution results.
*   **GPU Compute Service:** High-performance AI and computing workloads protected by NVIDIA/Intel TEE.
*   **Confidential Storage:** Encrypted-at-rest storage for sensitive application data.

## Key Features

*   **Zero Trust Architecture:** No need to trust the cloud provider or even individual worker nodes.
*   **Seamless Developer Experience:** Deploy existing Docker images to TEE with minimal changes.
*   **Decentralized Governance:** Fully community-driven through integrated DAO modules.
