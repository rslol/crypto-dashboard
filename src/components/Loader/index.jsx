import { LoadingOverlay, Box } from "@mantine/core";

export const CryptoLoader = ({ children, visible }) => {
    return (
        <Box pos='relative'>
            <LoadingOverlay 
                visible={visible}
                zIndex={1000}
                overlayProps={{ radius: 'sm', blur: 2 }}
                loaderProps={{ color: 'blue', type: 'bars' }}
            />
            {children}
        </Box>
    );
};