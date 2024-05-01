import axios from "axios"
import {
  CONNECTOR_CROWDBOTICS_CONNECTOR_USERNAME,
  CONNECTOR_CROWDBOTICS_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const crowdboticsconnector = axios.create({
  baseURL: "https://devstringx.com",
  auth: {
    username: CONNECTOR_CROWDBOTICS_CONNECTOR_USERNAME,
    password: CONNECTOR_CROWDBOTICS_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
