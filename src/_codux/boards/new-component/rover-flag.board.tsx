import { createBoard } from '@wixc3/react-board';
import { Flag } from '../../../components/rover';
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
    name: 'Flag',
    Board: (props: Props) => <Flag {...props} />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasHeight: 94,
        canvasWidth: 360,
    },
});
