import { Dispatch } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import {
  getComplementColors,
  getTriadColors,
} from '../../lib/get-related-colors';
import RelatedColorPalette from './related-color-palette';

type RelatedColorsProps = {
  dispatch: Dispatch<AdjustColorAction>;
  hexColor: string;
};

const RelatedColors = ({ dispatch, hexColor }: RelatedColorsProps) => {
  const triadColors = getTriadColors(hexColor);
  const complementColors = getComplementColors(hexColor);

  return (
    <>
      <RelatedColorPalette
        title="Triad Colors"
        hexColors={triadColors}
        dispatch={dispatch}
      />
      <RelatedColorPalette
        title="Complimentary Colors"
        hexColors={complementColors}
        dispatch={dispatch}
      />
    </>
  );
};

export default RelatedColors;
