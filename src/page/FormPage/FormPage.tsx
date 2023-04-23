import { FC, FormEvent } from 'react';

import { IFormPageProps } from './FormPage.types';

import { ModalInput, TextField } from 'shared/components';
import { PageLayout } from 'shared/layouts';

export const FormPage: FC<IFormPageProps> = () => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <PageLayout>
      <div>
        <form onSubmit={handleOnSubmit}>
          <TextField name="Input1" />
          <TextField name="Input2" />
          <ModalInput name="ModalInput2" />
        </form>
      </div>
    </PageLayout>
  );
};
