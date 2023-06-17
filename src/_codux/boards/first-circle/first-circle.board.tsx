import { createBoard } from '@wixc3/react-board';
import { FirstCircle } from '../../../components/rover';

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
    name: 'FirstCircle',
    Board: (props: Props) => <FirstCircle {...props} bgcolor="#723131" />,
});
