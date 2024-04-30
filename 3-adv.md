# ingress controller
- An Ingress controller is a specialized load balancer for Kubernetes (and other containerized) environments
- ingresses are native objects inside the cluster that can route to multiple services, while load balancers are external to the cluster and only route to a single service
- [App Gw - native ingress controller for AZ](https://learn.microsoft.com/en-us/azure/application-gateway/ingress-controller-overview)

k8s certified management platform - https://kubernetes.io/docs/setup/production-environment/turnkey-solutions/

# AKS BEST PRAC
https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke?tabs=cli
https://gitlab.com/nanuchi/k8s-in-1-hour

# HUB - SPOKE IN AKS
https://techcommunity.microsoft.com/t5/microsoft-developer-community/aks-the-elephant-in-the-hub-amp-spoke-room-deep-dive/ba-p/3635985

# PVT LINK IN AKS
Before Private Link Service integration, users who desired private connectivity from on-premises or other VNETs to their services in the Azure Kubernetes cluster were required to create a Private Link Service (PLS) to reference the Azure Internal LoadBalancer

# SCALING AKS
- Vertical Pod autoscaling provides recommendations for resource usage over time. To manage sudden increases in resource usage, use the Horizontal Pod Autoscaler, which scales the number of pod replicas as needed.
do it via az aks update 

# ENTRA WITH AKS
AKS Cluster Access via entra for secure seamless connection - https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks/baseline-aks#integrate-azure-active-directory-for-the-cluster

- Hands on - https://www.trendmicro.com/cloudoneconformity-staging/knowledge-base/azure/AKS/aks-aad-integration.html

# AZ POLICY WITH AKS
Build in security baseline and best practices via azure policy - https://learn.microsoft.com/en-us/azure/aks/security-controls-policy

# Namespace - 
https://learn.microsoft.com/en-us/answers/questions/128803/how-to-add-namespace-and-my-next-steps-in-azure-ak

# Azure storage - 
https://learn.microsoft.com/en-us/azure/aks/concepts-storage


