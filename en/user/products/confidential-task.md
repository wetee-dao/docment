# Run Confidential Task (Jobs)

**Confidential Task** is designed for "one-and-done" computing scenarios, such as data analysis, model training, or key generation.

### What is a Confidential Task?
Unlike a Service, a Task automatically shuts down and releases resources once the computation is complete. It is the most cost-effective way to handle privacy-sensitive jobs that don't need to run 24/7.

### Workflow

1.  **Submit Task**: Go to the **"Confidential Task"** section in the console.
2.  **Trigger Conditions**: Set whether the task runs immediately or on a specific schedule.
3.  **Encrypted Processing**: While the task is running, all intermediate data stays within the TEE "Safe Room." After completion, you can choose to have the results encrypted and sent to your email or storage.
4.  **Automatic Billing**: Billing stops the exact moment the task finishes.

### Why choose Confidential Tasks?
*   **Ultimate Privacy**: No traces are left behind. Memory data is wiped as soon as the task ends.
*   **Lower Costs**: Only pay for the active computation time.
*   **High Concurrency**: You can trigger thousands of tasks simultaneously across the global distributed network.

---

**Best for**: Medical image analysis, Multi-Party Computation (MPC), and large-scale data anonymization.
