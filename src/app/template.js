'use client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Header from '@components/Header';
import { store, persistor } from '@/store';
import IntlProviderWrapper from '@hoc/IntlProviderWrapper';
import Footer from '@/components/Footer/Footer';

export default function Template({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProviderWrapper>
          <div className='mail-container'>
            <Header />

            <div className='content-container'>{children}</div>
          </div>
        </IntlProviderWrapper>
      </PersistGate>

      <Footer />
    </Provider>
  );
}
