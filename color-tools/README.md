# Ableton Color Tools

Small Ableton Live extension for improving track and clip coloring workflows.

## What this adds

- `Color Clip: Black` context-menu action for `AudioClip` and `MidiClip`.
- `Color Track Clips: Black` context-menu action for `AudioTrack` and `MidiTrack`; this colors all arrangement clips and session clips on the selected track black.

The first color is:

| Name | Hex | Ableton SDK numeric value |
| --- | --- | --- |
| Black | `#000000` | `0x000000` |

## API notes learned from the bundled docs/examples

- Extensions export `activate(context: ActivationContext)` and call `initialize(context, "1.0.0")`.
- Context-menu actions are registered with `api.ui.registerContextMenuAction(scope, title, commandId)`.
- Command callbacks receive an SDK `Handle`; resolve it with `api.getObjectFromHandle(handle, Type)`.
- `Clip` exposes a writable numeric `color` property.
- `Track` does not expose a direct color property in SDK `1.0.0`; this extension improves track color workflows by coloring the track's clips through `track.arrangementClips` and `track.clipSlots`.

## Development

```bash
npm install
npm test
npm run build
```

## Run in Live

```bash
npm start
```
