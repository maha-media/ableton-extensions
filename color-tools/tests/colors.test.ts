import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { BLACK, colorClipBlack, colorTrackClipsBlack } from "../src/colors.js";

describe("black color action", () => {
  it("uses the Ableton RGB integer for #000000", () => {
    assert.equal(BLACK.hex, "#000000");
    assert.equal(BLACK.value, 0x000000);
  });

  it("sets a clip color to black", () => {
    const clip = { color: 0xffffff };

    colorClipBlack(clip);

    assert.equal(clip.color, 0x000000);
  });

  it("sets all clips on a track to black", () => {
    const arrangementClip = { color: 0xff0000 };
    const sessionClip = { color: 0x00ff00 };
    const emptySlot = { clip: null };
    const track = {
      arrangementClips: [arrangementClip],
      clipSlots: [{ clip: sessionClip }, emptySlot],
    };

    const changed = colorTrackClipsBlack(track);

    assert.equal(changed, 2);
    assert.equal(arrangementClip.color, 0x000000);
    assert.equal(sessionClip.color, 0x000000);
  });
});
