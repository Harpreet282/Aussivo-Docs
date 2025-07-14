---
title: Services & Operational Workflows
---

## Full Hosting Lifecycle Flow

An eight-stage process engineered for reliability, auditability, and security:

1. **Wallet Authentication:** Front-end authenticates user via wallet signature (Metamask, WalletConnect, etc.).

2. **Service Catalog Selection:** User picks compute, storage, or hosting templates; optionally configures custom parameters.

3. **Meta-Transaction Drafting:** Front-end constructs and signs meta-transaction payload.

4. **Relayer Submission:** Gastank node receives meta-tx, wraps it in a native transaction, and broadcasts to SPoS.

5. **On-Chain Smart Contract Execution:** Billing, provisioning triggers, and usage counters are recorded as blockchain events.

6. **Provider Integration:** Orchestrator microservice invokes APIs on Aussivo DC, AWS (with Nitro Enclave), or Alibaba Cloud to instantiate resources.

7. **Security Agent Deployment:** ASA installs on the new resource, performs initial integrity scans, and anchors hashes on-chain.

8. **Service Activation & Monitoring:** Front-end updates user dashboard with resource endpoints, provisioning status, and security attestation history.

<img src="/img/hosting.png" alt="Data Flow Diagram" width="1000" height="500" />

## Security Agent Workflow ⚙️

### Tiered Operation Table

| **Stage**                | **Basic Tier**                                           | **Enhanced Tier (Nitro Enclave)**                             |
|--------------------------|----------------------------------------------------------|---------------------------------------------------------------|
| **Deployment Mechanism** | Deployed as standard VM agent service                    | Deployed within AWS Nitro Enclave with Trusted Launch         |
| **Integrity & Malware Scans** | File systems, rootkits, network checks              | Same + hardware-based attestation environment                 |
| **Hash Signing & Storage** | Encrypted software key inside VM                      | Tamper-resistant enclave key                                  |
| **On-Chain Anchoring**   | Relayer posts signed hash                                | Relayer posts enclave-signed hash                             |
| **Verification & Audit** | SPoS nodes verify signature integrity                    | SPoS nodes verify hardware attestation                        |
