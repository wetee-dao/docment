# Confidential Storage

Confidential Storage provides persistence for confidential workloads and introduces encryption and access-control boundaries on the storage path (capabilities depend on the current product implementation).

### How it Works
Confidential Storage encrypts data before it is written to persistent media and associates key material with workload identity/attestation, reducing plaintext exposure on the storage path.

*   **Key boundary**: key material is held within the confidentiality boundary; export and access policies depend on the implementation.
*   **Access binding**: storage access can be bound to specific workloads/namespaces, depending on control-plane capabilities.

### Highlights
1.  **Persistence**: Your data remains encrypted and accessible even after your Confidential Service restarts.
2.  **Redundancy and availability**: redundancy strategy and durability depend on the storage implementation and deployment policy.
3.  **Minimal exposure**: what storage nodes can observe (ciphertext and metadata) depends on the implementation; confidentiality boundary is defined by the current product behavior.

### How to Use
When deploying an application, add a Volume and check the **"Confidential Encryption"** option.

---

Billing/quota/backup behaviors depend on current product rules.
