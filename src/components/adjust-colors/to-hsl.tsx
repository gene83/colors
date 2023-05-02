import { hex } from 'color-convert';
import { Dispatch } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import LabeledInput from '../shared/labeled-input';

type HexToHSLProps = {
  dispatch: Dispatch<AdjustColorAction>;
  hexColor: string;
};

const HexToHSL = ({ dispatch, hexColor }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const adjustColor = ({ hue = h, sat = s, light = l }) => {
    dispatch({
      type: 'update-hsl-color',
      payload: { hsl: [hue, sat, light] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => adjustColor({ hue: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => adjustColor({ sat: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) => adjustColor({ light: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToHSL;
