# Deploy TEE program on WeTEE

初始化 golang 项目

```
go mod init xxx/ego-demo
```

添加 sgx sdk

```
go get github.com/wetee-dao/libos-entry@v0.1.0
```

编写demo代码 hello.go

```go
package main

import (
	"net/http"

	"github.com/wetee-dao/libos-entry/entry/ego"
)

func main() {
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

编译 二进制程序

```
ego-go build hello.go
```

签名 二进制程序

```
ego sign hello
```

使用 ego 运行程序

```
ego run hello
```

```
docker build -t xxxxxx/ego-hello:dev .
docker push xxxxxx/ego-hello:dev
```
