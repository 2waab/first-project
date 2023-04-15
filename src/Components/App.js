import React from 'react';
import Header from './Header';
import Text from './Text';
import Social from './Social';

function App() {
    return (
        <div className='p-2' style={{width: '300px', }}>
            <Header />
            <Text />
            <Social />
        </div>
    );
};

export default App;