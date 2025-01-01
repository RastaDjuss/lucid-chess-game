#!/bin/bash
chmod +x install-node16.sh
./install-node16.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc
nvm install 16.20.2
nvm use 16.20.2
node -v
npm -v
