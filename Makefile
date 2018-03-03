SHELL=/bin/bash

.DEFAULT_GOAL := help

.PHONY: help
help:
	@grep -E '^[a-zA-Z-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "[32m%-12s[0m %s\n", $$1, $$2}'

.PHONY: migrate
migrate: ## Runs migrations
	@truffle migrate

.PHONY: build
build: migrate ## Builds the contract
	@truffle compile

.PHONY: deploy
deploy: build ## Deploy the contract
	@truffle deploy

.PHONY: system-deps
system-deps: ## Installs system dependencies
	@npm install -g truffle ethereumjs-testrpc

.PHONY: deps
deps: ## Installs project dependencies
	@npm install

.PHONY: it
it: deploy ## Runs the server
	@npm run dev