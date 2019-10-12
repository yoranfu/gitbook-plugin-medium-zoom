# gitbook-plugin-medium-zoom
A gitbook plugin for zooming images like Medium

## Install

### Step #1 - Update book.json file

In you gitbook's book.json file, add `medium-zoom` to plugins list.

**Sample `book.json` file for gitbook version 2.0.0+**

```json
{
  "plugins": [
    "medium-zoom"
  ]
}
```

**Sample `book.json` file for gitbook version 2.0.0+ and custom options**

```json
{
  "plugins": [
    "medium-zoom"
  ],
  "pluginsConfig": {
    "medium-zoom": {
      "margin": 24,
      "background": "#BADA55",
      "scrollOffset": 0
    }
  }
}
```

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `medium-zoom` gitbook plugin for your book. This is needed only once.
2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.
