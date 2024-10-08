import * as React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = ({ title }: any) => {
    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default AppBar;