# LibOS SDK（EGO）

## 引入依赖

{% code title="" %}
```
github.com/wetee-dao/libos-entry/entry/ego
```
{% endcode %}

* `ego.Fs.Encrypt`：在 TEE 内加密数据
* `ego.Fs.Decrypt`：在 TEE 内解密数据
* `ego.Fs.WriteFile`：在 TEE 内写文件
* `ego.Fs.ReadFile`：在 TEE 内读文件

## 更新到最新依赖版本

```bash
go get github.com/wetee-dao/libos-entry@v0.1.1
```



示例：

```go
package main

import (
	"fmt"
	"net/http"

	"github.com/wetee-dao/libos-entry/entry/ego"
)

func main() {
	err := ego.InitLocalEgo()
	if err != nil {
		panic(err)
	}

	/// Use TEE to encrypt data
	v, err := ego.Fs.Encrypt([]byte("hello world"))
	if err != nil {
		panic(err)
	}

	/// Use TEE to decrypt data
	text, err := ego.Fs.Decrypt(v)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(text))

	/// Write data with TEE
	err = ego.Fs.WriteFile("hello.txt", []byte("test"), 0644)
	if err != nil {
		panic(err)
	}

	/// Read data with TEE
	text, err = ego.Fs.ReadFile("hello.txt")
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
