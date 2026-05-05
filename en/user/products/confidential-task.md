# Run Confidential Task (Jobs)

**Confidential Task** targets batch/ephemeral workloads such as data analysis, model training, or key generation.

### What is a Confidential Task?
Unlike a Service, a Task shuts down and releases resources after completion. Cost characteristics depend on the active billing rules and resource allocation.

### Workflow

1.  **Submit Task**: Go to the **"Confidential Task"** section in the console.
2.  **Trigger Conditions**: Set whether the task runs immediately or on a specific schedule.
3.  **Processing and result delivery**: intermediate data is processed within the TEE boundary; result encryption and delivery options depend on supported product capabilities.
4.  **Automatic Billing**: Billing stops the exact moment the task finishes.

### Why choose Confidential Tasks?
*   **Resource release**: resources are released after completion.
*   **Cost model**: billing is based on task execution; exact units depend on current rules.
*   **Concurrency**: tasks can be submitted concurrently; effective limits depend on quotas, resource supply, and scheduling policy.

---

**Best for**: Medical image analysis, Multi-Party Computation (MPC), and large-scale data anonymization.
