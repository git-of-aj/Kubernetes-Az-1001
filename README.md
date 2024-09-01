```sh
export RANDOM_ID="$(openssl rand -hex 3)"
    5  export MY_RESOURCE_GROUP_NAME="myAKSResourceGroup$RANDOM_ID"
    6  export REGION="centralindia"
    7  export MY_AKS_CLUSTER_NAME="myAKSCluster$RANDOM_ID"
    8  export MY_DNS_LABEL="mydnslabel$RANDOM_ID"
    9  az group create --name $MY_RESOURCE_GROUP_NAME --location $REGION
   10  kubectl 
   11  az aks create --resource-group $MY_RESOURCE_GROUP_NAME --name $MY_AKS_CLUSTER_NAME --node-count 1 --generate-ssh-keys
   12  az aks get-credentials --resource-group $MY_RESOURCE_GROUP_NAME --name $MY_AKS_CLUSTER_NAME 
   13  kubectl get nodes
   14  kubectl create ns aj
   15  kubectl create deployment doubt-solving --replicas=3 --image=nginx --port=80 -n aj
   16  kubectl get deployments
   17  kubectl get deployments -n aj
```

# Kubernetes-Az-1001
- [How ALl Azure + AKS service looks like](https://learn.microsoft.com/en-us/training/modules/plan-azure-kubernetes-service-deployment/2-azure-kubernetes-service)
![](https://learn.microsoft.com/en-us/training/wwl-azure/plan-azure-kubernetes-service-deployment/media/kubernetes-architecture-components-1-a5c3092e.png)

# Flow
0. Docker
- nginx image pull create 
- node (create, login)
- no data here (mount vol) => make change in file auto shows 
- create Dockerfile
1. K8s [Use Copy]
- inntro (problem solved / cluster architecture)
- AKS Intro
- AKS components (diagram): Web App Example
- create AKS via CLI
- Create Nginx via Kubectl
- Create Your App via YAML
> now Module 1 completed
2. Azure with K8s
- create and push a docker image to ACR
3. Follow TOC 
