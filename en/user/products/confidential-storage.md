# Confidential Storage

Confidential Storage provides encrypted-at-rest storage solutions for confidential services and tasks. It ensures that sensitive data stored on disk is protected even if the physical storage medium is compromised.

## Features

*   **At-Rest Encryption:** Data is automatically encrypted before being written to disk and decrypted when read by the authorized TEE application.
*   **Persistent Volumes (PVC):** Integrated with Kubernetes Persistent Volume Claims, allowing confidential services to maintain state across restarts.
*   **Hardware-Bound Keys:** Encryption keys are managed within the TEE and can be bound to the hardware's root of trust.

## Usage

In WeTEE, you can request confidential storage by specifying storage requirements in your app deployment configuration. The system will automatically provision an encrypted volume and mount it to your TEE container.
