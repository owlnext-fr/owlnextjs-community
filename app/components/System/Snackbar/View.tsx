import styles from './styles.module.scss';

import { SnackType } from 'app/types/global'

import Snack from './Snack'

type Props = {
    snacks: SnackType[];
    isInOpen: boolean
}

const View: React.FC<Props> = ({snacks, isInOpen}) => {

return (
    <div className={[styles.snackcontainer, isInOpen ? '' : styles.inApp].join(' ')}>
        {snacks.map((snack) => (
            <Snack key={snack.id} snack={snack}/>
        ))}
        </div>
    );
};

export default View;