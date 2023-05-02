import clsx from 'clsx';
import { MouseEventHandler, useContext } from 'react';
import { ColorContext } from '../../context';
import Button from './button';

type ColorChangeSwatchProps = {
  hexColor: string;
  className?: string;
};

const ColorChangeSwatch = ({ hexColor, className }: ColorChangeSwatchProps) => {
  const { dispatch } = useContext(ColorContext);

  const adjustColor = (hex: string) => {
    dispatch({
      type: 'update-hex-color',
      payload: { hexColor: hex },
    });
  };

  return (
    <Button
      className={clsx(
        'border-2 border-slate-900 transition-shadow duration-200 ease-in hover:shadow-xl',
        className,
      )}
      style={{ backgroundColor: hexColor }}
      onClick={() => adjustColor(hexColor)}
    >
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
