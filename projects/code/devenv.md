---
next:
    text: "Godot x Neovim"
    link: "/projects/code/godot_x_neovim"
---

# My Dev Setup

Is my setup really interesting? No.

Why am I writing about it? Because the more I verbalize my a topic, the more I can understand it, and the more that I slowly evolve it from what I consider "basic bitch" to... well, mine.

Vim, at least for me, isn't really about "look at how cool I am" as opposed to "I really want to customize what I'm using". It's also, for me personally, a way that I learn and master my tools completely from the ground up. I could use VS Code or JetBrains (I do, sometimes), and I could probably do just fine in them, but it doesn't force me to learn the inner workings of my tools, troubleshoot when something goes wrong, etc.

Finally, I hate using a mouse. I have to for a lot of things and I'm okay with that, but if I can choose, keyboard is my go to. I am someone who has always tried to learn and remember shortcuts for the tools I use, even before I got into Vim.

For the longest time, Vim was always a "this is what I have to use on my VPS", until I started to learn about how extensible it was. That learning only started within the past year or two. So... yes, I talk about Vim because I want to better understand it myself.

## Github Repo
My dotfiles are stored on a public GitHub repo: [dade/dotfiles](https://github.com/dade/dotfiles)

Key points are that this setup is similar to NeoVim Quickstart, which I recommend you use as a starting boilerplate, and then modified for my needs and split into individual files for easier management of specific plugins.

It also contains a setup for using `nvim` as an external editor for the Godot game engine. You can read the setup in [Godot x NeoVim](/projects/code/godot_x_neovim)

## Brief Explanations

The setup is simple. Inside of the `~\AppData\Local\nvim` directory, we have `init.lua` that requires/loads the `core/` directory, and `lazy.lua` from `lua/badgr/` dirs.

- `lazy.lua` is pretty much the same as folke's default installation info on the lazy.nvim docs. I load in `badgr.plugins`, which is the directory that all of my different modules are split into.
- `core/` contains my basic implementations before plugins. This is where my `vim.opt` and `vim.keymap` that don't require any plugins. This is partially optimized to my workflows, but doesn't really contain any mind blowing stuff
    - `oo` and `OO` (double-o and double-shift-o) are just simple keymaps to start editing on next or previous lines, but also is used to add surrounding line breaks in case I want non-contiguous code
    - `s` most people use to start a search/fuzzy-find patter, but I just got too used to making these my splits, so that's what I use it for. `f` has become my 'find' key nowadays
The rest is consistent, or similart to, Quickstart

### Plugins
The rest is rather standard, but a list of the plugins that I use in case you are curious about which ones might be useful for you.

Personal plugin manager of choice is Lazy, but you can use Packer or whatever else. It's all good.

- `folke/lazydev.nvim` - mostly I use this for the faster auto-completion, but it does some nice things
- `nvim-telescope/telescope.nvim` - has a few dependencies in the file, but the main thing here is the incredibly powerful navigation through fuzzy searches.
    - You will need the `telescope-fzf-native.nvim` plugin to work. On windows, this required a bit of work setting up a C compiler, but otherwise, that was the only 'faff'
- `stevearc/conform.nvim` - formatter. It's probably the best one out there
- `Saghen/blink.cmp` - code completion
- `willamboman/mason.nvim` - LSPs and Linters (I think the project is now on `mason-org/mason.nvim`)
    - `mason-workaround.lua` - this is a fix I found on reddit for the breaking changes that 2.x brought in, this goes away when Lazy updates, most likely
- `neovim/nvim-lspconfig.nvim` - part of the LSP setup with mason. Pretty sure this one is required for the rest to work
- `nvim-tree/nvim-tree.lua` - I like to sometimes have a visual representation of my file structure, because I don't always remember what I'm looking for. That said, this isn't often used. Most fuzzy find my files with telescope.
- `mfussenegger/nvim-dap` - Debug adapter. This is used for the Godot x Neovim setup.
- `folke/whick-key.nvim` - shows up a little menu when you start to press keymap combinations to lead you through. i.e., pressing your leader key shows what you can press next to navigate through your configured keymaps. Useful when starting out
- `folke/trouble.nvim` - neat little plugin to give better quickfix list functionality
- `folke/todo-comments.nvim` - better comment highlighting, and gives the ability to cycle next and previous note
- `habamax/vim-godot` - better syntax highlight, indent management, etc. for godot

### The "Many-In-One" Plugin
`mini.nvim` is a powerhouse of a plugin series from `echasnovski`. These are different takes on the most common plugins out there, but they are all so well-made for working cohesively together that I have moved away from those with similar funcitonality. I advise taking a really good look through all of the available plugins there, but these are the ones that I use:
- `mini.ai` - not AI, but the "around" and "inside" identifiers in vim
- `mini.move` - Alt + navigation keys to move selected line(s)
- `mini.surround` - super fast and powerful "surround" actions
- `mini.splitjoin` - quick and easy multi-line-to-single-line conversion for code
- `mini.pairs` - very slick auto bracket / auto-pairs 

Optional, just for "slickness"
- `mini.animation` - moves your cursor aross the screen rather than teleports it
- `mini.cursorword` - highlights word underneath cursor
- `mini.indentscope` - draws a line along the scope of your current code indent. Simple, but it also animates, so it's just that extra bit of flash. Completely unnecessary, but wonderful in my opinion
