# Docker image
ARG VARIANT=18-bookworm
FROM mcr.microsoft.com/devcontainers/typescript-node:1-${VARIANT}

# Set zsh as the main shell
RUN chsh -s /usr/bin/zsh

# Source zshrc from .devcontainer/shell/.zshrc
echo "source $CODESPACE_VSCODE_FOLDER/.devcontainer/shell/.zshrc" >> ~/.zshrc