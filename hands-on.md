![image](https://github.com/git-of-aj/Kubernetes-Az-1001/assets/76782360/2b540172-da91-431b-884b-88d31dec6610)
- ` yOu access at http://ext-ip:8081`
- ![image](https://github.com/git-of-aj/Kubernetes-Az-1001/assets/76782360/692090fd-0308-4893-830f-edba6ec9e931)
- `Maybe- shows NAT 8081:30000`


----------------
# Create Nginx via CLI 
```yml
kubectl create namespace nginx
kubectl create deployment nginx-deployment --replicas=3 --image=nginx --port=80 -n nginx 
kubectl expose deployment nginx-deployment --name=nginx-service --type=LoadBalancer --port=80 --protocol=TCP -n nginx
kubectl get all -n nginx
kubectl get pods -l app=nginx
kubectl get service -n nginx
```

# Create my app - 
# ACR
docker build -f slim-Dockerfile -t oj09/python-app:v2 .

docker run -p 80:5000 --rm oj09/python-app:v2

$env:acr='aondemo008.azurecr.io'
echo $env:acr

az login
az acr login --name $env:acr
>> Login Succeeded

Use docker tag to create an alias of the image
docker tag oj09/python-app:v2 $env:acr/calculator 

>> Above creates two images 
REPOSITORY              TAG       IMAGE ID       CREATED          SIZE
aondemo008/calculator   latest    bcfcc304913e   19 minutes ago   137MB
oj09/python-app         v2        bcfcc304913e   19 minutes ago   137MB

- just create a acr, repo with name auto created

- Purpose: This command is used to push an already built Docker image to a Docker registry, including Azure Container Registry (ACR).
 docker push $env:acr/calculator:latest

- az acr build --registry Command
Purpose: This command is used to build container images directly within Azure Container Registry (ACR) and push them to the ACR instance in one integrated operation.


 az acr repository delete --name myregistry --image samples/nginx:latest
 docker rmi $env:acr/calculator:latest

 > connected registry (A feature of ACR) is an on-premises or remote replica that synchronizes container images and other OCI artifacts with your cloud-based Azure container registry. Use a connected registry to help speed up access to registry artifacts on-premises and to build advanced scenarios, for example using nested IoT Edge.

 # AKS
 - Install kubectl locally using the az aks install-cli command.
 az aks install-cli

 az aks create --resource-group docker --name myAKSCluster --node-count 2 --generate-ssh-keys --attach-acr $env:acr
 NOTE: it requires only acr name so remove azurecr.io

 - Now connect 
 az aks get-credentials --resource-group docker --name myAKSCluster
 Merged "myAKSCluster" as current context in C:\Users\itsaa\.kube\config

 [docker desktop not supported on windows](https://forums.docker.com/t/i-am-using-docker-windows-on-windows-server-2019-but-it-seems-latest-version-of-docker-dont-has-support/139478)

- Helps you get full path of acr = name.azurecr.io
 az acr list --resource-group docker --query "[].{acrLoginServer:loginServer}" --output table

 - kubectl apply -f aks-store-quickstart.yaml
 ## Error
 [Image Pull erorr guide = AKS ](https://learn.microsoft.com/en-us/troubleshoot/azure/azure-kubernetes/extensions/cannot-pull-image-from-acr-to-aks-cluster)
 - Can you also try to validate by logging into the node and pulling the Image manually , just to check if it goes through ?
 > az aks update -n <AKS_NAME> -g <Resource_group_name> --attach-acr <acr_name>
 - aks imagepullbackoff
 > You can find the reason for the failure from : kubectl describe pod podname:
Probably one of the reason will be something like this:

Warning Failed 7s kubelet Failed to pull image "nginx:1.14.2": rpc error: code = NotFound desc = failed to pull and unpack image "docker.io/library/nginx:1.14.2": no match for platform in manifest: not found

which means, that particular nginx image with tag 1.14.2 is not found.

 - aks errimagepull

```pwsh

It is because Docker is now paid .. to install Docker community edition you can try the following in PowerShell as Administrator -

Install-WindowsFeature -Name Containers

Enable-WindowsOptionalFeature -Online -FeatureName containers -All

Install-Module -Name DockerMsftProvider -Repository PSGallery -Force

Invoke-WebRequest -UseBasicParsing "">https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1

.\install-docker-ce.ps1

Invoke-WebRequest "">https://github.com/docker/compose/releases/latest/download/docker-compose-darwin-x86_64" -UseBasicParsing -OutFile $env:SystemDirectory\docker-compose.exe

 

Restart-Computer
```

