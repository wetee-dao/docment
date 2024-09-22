# Deploy TEE program on the cloud

## Prepare machines that support SGX

CPU Support

* Intel 8th generation (Cannon Lake) Core i3, i5, i7, and i9 processors
* Intel 9th generation (Cascade Lake) Core i3, i5, i7, and i9 processors
* Intel 10th generation (Comet Lake) Core i3, i5, i7, and i9 processors
* 2nd Generation Xeon Scalable processors (Cascade Lake) and later generations generally provide - SGX capabilities.

## Install Ubuntu 20.04/22.04 and the ego programming environment

1\. Install base pkg

```
sudo apt install curl build-essential libssl-dev
```

2\. Install sgx repp key

```
sudo curl -s https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
sudo echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
```

3\. Install sgx driver

```
sudo apt-get update && sudo1 apt-get install -y libsgx-dcap-ql libsgx-dcap-default-qpl  libsgx-enclave-common 
```

```
sudo mkdir -p /etc/apt/keyrings
wget -qO- https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
sudo apt update
EGO_DEB=ego_1.5.3_amd64_ubuntu-$(lsb_release -rs).deb
wget https://github.com/edgelesssys/ego/releases/download/v1.5.3/$EGO_DEB
sudo apt install ./$EGO_DEB build-essential libssl-dev
```

## Initialize a Golang project

```
go mod init xxx/ego-demo
```

## Add SGX SDK to the project

```
go get github.com/wetee-dao/libos-entry@v0.1.0
```

## Write demo code named hello

```go
package main

import (
	"net/http"

	"github.com/wetee-dao/libos-entry/entry/ego"
)

func main() {
	// ADD TEE sdk
	err := ego.InitLocalEgo()
	if err != nil {
		panic(err)
	}

	http.HandleFunc("/", resourceHandler)
	err = http.ListenAndServe(":8999", nil)
	if err != nil {
		panic(err)
	}
}

func resourceHandler(w http.ResponseWriter, req *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("hello world"))
}

```

## Compile into a binary program

```
ego-go build hello.go
```

## Sign the binary program

```
ego sign hello
```

## Run the program using ego

```
ego run hello
```

## Register Azure Cloud TEE computing server

Select DC2s\_v2 size 选择DC2s\_v2大小

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Test  in azure DC2s\_v2 virtual machine.

<figure><img src="../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

Install ego

1\. Install base pkg

```
sudo apt install curl build-essential libssl-dev
```

2\. Install sgx repp key

```
sudo curl -s https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
sudo echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
```

3\. Install sgx driver

```
sudo apt-get update && sudo1 apt-get install -y libsgx-dcap-ql libsgx-dcap-default-qpl  libsgx-enclave-common 
```

## Upload app and run app

```
ego run hello
```
