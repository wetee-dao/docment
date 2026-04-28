# Worker Setup Notes

PulsWeb2 **does not issue a token**. This documentation does not describe any token rewards, staking, or any issuance/incentive model.

If you are setting up a worker node, focus on:

### 1. Hardware & Attestation
- Use supported TEE hardware (e.g. Intel SGX) and keep it enabled in BIOS.
- Ensure attestation services (e.g. PCCS/DCAP) are configured as required by your environment.

### 2. Uptime & Reliability
- Keep the node online and stable.
- Monitor logs and resource usage via your Kubernetes setup.

### 3. Compensation (Environment-specific)
Any incentive / payout / billing model depends on the deployment environment (internal test, partner network, etc.). Refer to the official announcement for the environment you are using.
