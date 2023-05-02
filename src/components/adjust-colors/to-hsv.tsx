import { hex } from 'color-convert';
import { Dispatch, useContext } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import { ColorContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToHSVProps = {
  hexColor: string;
};

const HexToHSV = ({ hexColor }: HexToHSVProps) => {
  const { dispatch } = useContext(ColorContext);
  const color = hex.hsv(hexColor);
  const [h, s, v] = color;

  const adjustColor = ({ hue = h, sat = s, val = v }) => {
    dispatch({
      type: 'update-hsv-color',
      payload: { hsv: [hue, sat, val] },
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
        label="V"
        type="number"
        value={v}
        onChange={(e) => adjustColor({ val: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToHSV;
