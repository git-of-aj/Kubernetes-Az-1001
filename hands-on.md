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

