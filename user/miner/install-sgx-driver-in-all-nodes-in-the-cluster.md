# Install SGX driver in all nodes in the cluster

{% code title="1. Install base pkg" overflow="wrap" %}
```bash
sudo apt install curl build-essential libssl-dev
```
{% endcode %}

{% code title="2. Install sgx repp key" overflow="wrap" %}
```bash
sudo curl -s https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | sudo tee /etc/apt/keyrings/intel-sgx-keyring.asc > /dev/null
sudo echo "deb [signed-by=/etc/apt/keyrings/intel-sgx-keyring.asc arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/intel-sgx.list
```
{% endcode %}

{% code title="3. Install sgx driver" overflow="wrap" %}
```bash
sudo apt-get update && sudo1 apt-get install -y libsgx-dcap-ql libsgx-dcap-default-qpl  libsgx-enclave-common 
```
{% endcode %}
