'use client'

import React from 'react';
import { ListUi, FilterUi } from '@/widgets/board';

export default function Page() {

  return (
      <>
          <FilterUi />
          <ListUi />
      </>
  );
}
