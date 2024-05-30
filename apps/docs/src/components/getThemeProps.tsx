import React from 'react';
import { theme } from '../../../../packages/theme/src';
import { styled } from '@stitches/react';

export const GetColors = () => {
  return (
    <table className={'token-table'}>
      <thead>
        <tr>
          <th style={{ flexBasis: '40%' }}>Namn</th>
          <th style={{ flexBasis: '20%' }}>Hex</th>
          <th style={{ flexBasis: '40%' }}></th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(theme.colors).map((e, index) => {
          return (
            <tr style={{ display: 'flex' }} key={index}>
              <td style={{ flexBasis: '40%' }}>{e[1].token}</td>
              <td style={{ flexBasis: '20%' }} id={e[1].value}>
                <ToolTip>
                  {e[1].value}
                  <ToolTipText
                    className="tooltiptext"
                    id={`tooltip-${e[1].value}`}
                  >
                    Kopiera
                  </ToolTipText>
                  <button
                    onClick={() => copy(e[1].value)}
                    onMouseLeave={() => mouseLeave(e[1].value)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      height={'20'}
                      width={'20'}
                      fill={'gray'}
                    >
                      <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" />
                    </svg>
                  </button>
                </ToolTip>
              </td>
              <td
                style={{ backgroundColor: e[1].value, flexBasis: '40%' }}
              ></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export const GetGenericProp = (props: any) => {
  return (
    <>
      <table className={'token-table'}>
        <thead>
          <tr>
            <th style={{ flexBasis: '40%' }}>Name</th>
            <th style={{ flexBasis: '20%' }}>Value</th>
            <th style={{ flexBasis: '40%' }}></th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(theme[props.tokenSet]).map(
            (e: { token: string; value: string }[] | unknown, index) => {
              return (
                <tr key={index}>
                  <td style={{ flexBasis: '40%' }}>{e[1].token}</td>
                  <td style={{ flexBasis: '20%' }}>{e[1].value}</td>
                  <td style={{ flexBasis: '40%' }}></td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </>
  );
};

const copy = (id: string) => {
  let copyText = document.getElementById(id);
  navigator.clipboard.writeText(id).then((r) => {
    let tooltip = document.getElementById(`tooltip-${id}`);
    tooltip.innerHTML = 'Kopierat: ' + id;
  });
};
const mouseLeave = (id) => {
  let tooltip = document.getElementById(`tooltip-${id}`);
  tooltip.innerHTML = 'Kopiera';
};

const ToolTip = styled('div', {
  position: 'relative',
  display: 'flex',
  fontFamily: 'Fira Code',
  fontSize: '14px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '&:hover': {
    '& span': {
      visibility: 'visible',
      opacity: 1,
    },
  },
  '& button': {
    background: 'none',
    border: 'none',
    '&:hover': {
      opacity: '0.5',
      cursor: 'pointer',
    },
  },
});

const ToolTipText = styled('span', {
  visibility: 'hidden',
  width: '140px',
  fontFamily: 'Arial',
  backgroundColor: '#555',
  color: '#fff',
  textAlign: 'center',
  borderRadius: '6px',
  padding: '5px',
  position: 'absolute',
  zIndex: '1',
  bottom: '150%',
  left: '50%',
  marginLeft: '-75px',
  opacity: '0',
  transition: 'opacity 0.3s',
  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    left: '90%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: '#555 transparent transparent transparent',
  },
});
