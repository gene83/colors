import { Dispatch } from 'react';
import { AdjustColorAction } from '../../color-reducer';
import ColorChangeSwatch from '../shared/color-change-swatch';

type RelatedColorPaletteProps = {
  dispatch: Dispatch<AdjustColorAction>;
  title: string;
  hexColors: string[];
};

const RelatedColorPalette = ({
  dispatch,
  title,
  hexColors,
}: RelatedColorPaletteProps) => {
  const adjustColor = (hex: string) => {
    dispatch({
      type: 'update-hex-color',
      payload: { hexColor: hex },
    });
  };

  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
              onClick={() => adjustColor(hexColor)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
