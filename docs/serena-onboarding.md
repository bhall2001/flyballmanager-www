---
id: serena-onboarding
title: Serena MCP Server Onboarding
sidebar_label: Serena MCP Setup
---

# Serena MCP Server Onboarding

This guide will help you onboard and use the Serena MCP server with this repository.

## What is Serena?

Serena is a powerful coding agent toolkit that provides:
- **Semantic code search**: Understands code structure beyond text matching
- **LSP integration**: Language Server Protocol support for enhanced navigation
- **Intelligent editing**: AI-assisted code modifications with full language understanding
- **Web dashboard**: Monitor server activity and logs

## Prerequisites

### 1. Install uv (Python Package Manager)

**Status**: ✅ Already installed at `/Users/bobhall/.local/bin/uvx`

If you need to reinstall or install on another machine:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Configuration File

**Status**: ✅ Already configured in [.mcp.json](/.mcp.json)

The configuration file is set up with:
- Command: `uvx`
- Source: `git+https://github.com/oraios/serena`
- Context: `ide-assistant` (optimized for Claude Code)
- Project path: This repository's absolute path

## Enabling Serena

### Option 1: Automatic Prompt (Recommended)

1. **Restart Claude Code** - Exit and reopen Claude Code in this repository
2. **Approve Serena** - When prompted, approve the Serena MCP server
3. **Wait for initialization** - Serena will download and start automatically

### Option 2: Manual Approval

1. Open Claude Code settings
2. Navigate to MCP servers section
3. Find "serena" in the list of available servers
4. Enable it for this project

## Verifying Installation

Once enabled, you can verify Serena is running:

### 1. Check the Dashboard
Open your browser to: http://localhost:24282/dashboard/index.html

You should see:
- Server status
- Active connections
- Request logs
- Configuration details

### 2. Test in Claude Code
Ask Claude Code to perform semantic searches or code analysis. Serena will enhance these capabilities automatically.

## Using Serena

### Semantic Search Examples

With Serena enabled, you can ask Claude Code:
- "Find all components that handle form submission"
- "Show me where homepage sections are defined"
- "Find all files related to blog post rendering"

Serena will provide more accurate, context-aware results than simple text search.

### Code Navigation

- Jump to definitions across files
- Find all references to functions/components
- Understand code structure and relationships

### Intelligent Editing

When making code changes, Serena helps Claude Code:
- Understand the full context of edits
- Maintain consistency across files
- Avoid breaking references

## Troubleshooting

### Server Won't Start

1. **Check uv installation**:
   ```bash
   which uvx
   ```

2. **Manually test Serena**:
   ```bash
   uvx --from git+https://github.com/oraios/serena serena --help
   ```

3. **Check port availability**: Ensure port 24282 is not in use
   ```bash
   lsof -i :24282
   ```

### Dashboard Not Loading

- Verify Serena is running (check Claude Code MCP status)
- Try http://127.0.0.1:24282/dashboard/index.html instead
- Check browser console for errors

### Slow Performance

- First run may be slow (downloading and caching)
- Subsequent runs should be faster
- Check dashboard for indexing progress

## Configuration Details

### Current Setup

From [.mcp.json](/.mcp.json):
```json
{
  "mcpServers": {
    "serena": {
      "command": "uvx",
      "args": [
        "--from",
        "git+https://github.com/oraios/serena",
        "serena",
        "start-mcp-server",
        "--context",
        "ide-assistant",
        "--project",
        "/Users/bobhall/develop/flyballmanager-www"
      ]
    }
  }
}
```

### Context: ide-assistant

This context is optimized for:
- Code editing and refactoring
- Semantic search and navigation
- Understanding project structure
- AI-assisted development

## Best Practices

1. **Let Serena index**: On first run, allow time for initial indexing
2. **Use semantic queries**: Take advantage of natural language search
3. **Monitor the dashboard**: Check for errors or performance issues
4. **Keep updated**: Serena pulls from GitHub, so you get latest features

## Resources

- [Serena GitHub Repository](https://github.com/oraios/serena)
- [MCP Server Documentation](https://github.com/oraios/serena#mcp-server)
- Dashboard: http://localhost:24282/dashboard/index.html (when running)

## Project-Specific Notes

This repository is a **Docusaurus 3** documentation site with:
- React/JSX components in `src/components/`
- Markdown documentation in `docs/`
- Blog posts in `blog/`

Serena will help with:
- Finding component definitions and usage
- Understanding Docusaurus configuration
- Navigating the documentation structure
- Refactoring components safely
