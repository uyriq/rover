import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import styles from '../../../App.module.css';

export default createBoard({
    name: 'App',
    Board: () => (
        <div className={styles.main}>
            <App />
        </div>
    ),
    environmentProps: {
        windowHeight: 1920,
        windowWidth: 1080,
        canvasHeight: 900,
        canvasWidth: 1206,
        canvasMargin: {
            top: 46,
            right: 0,
            bottom: 34,
            left: 0,
        },
    },
});
