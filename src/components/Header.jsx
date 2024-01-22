import styles from './header.module.scss';

function Header() {
    return (
        <div className={styles.container}>
        <div>
            <h1>Contact App</h1>
        </div>
        <p><a href="#">RohaDeveloper</a> | All things you want</p>
        </div>
    );
}

export default Header;