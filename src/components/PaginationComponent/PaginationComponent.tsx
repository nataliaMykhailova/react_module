import React, {FC} from 'react';
import {IPaginatedPageModel} from "../../models/IPaginatedPageModel";
import css from './PaginationComponent.module.css'


interface IProps {
    next: IPaginatedPageModel | null;
    prev: IPaginatedPageModel | null;
    setQuery: (params: { page: string }) => void;
}

const PaginationComponent: FC<IProps> = ({prev, next, setQuery}) => {
    const changePage = (action: string) => {
        switch (action) {
            case 'prev':
                if (prev) {
                    setQuery({...prev})
                }
                break;
            case 'next':
                if (next) {
                    setQuery({...next})
                }
                break
        }
    }
    return (
        <div className={css.pagComp}>
            <button onClick={() => {
                changePage('prev');
            }}
                    disabled={!prev}
            >prev
            </button>

            <button onClick={() => {
                changePage('next')
            }}
                    disabled={!next}
            >next
            </button>


        </div>
    );
};

export default PaginationComponent;
