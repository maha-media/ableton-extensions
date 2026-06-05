import {
  Clip,
  DataModelObject,
  initialize,
  Track,
  type ActivationContext,
  type Handle,
} from "@ableton-extensions/sdk";
import { BLACK, colorClipBlack, colorTrackClipsBlack } from "./colors.js";

const COLOR_CLIP_BLACK_COMMAND = "maha.colors.clip.black";
const COLOR_TRACK_CLIPS_BLACK_COMMAND = "maha.colors.trackClips.black";

export function activate(activation: ActivationContext) {
  const api = initialize(activation, "1.0.0");

  api.ui.registerContextMenuAction(
    "AudioClip",
    `Color Clip: ${BLACK.name}`,
    COLOR_CLIP_BLACK_COMMAND,
  );
  api.ui.registerContextMenuAction(
    "MidiClip",
    `Color Clip: ${BLACK.name}`,
    COLOR_CLIP_BLACK_COMMAND,
  );
  api.ui.registerContextMenuAction(
    "AudioTrack",
    `Color Track Clips: ${BLACK.name}`,
    COLOR_TRACK_CLIPS_BLACK_COMMAND,
  );
  api.ui.registerContextMenuAction(
    "MidiTrack",
    `Color Track Clips: ${BLACK.name}`,
    COLOR_TRACK_CLIPS_BLACK_COMMAND,
  );

  api.commands.registerCommand(COLOR_CLIP_BLACK_COMMAND, (arg: unknown) => {
    const clip = api.getObjectFromHandle(arg as Handle, Clip);
    colorClipBlack(clip);
  });

  api.commands.registerCommand(
    COLOR_TRACK_CLIPS_BLACK_COMMAND,
    (arg: unknown) => {
      const object = api.getObjectFromHandle(arg as Handle, DataModelObject);
      if (!(object instanceof Track)) {
        console.warn("Color Track Clips command received a non-track object.");
        return;
      }

      const changed = colorTrackClipsBlack(object);
      console.log(`Colored ${changed} clip(s) ${BLACK.name} (${BLACK.hex}).`);
    },
  );
}
