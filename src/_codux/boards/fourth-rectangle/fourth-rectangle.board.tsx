import { createBoard } from '@wixc3/react-board';
import { FourthRectangle } from '../../../components/rover';
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
    name: 'FourthRectangle',
    Board: (props: Props) => <FourthRectangle {...props} />,
    environmentProps: {
        canvasHeight: 5,
        windowWidth: 3492,
        windowHeight: 1577,
    },
});
