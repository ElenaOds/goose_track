import { SpinnerCircular } from 'spinners-react';
import style from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={style.container}>
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color="#FFFFFF"
        secondaryColor="#3E85F3"
      />
    </div>
  );
};
