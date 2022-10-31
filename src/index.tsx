import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from './pages';
import './styles/index.css';
import {RecoilRoot} from 'recoil';
import {Loading} from './components';
import {SessionErrorCatcher} from './components';

ReactDOM.render(
    <RecoilRoot>
      <Loading/>
      <SessionErrorCatcher />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>,
    document.getElementById('root'),
);

reportWebVitals();
