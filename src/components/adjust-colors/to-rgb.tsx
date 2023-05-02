import { hex } from 'color-convert';
import { Dispatch, useContext } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import { ColorContext } from '../../context';
import LabeledInput from '../shared/labeled-input';

type HexToRGBProps = {
  hexColor: string;
};

const HexToRGB = ({ hexColor }: HexToRGBProps) => {
  const { dispatch } = useContext(ColorContext);
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  const adjustColor = ({ red = r, green = g, blue = b }) => {
    dispatch({
      type: 'update-rgb-color',
      payload: { rgb: [red, green, blue] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="R"
        type="number"
        value={r}
        onChange={(e) => adjustColor({ red: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="G"
        type="number"
        value={g}
        onChange={(e) => adjustColor({ green: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="B"
        type="number"
        value={b}
        onChange={(e) => adjustColor({ blue: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToRGB;
