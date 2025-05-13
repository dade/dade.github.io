---
prev:
    text: "Dev Environment"
    link: "/projects/code/devenv"
next: false
lastUpdated: true
---

# Godot x Neovim Setup
## Preface

This relies on an already configured nvim environment and an understanding of how to install and configure plugins.

Mine is also set up differently to how nvim's quickstart tutorial/base configs are, so it might be confusing if you're new to nvim. Take a look in [My Dev Env](/projects/devenv) write-up for a better understanding.

## Caveats
::: danger
Because I've not worked out an elegant way to do this with the Exec Flag yet, this will only work if the Godot project directory ***DOES NOT*** contain spaces. This is good practice in general but needs to be pointed out.
:::

## NeoVim Setup
First thing's first, you're going to want to make sure that neovim is set up and ready to go, and that everything is running smoothly!

**Plguins I will use:**
- nvim-treesitter/nvim-treesitter
- nvim-lspconfig
- vim-godot

### `nvim-treesitter.nvim`
First, in nvim-tressiter's configs, we either want to make sure that `ensure_installed` has the Godot-specific packages. This will let us do syntax highlighting.
```lua
ensure_installed = {
    -- ...
    "gdscript",
    "godot_resource",
    "gdshader",
},
```

Alternatively, if you're less worried about auto-installing packages based on the opened filetypes (those that are supported by treesitter), then you can simple set

```lua
-- ..
ensure_installed = {
    -- ...
},
auto_install = true
```

## Vim-Godot
For Godot tabbing, the setup that I use can handle it, but it's not perfect, so the advice I found on reddit was to use `habamax/vim-godot`

::: warning
I dissect my configs into individual files, so if you're using a single file setup like nvim-kickstart, you don't need to use `return` for the object.
:::

```lua
return {
	"habamax/vim-godot",
	event = "VimEnter",
}
```

## Nvim-LSPConfig

Somewhere within the config setup for nvim-lspconfig, add this require block. This will be needed to set up a remote server in Godot where you can receive the transmitted script files.

```lua
require("lspconfig").gdscript.setup(capabilities, {
    name = "godot",
    cmd = {
        "ncat",
        "127.0.0.1",
        6005,
    },
})
```

## Nvim-DAP

A little module to give Debug Adapter Protocol functionality to nvim. Simple setup here, but you want to ensure that the settings are good for Godot. Here are mine:

```lua
return {
	"mfussenegger/nvim-dap",
	config = function()
		local dap = require("dap")
		dap.adapters.godot = {
			type = "server",
			host = "127.0.0.1",
			port = 6006,
		}

		dap.configurations.gdscript = {
			{
				type = "godot",
				request = "launch",
				name = "Launch Scene",
				project = "${workspaceFolder}",
				launch_scene = true,
			},
		}
	end,
}
```

## Godot (4.4.x) Setup (Windows Only)
Now, we have to change a few settings in Godot to make the engine send scripts to an external editor. When you open up the Editor Settings, ensure that the option to **Advanced Settings** is enabled in the top-right.

In Godot, open up the following:

- **Editor**
    - **=> Editor Settings...**
        - **=> Text Editor**
            - **=> External**
                - **-> Use External Editor:** `On`
                - **-> Exec Path:** `nvim`
                - **-> Exec Flags:** `--server 127.0.0.1:6004 --remote-send "<C-\><C-N>:n {file}<CR>{line}G{col}|"`
                    - Important to note that 6004 is the server port for when you link nvim to it. This is done in the next step, launching nvim with the --listen option
        - **=> Network**
            - **=> Debug**
                - Ensure both of these settings are default
                - **Remote Host:** `127.0.0.1`
                - **Remote Port:** `6007`
            - **=> Debug Adapter**
                - **Request Timeout:** `1000`
                - **Sync Breakpoints:** `On`
                - Ensure **Remote Port** is default (6006)

Now your Script tab in Godot should no longer display the script!

### Opening Files in Neovim
When you load up neovim now (and I generally advise doing this in the game's project folders as a matter of course) you want to start with the command:

`nvim --listen 127.0.0.1:6004`

### And you're done...

Now with all of this set, while you have nvim running with the --listen option, opening script files in Godot will pass it straight to the editor, configured with all of your favorite plguins, keymaps, and motions that make code editing smoother (provided you're already a vim user, of course...)
