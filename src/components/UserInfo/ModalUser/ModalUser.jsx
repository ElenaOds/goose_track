import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

const userModal = document.querySelector('#Modal');

export const ModalUser = ({ children }) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    userModal.appendChild(element);

    return () => {
      userModal.removeChild(element);
    };
  });
  return createPortal(children, element);
};
