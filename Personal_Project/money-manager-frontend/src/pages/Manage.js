import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Backend from '../util/Backend';
import LocalStorageService from '../services/localStorageService'
import jwtDecode from 'jwt-decode';

import './Manage.css';
import Accounts from '../components/Accounts/Accounts';
import  Categories from '../components/Categories/Categories';
import  Transactions from '../components/Transactions/Transactions';
import Statistic from '../components/Statistic/Statistic';

const Manage = props => {
  const [name, setName] = useState('');
  const [id, setId] = useState(0);
  const [accounts, setAccounts] = useState();
  const [categories, setCategories] = useState();
  const [transactions, setTransactions] = useState();

  //const expense = transactions.filter(data => Number(data.cost) < 0);

  const formatNumber = num => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  const getAccountsFromBackend = () => {
    Backend.getAccounts(
      ).then(result => {
        setAccounts(result.data)
      }).catch(err => console.log(err));
  }

  const getCategoryFromBackend = () => {
    Backend.getCategories(
      ).then(result => {
        setCategories(result.data)
      }).catch(err => console.log(err));
  }

  const getTransactionFromBackend = () => {
    Backend.getTansactions(
      ).then(result => {
        setTransactions(result.data)
      }).catch(err => console.log(err));
  }

  useEffect(() => {
    const token = LocalStorageService.getToken();
    if(token) {
      const user = jwtDecode(token);
      setName(user.name);
      setId(user.id);
    }
  }, []);

  useEffect(() => {
    getAccountsFromBackend();
    getCategoryFromBackend();
    getTransactionFromBackend();
  }, []);

  return (    
    <>
      <NavBar setRole={props.setRole} name={name}/>
      <div className='main stage'>
        <div className='sub stage'>
          <div className='container' id='main'>
            <Statistic transactions={transactions}/>
            <Transactions accounts={accounts} categories={categories} transactions={transactions}/>
          </div>
          <div className='container' id='side'>
            <Accounts accounts={accounts} format={formatNumber}/>
            <Categories categories={categories}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manage;