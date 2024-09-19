import React from 'react';

export const navigationRef = React.createRef<any>();

interface ProsParams {
    name: string;
    params?: { [key: string]: any; id?: string; type?: string };
}

export function navigate({ name, params }: ProsParams) {
    navigationRef.current?.navigate(name, params);
}

export function reset({ name, params }: ProsParams) {
    navigationRef.current?.resetRoot({
        index: 1,
        routes: [{ name: 'Home' }, { name, params }],
    });
}
