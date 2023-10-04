import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import "../CSS/History.css"

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="history">

                <h3 id='history'>History</h3>
                <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
                </ul>
            </div>
        </>
    )
}

export default TransactionList