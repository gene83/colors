import { Dispatch } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import ColorName from './color-name';
import HexToCMYK from './to-cmyk';
import HexToHSL from './to-hsl';
import HexToHSV from './to-hsv';
import HexToRGB from './to-rgb';

type AdjustColorsProps = {
  dispatch: Dispatch<AdjustColorAction>;
  hexColor: string;
};

const AdjustColors = ({ dispatch, hexColor }: AdjustColorsProps) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <h3>Adjust Colors</h3>
      <HexToRGB dispatch={dispatch} hexColor={hexColor} />
      <HexToHSL dispatch={dispatch} hexColor={hexColor} />
      {/* <HexToHSV dispatch={dispatch} hexColor={hexColor} />
      <HexToCMYK dispatch={dispatch} hexColor={hexColor} />
      <ColorName dispatch={dispatch} hexColor={hexColor} /> */}
    </div>
  );
};

export default AdjustColors;
