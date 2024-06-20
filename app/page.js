'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [img, $img] = useState('puppy-eyes');
  const [how, $how] = useState(false);
  const [p, $p] = useState(null);

  const updateImg = (im) => {
    $img(im);
  };

  const nah = () => {
    const x = Math.random() * 90;
    const y = Math.random() * 90;

    $p({ x: `${x}%`, y: `${y}%` });
    updateImg('unamused');
  };

  const dontdoit = () => {
    nah();
    updateImg('shock');
    $how(true);
  };

  return (
    <div className="box">
      <img alt="gumball" className="gif" src={`/${img}.gif`} />
      {how ? "Hmmmph, Theres no choice!" : "Will you go out with me?"}
      <div className="btns">
        <Link className="yes" href="/yay">
          <button onMouseOver={() => updateImg('sparkle-eyes')} onMouseOut={() => updateImg('puppy-eyes')}>
            Yes
          </button>
        </Link>
        <button className="no"
          style={p ? { position: 'absolute', top: p.x, right: p.y } : null}
          onClick={dontdoit} onMouseOver={nah}>
          No
        </button>
      </div>
    </div>
  );
}
