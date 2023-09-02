# Docker image
ARG VARIANT=18-bookworm
FROM mcr.microsoft.com/devcontainers/typescript-node:1-${VARIANT}

USER root

# Set zsh as the main shell
RUN chsh -s /usr/bin/zsh

# Source zshrc from .devcontainer/shell/.zshrc
RUN echo "source $CODESPACE_VSCODE_FOLDER/.devcontainer/shell/.zshrc" >> /root/.zshrc