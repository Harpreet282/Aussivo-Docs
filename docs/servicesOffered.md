---
title: Services & Operational Workflows
---

Aussivo offers a secure, transparent, and fully on-chain process for hosting and deploying services — from wallet login to infrastructure activation.

## End-to-End Hosting Workflow

Here’s how Aussivo handles service provisioning — in 8 streamlined steps:

1. **Wallet Login :**
Users log in using crypto wallets like Metamask or WalletConnect. No passwords — just secure wallet signatures.

2. **Service Selection :**
Users choose from pre-configured templates for compute, storage, or full hosting setups. Custom parameters can be added.

3. **Meta-Transaction Creation :**  
The system creates a signed meta-transaction with all selected options and instructions.

4. **Relayer Submission :**  
Aussivo’s Gastank relayer receives the meta-tx, wraps it into a blockchain-ready transaction, and submits it to the SPoS chain.

5. **Smart Contract Execution :**  
Smart contracts handle billing, trigger provisioning, and log usage events — all on-chain and fully auditable.

6. **Cloud Integration :**  
Aussivo’s orchestrator invokes APIs to launch resources — whether on Aussivo’s native data centers, AWS (with Nitro Enclave), or Alibaba Cloud.

7. **Security Agent Deployment :**  
The Advanced Security Agent (ASA) is auto-installed on new instances. It performs integrity scans and records results on-chain.

8. **Live Dashboard Monitoring :**  
Users can monitor everything in real time — from service activation and endpoints to billing, uptime, and security logs.

<img src="/img/full-hosting.png" alt="Data Flow Diagram" width="1000" height="600" />

## Security Agent Workflow ⚙️

### Tiered Operation Table

| **Stage**                | **Basic Tier**                                           | **Enhanced Tier (Nitro Enclave)**                             |
|--------------------------|----------------------------------------------------------|---------------------------------------------------------------|
| **Deployment Mechanism** | Deployed as standard VM agent service                    | Deployed within AWS Nitro Enclave with Trusted Launch         |
| **Integrity & Malware Scans** | File systems, rootkits, network checks              | Same + hardware-based attestation environment                 |
| **Hash Signing & Storage** | Encrypted software key inside VM                      | Tamper-resistant enclave key                                  |
| **On-Chain Anchoring**   | Relayer posts signed hash                                | Relayer posts enclave-signed hash                             |
| **Verification & Audit** | SPoS nodes verify signature integrity                    | SPoS nodes verify hardware attestation                        |

<img src="/img/security_agent.png" alt="Data Flow Diagram" width="800" height="600" />