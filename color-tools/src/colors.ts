import type { Clip } from "@ableton-extensions/sdk";

export const BLACK = {
  name: "Black",
  hex: "#000000",
  value: 0x000000,
} as const;

type ColorableClip = Pick<Clip<"1.0.0">, "color">;
type TrackWithClips = {
  arrangementClips: ColorableClip[];
  clipSlots: Array<{ clip: ColorableClip | null }>;
};

export function colorClipBlack(clip: ColorableClip): void {
  clip.color = BLACK.value;
}

export function colorTrackClipsBlack(track: TrackWithClips): number {
  let changed = 0;

  for (const clip of track.arrangementClips) {
    colorClipBlack(clip);
    changed += 1;
  }

  for (const slot of track.clipSlots) {
    const clip = slot.clip;
    if (clip) {
      colorClipBlack(clip);
      changed += 1;
    }
  }

  return changed;
}
