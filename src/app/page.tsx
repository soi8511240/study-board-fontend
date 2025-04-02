import React from 'react';
import Link from "next/link";

export default function page() {
  return (
      <>
          Hello World
          <div>
            <Link href='/board'>게시판</Link>
          </div>
      </>
  );
}
