import { createNavigationContainerRef } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();

export function resetToLogin() {
  if (!navigationRef.isReady()) return;

  const state = navigationRef.getRootState();
  const currentRoute = state.routes[state.index];

  // If already on LoginStack → do nothing
  if (currentRoute?.name === 'LoginStack') {
    return;
  }

  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'LoginStack' }],
    }),
  );
}
