# DKG & Side-chain

PulsWeb2 utilizes a Layer 2 side-chain to handle sensitive operations and decentralized secret management, ensuring that no single entity has full control over the system's root secrets.

## Decentralized Key Generation (DKG)

DKG is a protocol where a set of nodes collectively generate a public/private key pair. 
*   **No Single Source of Truth:** The private key is never reconstructed in its entirety on any single node. Instead, it is stored as "shares" across the participant nodes.
*   **Threshold Cryptography:** Operations using the private key (like signing or decryption) require a threshold of nodes (e.g., 2/3) to participate using their shares.
*   **Security:** This protects against a compromised node or a malicious administrator, as they would only possess a useless fragment of the key.

## Side-chain Role

The side-chain, built on CometBFT, acts as the coordination layer for DKG:
1.  **Node Selection:** Elects the set of nodes (Worker nodes) authorized to participate in the DKG.
2.  **Epoch Management:** Handles key rotation and node membership changes through "Epochs".
3.  **Governance Sync:** Synchronizes governance decisions from the Main Chain that affect the side-chain's operation.
