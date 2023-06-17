import { createBoard } from '@wixc3/react-board';
import { FirstRectangle } from '../../../components/rover';
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
    name: 'FirstRectangle',
    Board: (props: Props) => <FirstRectangle {...props} bgcolor='#666666'/>
});
