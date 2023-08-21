---
title: Python教程 | 环境搭建
date: 2023-05-12 23:25:08
tags:
    - "教程"
    - "Python"
categories:
- "信息技术"
- "Python"
---
本文章将介绍Python开发环境的搭建
<!-- more -->
## 主要内容
- Cpython的下载、安装和配置
- VS code的安装、配置
## 配置Cpython解释器
Cpython是官方提供的python解释器，附带了许多实用工具。
### 下载
1. 打开Cpython官方[下载](https://www.python.org/downloads/)链接  
2. 选择Python版本，这里以[Python 3.11.3](https://www.python.org/downloads/release/python-3113/)为例  

!!! warning ""
    如果您使用`Windows 7`，那么你必须使用`Python 3.4`或更低版本。   

![选择Python版本](https://s2.loli.net/2023/05/13/YuesGmqkhZJNRgV.png)
3. 下拉，选择适合你操作系统的发行版本。如果你并不知道要选择哪个版本，那么`Windows installer (64-bit)`可能是个很好的选择。
![选择Python发行版本](https://s2.loli.net/2023/05/13/a5DAbdiWmnE9fyo.png)
### 安装
1. 下载完文件后，双击运行。
![安装程序](https://s2.loli.net/2023/05/13/F8ylu3MSXOVfdmp.png)
建议勾选`Add python.exe to PATH`，然后选择`Install Now`
2. 选择`Disable path length limit`（可选）
### 检查
安装完成后使用快捷键`win+r`，输入`cmd`，运行。
在打开的命令提示符中输入`python`，出现`>>>`即为安装成功。
![命令提示符](https://s2.loli.net/2023/05/13/pGQ5soH1WKz7MbL.png)
## vs code安装、配置
### 安装
[点此](https://code.visualstudio.com/)前往VS code官方站点，选择`Download for Windows`即可下载。

### 配置
安装完成后，搜索`vs code`即可打开
![搜索vscode](https://s2.loli.net/2023/05/13/XwGV1N4TkuLzQJC.png)
打开之后，在`插件`中搜索`Chinese (Simplified) (简体中文)`以及`Python Extension Pack`，点击第一项的`Install`。之后重启，即可。
![安装插件](https://s2.loli.net/2023/05/13/6rTJiL9WlCGDu5f.png)
