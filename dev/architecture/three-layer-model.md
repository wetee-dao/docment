# Three-Layer Architecture Model

WeTEE's architecture is designed for scalability, security, and decentralization. It splits the responsibilities across three distinct layers.

## Layer 1: Main Chain (Polkadot)

The foundation of the network, primarily based on Polkadot (with a roadmap to integrate more blockchain networks). It provides a secure environment for:
*   **User Logic:** Handling all core business logic and user-facing transactions.
*   **Asset Management:** Handling WETEE tokens and other assets.
*   **Scheduling:** Mapping user compute requests to available worker nodes.
*   **Auditing:** Storing proofs of execution and attestation reports for verification.

## Layer 2: Side-chain (DKG & CometBFT)

A high-performance side-chain focused on privacy and secret management:
*   **Decentralized Key Generation (DKG):** Distributes the generation of keys across multiple nodes so that no single node ever knows the full secret.
*   **Proxy Re-Encryption (PRE):** Allows data to be securely re-encrypted for specific TEE workloads without exposing the raw data.
*   **State Sync:** Coordinates between the Main Chain and individual Workers.

## Layer 3: Computing Layer (TEE Workers)

The execution environment where the actual computation happens:
*   **Intel SGX/GPU TEE:** Provides hardware-level isolation for workloads.
*   **Kubernetes (K3s):** Orchestrates confidential containers.
*   **WeTEE Operator:** Manages the lifecycle of TEE applications and handles attestation.
