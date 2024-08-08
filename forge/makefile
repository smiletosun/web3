# include .env file and export its env vars
# (-include to ignore error if it does not exist)
# 默认环境变量文件
ENV ?= .env.local

# 加载环境变量
include $(ENV)

deploy-local:
	cat $(ENV) > .env
	forge script script/Deploy.s.sol:Deploy --fork-url $(API_URL)  --broadcast -vvvv
	rm .env

deploy-qa:
	cat $(ENV) > .env
	forge script script/Deploy.s.sol:Deploy --rpc-url $(API_URL)  --private-key $(PRIVATE_KEY) --broadcast -vvvv
	rm .env
