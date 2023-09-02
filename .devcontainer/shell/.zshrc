# Get ZSH startup time by calling `zprof`
zmodload zsh/zprof

# This repo's folder
ZSHRC_FOLDER="$CODESPACE_VSCODE_FOLDER/.devcontainer/shell"

# Antigen (zsh package manager: https://github.com/zsh-users/antigen)
source "$ZSHRC_FOLDER/antigen.zsh"

# oh-my-zsh
antigen use oh-my-zsh

###################
# ANTIGEN PLUGINS #
###################
# Yarn scripts autocomplete
antigen bundle git
antigen bundle yarn
antigen bundle zsh-users/zsh-syntax-highlighting

# Apply antigen
antigen apply

alias sz='source ~/.zshrc'

# Starship theme
export STARSHIP_CONFIG="$ZSHRC_FOLDER/starship.toml"
eval "$(starship init zsh)"
