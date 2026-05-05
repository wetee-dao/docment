# Deploy Confidential Service (Apps)

**Confidential Service** is designed for long-running applications such as websites, databases, or API backends.

### Security boundary and verification
Confidential Service workloads run within a TEE boundary. Deployment and access-control decisions should be based on supported attestation evidence and audit records; evidence types and policies depend on the current implementation.

### How to Deploy? (3 steps)

#### Step 1: Prepare your Image
PulsWeb2 supports standard Docker images. Push the image to a public registry (e.g., Docker Hub) or a private registry.

#### Step 2: Configure your Settings
1.  Log in to the PulsWeb2 dApp.
2.  Navigate to the **"Confidential Service"** page and click **"Create."**
3.  **Fill in the details**:
    *   **Image**: Enter your Docker image URL (e.g., `nginx:latest`).
    *   **Resources**: Select the required CPU and RAM.
    *   **Port**: Specify the port your program uses to communicate with the outside world.

#### Step 3: Start
Click **"Deploy"** and sign the transaction. The system dispatches the workload according to scheduling policy; startup time depends on resource availability and image pull latency.

### Monitoring & Management
*   **Real-time Logs**: View your program's output directly in the console.
*   **Verification**: View attestation evidence (e.g., summary/reference) associated with the workload and verify environment measurements/workload identity against expected values.
*   **Scaling and stop**: Adjust resources or stop the service; billing rules depend on the current product configuration.

---

**Best for**: long-running service workloads that require runtime confidentiality and verifiability.
