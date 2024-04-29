# Basics 
- Azure automatically creates and configures & manages a control plane for you at no cost
- Azure takes care of critical operations like health monitoring and maintenance, and you only pay for the AKS nodes that run your applications.
-  [MS DOCS - WHEN TO USE AKS](https://learn.microsoft.com/en-us/azure/aks/what-is-aks#when-to-use-aks)
- deployment defines the number of pod replicas to create
> To ensure your cluster operates reliably, you should run at least two nodes in the default node pool.
- Kubernetes supports both stateless and stateful applications.
- [Core Concepts Docs](https://learn.microsoft.com/en-us/azure/aks/concepts-clusters-workloads#package-management-with-helm)

**Namespace**: Users can only interact with resources within their assigned namespaces.
- Kubernetes resources, such as pods and deployments, are logically grouped into namespaces
