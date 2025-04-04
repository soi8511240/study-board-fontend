'use client';

import React, { use } from 'react';
import { Button } from '@/shared/ui';
import { BoardDto } from '@/entities/board';
import { useRouter } from 'next/navigation';
import { useModal } from '@/shared/ui/';
import { ModalCorrectPassword } from './modal/ModalCorrectPassword.client';

type Props = {
  detailPromise: Promise<BoardDto>;
};

export function DetailUi({ detailPromise }: Props) {
  const detail = use(detailPromise);

  const { openModal, closeModal } = useModal();

  const router = useRouter();

  const goBackPage = () => {
    router.push('/board');
  };

  const checkPassword = (id: number) => {
    // if (!detail.password) {
    //   console.log('!detail.password',!detail.password)
    //   // goModifyPage(id);
    //   return;
    // }

    openModal(
      <ModalCorrectPassword
        correctPassword={'12341234'}
        callBack={() => {
          goModifyPage(id);
          closeModal();
        }}
      />
    );
  };

  const goModifyPage = (id: number) => {
    router.push(`/board/modify/${id}`);
  };

  return (
    <>
      {detail && (
        <>
          <table className="table-horizontal">
            <tbody>
              <tr>
                <th>ID</th>
                <td>
                  {detail.id}
                </td>
              </tr>
              <tr>
                <th>Category</th>
                <td> {detail.categoryName} </td>
              </tr>
              <tr>
                <th>Title</th>
                <td> {detail.title} </td>
              </tr>
              <tr>
                <th>Content</th>
                <td> {detail.content} </td>
              </tr>
              <tr>
                <th>Writer</th>
                <td> {detail.writer} </td>
              </tr>
              <tr>
                <th>Count</th>
                <td> {detail.viewCnt} </td>
              </tr>
              <tr>
                <th>AttachFiles</th>
                <td>
                  {detail.attachYn === 'Y' && (
                    <ul>
                      {detail.files &&
                          detail.files.map(({storedFileName, originalFileName}, index) => {
                            return (
                                <li key={index}>
                                  <a href={'/api/boards/download/' + (storedFileName as string)}>{originalFileName}</a>
                                </li>
                            );
                          })
                      }
                    </ul>
                  )}
                </td>
              </tr>
              <tr>
                <th>CreateDate</th>
                <td> {detail.createdAt} </td>
              </tr>
              <tr>
                <th>UpdateDate</th>
                <td> {detail.updatedAt} </td>
              </tr>
            </tbody>
          </table>
          <div className="btns-foot">
            <div className="left">
              <Button
                type="button"
                label={'수정'}
                onclick={() => {
                  checkPassword(detail.id as number);
                }}
              />
            </div>
            <div className="center"></div>
            <div className="right">
              <Button
                type="button"
                label={'목록'}
                onclick={() => {
                  goBackPage();
                }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
