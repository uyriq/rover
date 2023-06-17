import { createBoard } from '@wixc3/react-board';
import { SecondCircle } from '../../../components/rover';
import styles from '../../../components/rover.module.css'
interface Props {
    color: string;
    bgcolor: string;
    width: string;
    height: string;
    borderRadius: string;
    borderLeft: string;
    borderRight: string;
    borderBottom: string;
    borderTop: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
}
export default createBoard({
    name: 'SecondCircle',
    Board: (props: Props) => <SecondCircle {...props} />
});
