'use client'

import React from 'react';
import { BoardList, BoardFilter } from '@/widgets';

export default function Page() {

  return (
      <>
          <BoardFilter />
          <BoardList />
      </>
  );
}
