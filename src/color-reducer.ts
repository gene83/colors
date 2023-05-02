import { rgb, hsl } from 'color-convert';

type UpdateHexColorAction = {
  type: 'update-hex-color';
  payload: { hexColor: string };
};

type UpdateRGBColorAction = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number] };
};

type UpdateHSLColorAction = {
  type: 'update-hsl-color';
  payload: { hsl: [number, number, number] };
};

export type AdjustColorAction =
  | UpdateHexColorAction
  | UpdateRGBColorAction
  | UpdateHSLColorAction;

type ColorState = {
  hexColor: string;
};

export const initialState: ColorState = {
  hexColor: '#BADA55',
};

export const colorReducer = (
  state: ColorState = initialState,
  action: AdjustColorAction,
) => {
  if (action.type === 'update-hex-color') {
    const { hexColor } = action.payload;
    return { ...state, hexColor };
  }

  if (action.type === 'update-rgb-color') {
    const hexColor = '#' + rgb.hex(action.payload.rgb);
    return { ...state, hexColor };
  }

  if (action.type === 'update-hsl-color') {
    const hexColor = '#' + hsl.hex(action.payload.hsl);
    return { ...state, hexColor };
  }

  return state;
};
