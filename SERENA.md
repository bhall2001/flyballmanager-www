# Serena MCP Server - Quick Reference

This repository uses the Serena MCP server for enhanced AI-assisted development.

## Quick Start

1. **Restart Claude Code** - The server will auto-start (uv is already installed)
2. **Access Dashboard**: http://localhost:24282/dashboard/index.html
3. **Start coding** - Serena enhances semantic search and code understanding automatically

## What You Get

- **Semantic Search**: Ask natural language questions about the codebase
- **Smart Navigation**: Jump to definitions and find references across files
- **Context-Aware Editing**: AI understands full code context when making changes
- **LSP Integration**: Language server features built-in

## Configuration

- **Config File**: [.mcp.json](.mcp.json)
- **Auto-Enable**: Set in [.claude/settings.local.json](.claude/settings.local.json)
- **Context**: `ide-assistant` (optimized for Claude Code)

## Usage Examples

Ask Claude Code questions like:
- "Find all homepage section components"
- "Where is the blog configuration?"
- "Show me how Docusaurus sidebars are configured"

Serena will provide semantic, context-aware results.

## Troubleshooting

### Server won't start
```bash
# Check uv installation
which uvx

# Test Serena manually
uvx --from git+https://github.com/oraios/serena serena --help
```

### Dashboard not loading
- Ensure Serena is running (check Claude Code MCP status)
- Try: http://127.0.0.1:24282/dashboard/index.html
- Check if port 24282 is available: `lsof -i :24282`

## Resources

- [Full Onboarding Guide](docs/serena-onboarding.md)
- [Serena GitHub](https://github.com/oraios/serena)
- [Dashboard](http://localhost:24282/dashboard/index.html) (when running)

## Project Context

This is a Docusaurus 3 documentation site. Serena helps with:
- React/JSX component navigation
- Markdown documentation structure
- Configuration understanding
- Safe refactoring across the codebase
