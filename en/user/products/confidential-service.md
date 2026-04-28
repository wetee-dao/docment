# Deploy Confidential Service (Apps)

**Confidential Service** is designed for long-running applications such as websites, databases, or API backends.

### Why is it special?
When you deploy a Confidential Service, it runs inside a completely encrypted "hardware black box." Even the node provider who owns the physical server cannot see your code logic or the sensitive data stored in memory.

### How to Deploy? (In 3 Simple Steps)

#### Step 1: Prepare your Image
PulsWeb2 supports standard Docker images. You only need to push your image to a public registry (like Docker Hub) or a private one.

#### Step 2: Configure your Settings
1.  Log in to the PulsWeb2 dApp.
2.  Navigate to the **"Confidential Service"** page and click **"Create."**
3.  **Fill in the details**:
    *   **Image**: Enter your Docker image URL (e.g., `nginx:latest`).
    *   **Resources**: Select the required CPU and RAM.
    *   **Port**: Specify the port your program uses to communicate with the outside world.

#### Step 3: One-Click Launch
Click the **"Deploy"** button and sign the transaction. The system will automatically match your request with a suitable node. Your app will typically be live within 10-30 seconds.

### Monitoring & Management
*   **Real-time Logs**: View your program's output directly in the console.
*   **Verification**: Click the "Verify" button to see the actual hardware attestation proof, ensuring your privacy is fully protected by genuine hardware.
*   **Scalability**: Increase or decrease resources at any time, or stop the service to cease billing immediately.

---

**Best for**: Private password managers, encrypted databases, or any backend service handling user-sensitive data.
