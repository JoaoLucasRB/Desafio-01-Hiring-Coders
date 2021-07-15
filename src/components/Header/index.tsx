import logoImg from '../../assets/logo.svg';
import './styles.scss';

export function Header() {
  return (
    <header className="headerContainer">
      <div className="headerContent">
        <img src={logoImg} alt="shop-logo" />
      </div>
    </header>
  );
}