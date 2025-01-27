'use client';
import store, { persistor } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { setDict, setLang } from '@/store/slice/common.slice';
import { useEffect } from 'react';

export default function StoreProvider({
  children,
  lang,
  dict,
}: {
  children: React.ReactNode;
  lang: string;
  dict: any;
}) {
  useEffect(() => {
    store.dispatch(setLang(lang));
    store.dispatch(setDict(dict));
  }, [lang, dict]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
