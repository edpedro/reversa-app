import React from 'react';
import { Center, Box } from 'native-base';
import LoadingDots from 'react-native-loading-dots';
import { useLoading } from '../../contexts/hooks/useLoading';

const Loading: React.FC = () => {
    const { isLoading } = useLoading();

    return (
        <>
            {isLoading && (
                <Center
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={1}
                    bg="rgba(0, 0, 0, 0.5)"
                >
                    <Box p={4} rounded="md">
                        <LoadingDots />
                    </Box>
                </Center>
            )}
        </>
    );
};

export default Loading;
