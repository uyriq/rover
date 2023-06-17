import { createBoard } from '@wixc3/react-board';
import { SecondTriangleRectangle } from '../../../components/rover';
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
    name: 'SecondTriangleRectangle',
    Board: (props: Props) => <SecondTriangleRectangle {...props} />,
    environmentProps: {
        canvasHeight: 1359,
        canvasWidth: 634,
    },
});
