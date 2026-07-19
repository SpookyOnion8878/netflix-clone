import axios from "axios";

/**
 * SWR-compatible fetcher: performs a GET request and returns the response body.
 */
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default fetcher;
