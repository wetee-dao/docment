# From Docker to TEE

PulsWeb2 allows developers to take standard Linux containers and run them within a Trusted Execution Environment (TEE) with minimal changes. This is achieved using LibOS technologies like EGO.

## The Workflow

1.  **Prepare your Docker Image:** Ensure your application runs correctly as a standard Docker container.
2.  **EGO Packaging:** Use the EGO toolset to sign and package your binaries for the SGX enclave. This usually involves defining an `enclave.json` configuration.
3.  **Upload to PulsWeb2:** Through the PulsWeb2 dApp or CLI, specify your Docker image and the necessary TEE configurations.
4.  **Remote Attestation:** When the container starts, PulsWeb2's worker generates a DCAP attestation report to prove to the network that the code is running inside a genuine SGX enclave.
5.  **Execution:** Your application runs with full hardware isolation and encryption.

## Best Practices

*   **Stateless by Default:** Treat your TEE containers as stateless where possible, or use PulsWeb2's Confidential Storage for persistence.
*   **Minimal Base Images:** Use small base images (like Alpine) to reduce the Trusted Computing Base (TCB).
*   **Secure Environment Variables:** Use PulsWeb2's secret management to inject sensitive environment variables directly into the TEE.
