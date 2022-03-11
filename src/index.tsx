import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction : Model
  },

  seeds(server) {
    server.db.loadData({
      transactions : [
        { 
         id: 1,
         title: 'Desenvolvedor Web',
         category: 'Dev',
         value: 6000,
         type: 'deposit',
         createdAt: new Date()
        },
        { 
          id: 2,
          title: 'Energia',
          category: 'Dev',
          value: 1500,
          type: 'withdraw',
          createdAt: new Date()
         }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      return schema.create('transaction', attrs)
    });
  }
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
