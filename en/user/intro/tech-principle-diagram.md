# Technical Principles

This page describes the core component boundaries of PulsWeb2 and the primary data/key flow during workload execution. It covers on-chain scheduling/auditing, trusted-subnet key collaboration (DKG/PRE), and the TEE execution layer.

## 1) Component Relationship (High-Level)

<div class="mermaid">
flowchart LR
  U[User/Developer] --> D[dApp / API]

  subgraph L1["Layer_1: Main_Chain (Rules/Settlement/Scheduling/Auditing)"]
    MC[On-chain modules/contracts]
    SCH[Task scheduling & state]
    AUD["Audit records (Attestation/proof summary)"]
    MC <--> SCH
    SCH --> AUD
  end

  D --> MC

  subgraph L2["Layer_2: Trusted_Subnet/Side_chain (Key collaboration)"]
    DS[tee-dsecret trusted subnet]
    DKG["DKG (Distributed Key Generation)"]
    PRE["PRE (Proxy Re-Encryption/Authorization)"]
    DS --- DKG
    DS --- PRE
  end

  subgraph L3["Layer_3: Execution_Layer (TEE Workers / K8s)"]
    K8S[K3s/K8s]
    OP[Worker Operator]
    W["TEE Worker (SGX/TDX/GPU TEE)"]
    APP["Confidential workload (Service/Task)"]
    K8S --> OP --> W --> APP
  end

  SCH --> OP
  DS -->|Key shares / re-encryption authorization| W
  W -->|Attestation / proof summary| AUD
</div>

## 2) Execution Flow (Overview)

<div class="mermaid">
sequenceDiagram
  autonumber
  participant U as User/Developer
  participant D as dApp/API
  participant MC as Main Chain (Scheduling/Settlement/Auditing)
  participant DS as tee-dsecret (DKG/PRE)
  participant OP as Worker Operator (K8s)
  participant W as TEE Worker
  participant APP as Confidential workload (Service/Task)

  U->>D: Submit task / deploy service (image, config, permissions)
  D->>MC: Submit on-chain request (billing, permissions, scheduling params)
  MC->>OP: Dispatch result (target worker/resources)
  OP->>W: Start workload (inside TEE)
  W->>MC: Report attestation/proof summary

  Note over U,DS: When keys or confidential data are involved
  U->>DS: Trigger DKG or grant authorization (PRE)
  DS-->>W: Provide key material per policy to verified workload
  W->>APP: Use keys inside TEE to complete computation
</div>

## 3) Visibility and Verifiability

- **On-chain visibility**: requests, state transitions, billing/settlement records, and attestation/proof summaries (for third-party verification).
- **Confidentiality boundary**: plaintext data/keys/model weights are intended to remain within the TEE boundary; the trusted subnet uses DKG/PRE to reduce single-point exposure of full secrets.
- **Verification checkpoints**: before key release or data access, use on-chain attestation/proof summaries to verify the environment measurements and workload identity against expected values.

