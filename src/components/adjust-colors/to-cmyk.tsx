import { hex } from 'color-convert';
import { Dispatch } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import LabeledInput from '../shared/labeled-input';

type HexToCMYKProps = {
  dispatch: Dispatch<AdjustColorAction>;
  hexColor: string;
};

const HexToCMYK = ({ dispatch, hexColor }: HexToCMYKProps) => {
  const color = hex.cmyk(hexColor);
  const [c, m, y, k] = color;

  const adjustColor = ({ cya = c, mag = m, yel = y, key = k }) => {
    dispatch({
      type: 'update-cmyk-color',
      payload: { cmyk: [cya, mag, yel, key] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="C"
        type="number"
        value={c}
        onChange={(e) => adjustColor({ cya: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="M"
        type="number"
        value={m}
        onChange={(e) => adjustColor({ mag: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="Y"
        type="number"
        value={y}
        onChange={(e) => adjustColor({ yel: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="K"
        type="number"
        value={k}
        onChange={(e) => adjustColor({ key: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToCMYK;
