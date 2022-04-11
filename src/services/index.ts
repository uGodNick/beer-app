import axios from 'axios';
import { buildUserInfo, UserInfo } from '@/interfaces/userInfo';
import { buildBeerInfo, BeerInfo } from '@/interfaces/beerInfo';

const getRandomUserInfo = async (): Promise<void | UserInfo> => {
  return await axios
    .get('https://random-data-api.com/api/users/random_user')
    .then((res) => {
      return buildUserInfo(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getRandomBeerInfo = async (): Promise<void | BeerInfo> => {
  return await axios
    .get('https://random-data-api.com/api/beer/random_beer')
    .then((res) => {
      return buildBeerInfo(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const services = {
  getRandomUserInfo,
  getRandomBeerInfo
};

export default services;
