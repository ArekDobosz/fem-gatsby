import React, { useState } from 'react';
import { css } from '@emotion/core';

export default function Wave() {
  const [waves, setWaves] = useState(0);
  const label = `✋ ${waves} ${waves === 1 ? 'wave' : 'waves'}`;

  return (
    <button
      css={css`
        background: #ccc;
        border: none;
        color: white;
        font-size: 1.2rem;
        width: 200px;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
}
