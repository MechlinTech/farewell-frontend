import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const success = (actionType: any) => `${actionType}_SUCCESS`;
export const failure = (actionType: any) => `${actionType}_FAIL`;
