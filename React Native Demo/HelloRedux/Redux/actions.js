/**
 * Created by Xue on 2017/9/6.
 */


import {
  INCREASE,
  DECREASE,
  RESET
} from './actinosType';

const increase = () => ({
  type: INCREASE
});

const decrease = () => ({
  type: DECREASE
});

const reset    = () => ({
  type: RESET
});


export {
  increase,
  decrease,
  reset
}