import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID lKFPFnNfN_Z7FLjYaurmBV1e_XCMwsFLgppPp10BOtg"
    }
})