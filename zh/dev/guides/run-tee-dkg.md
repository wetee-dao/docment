# Run TEE DKG

### Hardware and Software Requirements

* [CPU List - click to see cpu list](https://ark.intel.com/content/www/us/en/ark/search/featurefilter.html?productType=873&2\_SoftwareGuardExtensions=Yes%20with%20Intel%C2%AE%20ME)
  * Intel 8th generation (Cannon Lake) Core i3, i5, i7, and i9 processors
  * Intel 9th generation (Cascade Lake) Core i3, i5, i7, and i9 processors
  * Intel 10th generation (Comet Lake) Core i3, i5, i7, and i9 processors
  * 2nd Generation Xeon Scalable processors (Cascade Lake) and later generations generally provide SGX capabilities.
* Please utilize Ubuntu 20.04 or 22.04 as the HostOS, and avoid the use of containerized system.

### Setup local enviroment

#### Check Intel SGX support

```
The hardware must support SGX and it must be enabled in the BIOS:

$ sudo apt install cpuid
$ cpuid | grep SGX
      SGX: Software Guard Extensions supported = true
      SGX_LC: SGX launch config supported      = true
   SGX capability (0x12/0):
      SGX1 supported                         = true                       = true
```

* SGX: Software Guard Extensions supported is true if the hardware supports it.
* SGX\_LC: SGX launch config supported is true if the hardware also supports FLC. This is required for attestation.
* SGX1 supported is true if it's enabled in the BIOS.

#### Intel Sgx Setup on Ubuntu 20.04/Ubuntu 22.04 and Ego Setup

> For more information about Ego, please refer to https://docs.edgeless.systems/ego/getting-started/install

```bash
sudo apt install build-essential libssl-dev

sudo mkdir -p /etc/apt/keyrings
wget -qO- https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
sudo apt update

EGO_DEB=ego_1.5.3_amd64_ubuntu-$(lsb_release -rs).deb
wget https://github.com/edgelesssys/ego/releases/download/v1.5.3/$EGO_DEB
sudo apt install ./$EGO_DEB build-essential libssl-dev

sudo mkdir /opt/wetee-worker
sudo chmod 777 /opt/wetee-worker
```

#### Set golang env

```bash
# Install golang 1.21 ,ubuntu 22.04 default golang version is 1.13
sudo apt install golang-1.21

# Set up the Golang environment, and/or consider adding it to the .bashrc or .zshrc file in the home directory.
export GOROOT=/usr/lib/go-1.21/
export PATH=$PATH:$GOROOT/bin
```

### Run DKG

```bash
sh hack/node1.sh
```
