import React from "react";
import { HexColorPicker } from "react-colorful";
import { useSnapshot } from "valtio";
import { state } from "./ShoeDraco";

const Picker = () => {
  const snap = useSnapshot(state);
  return (
    <div style={{ display: snap.current ? "block" : "none" }}>
      <HexColorPicker
        className='picker'
        color={snap.items[snap.current as keyof typeof snap.items]}
        onChange={(color) => {
          state.items[snap.current as keyof typeof snap.items] = color;
        }}
      />
      <h1>{snap.current}</h1>
    </div>
  );
};

export default Picker;
