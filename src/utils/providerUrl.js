// import { Platform } from "react-native";

const formatProviderUrl = (walletService) => {

    const { universal: universalLink, native: deepLink } = walletService;
    
    // if (Platform.OS === "android") {
    //     return `${deepLink}`;
    // }
    
    return `${universalLink}`;
}

export {formatProviderUrl}