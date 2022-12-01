# node -v = v17.6.0
### yarn install 前执行
```
git config --global url.https://.insteadOf ssh://git@
```
### 以下变量加到执行命令前
```
export NODE_OPTIONS=--openssl-legacy-provider
```

> error:0308010C:digital envelope routines::unsupported

> 出现这个错误是因为 node.js V17版本中最近发布的OpenSSL3.0, 而OpenSSL3.0对允许算法和密钥大小增加了严格的限制，可能会对生态系统造成一些影响.
