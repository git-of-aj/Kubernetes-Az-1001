npm init -y
 npm install express
 node index.js

 Make chnage in Index.js ==> Ctrl-C -> node index.js again to show up changes ! in localhost


 docker run -p 80:3000  -v "C:\Users\anana\Downloads\k8s\gpt:/app" --rm -it node bash      
 -- creates folder with name app under /


 create DOckerFile
 after creating =

 docker run --name aj --rm -p 80:3000  test_node
 docker stop aj 
 docker build -t test9798.azurecr.io/node_app:v1 .
 docker push test9798.azurecr.io/node_app:v1

# Create a resource group (if you haven't already)
az group create --name aks-demo --location centralindia

# Create AKS cluster
az aks create --resource-group aks-demo --name aks-v1 --node-count 2 --enable-addons monitoring --generate-ssh-keys

# in local computer show error - 
> gpt > kubectl apply -f deployment.yaml
Unable to connect to the server: dial tcp [::1]:8080: connectex: No connection could be made because the target machine actively refused it.


kubectl get deployments --all-namespaces=true
 kubectl get pods
 kubectl describe pods id
kubectl apply -f services.yaml
kubectl get services


You get Error - ImagePullBackOff in AKS
when try to deploy Deploymnet.yaml
Integrate ACR - 
# https://learn.microsoft.com/en-us/azure/aks/cluster-container-registry-integration?tabs=azure-cli


-------------------

--image aks-store-demo/product-service:latest: Specifies the name and tag of the Docker image to be built. The image will be tagged as aks-store-demo/product-service with the tag latest.
./src/product-service/: Specifies the path to the directory containing the Dockerfile and application code for the product service.

az acr build --registry $ACRNAME --image aks-store-demo/product-service:latest ./src/product-service/
