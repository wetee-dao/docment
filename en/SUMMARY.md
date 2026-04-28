# Table of contents

* [OVERVIEW](README.md)

# 👤 USER DOCS (How to use PulsWeb2)

## 1. Introduction
* [What is PulsWeb2?](user/intro/what-is-wetee.md)
* [Key Benefits: Why PulsWeb2?](user/intro/benefits.md)

## 2. Preparation
* [Setting up your Wallet](user/intro/wallet-setup.md)
* [Access & Quota](user/intro/get-tokens.md)

## 3. Products & Usage
* [Deploy Confidential Service (Apps)](user/products/confidential-service.md)
* [Run Confidential Task (Jobs)](user/products/confidential-task.md)
* [Using GPU Compute](user/products/gpu-compute-service.md)
* [Confidential Storage](user/products/confidential-storage.md)

## 4. Community & Governance
* [Participating in DAO](user/dao/overview.md)
* [Creating Proposals](user/dao/proposals.md)

## ⛏️ Compute Mining

* [Compute Mining: Run `tee-worker` (Confidential Compute)](user/miner/miner-types.md)
* [Supported TEE Devices](user/miner/supported-devices.md)
* [Prepare K3s Environment](user/miner/install-k3s-cluster-on-linux.md)
* [Install PulsWeb2 Worker](user/miner/install-confidential-wetee-worker-operator-in-cluster.md)
* [Setup Attestation (DCAP)](user/miner/install-intel-sgx-tdx-pccs-service-in-cluster.md)
* [Enable GPU Support (Optional)](user/miner/install-nvidia-container-runtime-support-optional.md)
* [Worker Setup Notes](user/miner/staking-ant-mint.md)

## 🛡️ Consensus Mining

* [Run tee-dsecret trusted subnet](user/miner/miner-types.md)
* [Deploy tee-dsecret](user/miner/deploy-tee-dsecret.md)

# 💻 DEVELOPER HANDBOOK

## Architecture Deep Dive
* [Three-Layer Model](dev/architecture/three-layer-model.md)
* [DKG & Side-chain](dev/architecture/dkg-sidechain.md)
* [Proxy Re-Encryption (PRE)](dev/architecture/pre.md)

## Development Guides
* [Convert Docker to TEE Image](dev/guides/docker-to-tee.md)
* [Developing with EGO SDK](dev/golang/libos-ego-sdk.md)
* [Integrate Confidential DKG](dev/guides/run-tee-dkg.md)
