import { FC } from 'react';

import { FormPage, ListPage } from '../page';
import { useSideBar } from '../hook';

import { MainLayout } from 'shared/layouts';

const App: FC = () => {
  const { route, sideBarOptions } = useSideBar();

  console.log(route);

  return (
    <MainLayout sideBarOptions={sideBarOptions}>
      {route === 'LIST' ? <ListPage /> : <FormPage />}
    </MainLayout>
  );
};

export default App;
