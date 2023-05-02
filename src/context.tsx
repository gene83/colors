import { createContext, Dispatch, PropsWithChildren, useReducer } from 'react';
import { AdjustColorAction, colorReducer, initialState } from './color-reducer';

type ColorContextType = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorAction>;
};

export const ColorContext = createContext<ColorContextType>({
  hexColor: '#FFADEF',
} as ColorContextType);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
