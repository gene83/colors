import { Dispatch, useState } from 'react';
import id from 'lodash.uniqueid';
import AddSavedColor from './add-saved-color';
import SavedColor from './saved-color';
import { AdjustColorAction } from '../../color-reducer';
import { hex } from 'color-convert';

type SavedColorsProps = {
  dispatch: Dispatch<AdjustColorAction>;
  hexColor: string;
};

const saved = [
  { id: id(), name: '1989 Miami Hotline', hexColor: '#dd3366' },
  { id: id(), name: 'Blue Fire', hexColor: '#00aadd' },
];

const SavedColors = ({ dispatch, hexColor }: SavedColorsProps) => {
  const [savedColors, setSavedColors] = useState(saved);

  const adjustColor = (hex: string) => {
    dispatch({
      type: 'update-hex-color',
      payload: { hexColor: hex },
    });
  };

  return (
    <section className="flex w-full flex-col gap-4 sm:col-span-2">
      <h3>Save Color</h3>
      <AddSavedColor
        onSave={(name) =>
          setSavedColors((colors) => [...colors, { id: id(), name, hexColor }])
        }
      />
      {savedColors.map(({ id, name, hexColor }) => {
        return (
          <SavedColor
            key={id}
            name={name}
            hexColor={hexColor}
            onClick={() => adjustColor(hexColor)}
            onRemove={() =>
              setSavedColors((colors) =>
                colors.filter((color) => color.id !== id),
              )
            }
          />
        );
      })}
    </section>
  );
};

export default SavedColors;
