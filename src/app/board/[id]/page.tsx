'use server';

import React, { Suspense } from 'react';
import { DetailUi } from '@/widgets/board';
import { boardDetailApi } from '@/entities/board';
type Params = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Params) {
  const { id } = await params;

  const boardDetailPromise = boardDetailApi({ id });

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* params.id를 정상적으로 처리 */}
      <DetailUi detailPromise={boardDetailPromise}
      />
    </Suspense>
  );
}
