# Proxy Re-Encryption (PRE)

Proxy Re-Encryption (PRE) is a core privacy feature of WeTEE that allows secure data sharing and access control without ever exposing the user's data to the platform or the workers in its raw form.

## How it Works

1.  **Encryption by User:** The user encrypts their sensitive data (e.g., input data for a confidential task) using their own key.
2.  **Re-Encryption Key:** The user generates a special "re-encryption key" targeted at a specific TEE workload's public key.
3.  **The Proxy (Side-chain):** The WeTEE side-chain (the proxy) uses the re-encryption key to transform the user's encrypted data into a version that can be decrypted *only* by the authorized TEE workload.
4.  **Decryption in TEE:** The TEE workload decrypts the data inside its secure hardware enclave, processes it, and outputs the result.

## Benefits

*   **Zero Exposure:** Neither the side-chain nodes nor the worker administrators can see the user's data during the re-encryption process.
*   **Granular Access Control:** Users can revoke access by destroying the re-encryption key or changing policies on the side-chain.
*   **Auditability:** Every re-encryption event is recorded on the side-chain for auditing.
