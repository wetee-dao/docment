# Confidential Storage

In confidential computing, data is safe during processing. But what if the hard drive storing your data is stolen? **Confidential Storage** solves this.

### How it Works
PulsWeb2's Confidential Storage isn't just "file uploading." Encryption happens *inside* the "Safe Room" (TEE) before the data is even written to the disk.

*   **Unique Keys**: The encryption keys exist only within the TEE and can never be exported.
*   **Task Binding**: You can restrict access to your storage so only specific confidential containers can read it.

### Highlights
1.  **Persistence**: Your data remains encrypted and accessible even after your Confidential Service restarts.
2.  **Distributed Redundancy**: Data is fragmented and stored across the network for high reliability (guaranteed by the Side-chain protocol).
3.  **Zero-Knowledge Access**: Node providers only see scrambled bits. They cannot know the file names, sizes, or any content.

### How to Use
When deploying an application, add a Volume and check the **"Confidential Encryption"** option.

---

**Summary**: Keep your data confidential throughout its entire lifecycle—at rest, in transit, and during computation.
