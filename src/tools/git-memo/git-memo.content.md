## 常用指令

```shell
git config --global init.defaultBranch main                默认main分支
git config --global user.name "luckyNwa"                   本人账号名
git config --global user.email "1656213092@qq.com"         本人双邮箱
git config --global user.email "2428284043@qq.com"
git clone url                                              克隆主仓库
git init                                                   初始化仓库
git add .                                                  全部加入暂存区
git branch -M main                                         创建main分支并切换
git commit -m "feat: 这里是备注"                           提交
git remote add origin url                                  添加远程地址
git push -u origin main                                    提交到远程main

git clone -b 分支名 地址                                   克隆分仓库
git status -s                                              查看状态
git checkout  远程分支名称                                 将远分支下本地
```

## SSH 配置

1、打开 git bash 粘贴下面代码，邮箱记得改自己的

```shell
ssh-keygen -t rsa -b 4096 -C "1656213092@qq.com"
ssh-keygen -t rsa -b 4096 -C "2428284043@qq.com"
```

然后回车 3 次 生成文件在 C:\Users\Administrator\\.ssh 中打开 id_rsa.pub 复制里面内容

2、登录 github 点头像-setting-ssh and... -New SSH key

将刚刚复制的粘贴到 key 对应文本框 在 title 文本框里任意写一个名称

3、在 bash 里输入

```shell
ssh -T git@github.com
```

在输入 yes 就会欢迎，配置成功
