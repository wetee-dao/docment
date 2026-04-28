# Using GPU Compute

PulsWeb2 doesn't just offer CPU computing; it also supports powerful **Confidential GPU** resources. This is essential for modern AI training and inference.

### Core Features
*   **Hardware Privacy**: Supports GPU isolation based on NVIDIA TEE technology, ensuring model parameters and input data remain encrypted in the GPU's memory.
*   **Top Performance**: Gain direct access to physical GPUs with minimal virtualization overhead.
*   **Flexible Access**: From high-end H100s to consumer-grade 4090s, choose the node that fits your budget.

### How to Enable?
1.  When creating a **Confidential Service** or **Task**.
2.  In the **Resources** options, check the **"Enable GPU"** box.
3.  Select the desired GPU model and memory size.
4.  Deploy your application.

### Important Notes
*   **Driver Support**: Ensure your Docker image includes the appropriate CUDA runtime environment.
*   **Costs**: GPU workloads typically cost more than CPU-only workloads, depending on the billing model of your environment.

---

**Best for**: Private LLM deployment, encrypted video rendering, and bioinformatics.
