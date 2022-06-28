import PerfectScrollbar from 'react-perfect-scrollbar';

import Snackbar from '../Snackbar';

import Navbar from 'app/components/CustomComponents/Navbar';
import Header from './Header';
import SearchScreen from './SearchScreen';

import styles from './styles.module.scss';

type Props = {
    children: JSX.Element[],
    isSearchScreen: boolean;
    isAboveTriggered: boolean;
    isKyc: boolean;
    isHideSideBlock: boolean;
    onClickShadow: () => void;
}

const View: React.FC<Props> = ({
    children,
    isSearchScreen,
    isAboveTriggered,
    isKyc,
    isHideSideBlock,
    onClickShadow
}) => (
    <div className={styles.layoutContainer}>
        <Navbar

        />
        <div className={styles.contentContainer}>
            {isHideSideBlock && isAboveTriggered && (
                    <div className={styles.shadow} onClick={onClickShadow}>
    
                    </div>
            )}
            <Header 
                
                />
            <div id='coreSurContainer' className={styles.coreSurContainer}>
                {isSearchScreen ? (
                    <SearchScreen />
                    ) : (
                        <PerfectScrollbar id='scrollContainer' style={{ flex: 2 }}>
                        <div className={[styles.coreContainer, isHideSideBlock ? styles.hidden : undefined].join(' ')}>
                            { typeof(children) !== 'undefined' && children[0] }
                        </div>
                    </PerfectScrollbar>
                )}
                <div className={[
                    styles.sideContainer,
                    (isAboveTriggered ? styles.aboveTriggered : undefined),
                    isKyc ? styles.kyc : undefined,
                    isHideSideBlock ? styles.sideBlockHidden : undefined
                ].join(' ')}>
                    { typeof(children) !== 'undefined' && children[1] }
                </div>
            </div>
                
        </div>
    </div>
);

export default View;
