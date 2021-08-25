import {_decorator, Component} from 'cc';
import axiosRetry from "../libs/axios-retry";
import axios from "../libs/axios.js";

const {ccclass, property} = _decorator;
export type Constructor<T = unknown> = new (...args: any[]) => T;

@ccclass('FirstScene')
export class FirstScene extends Component {
    testHandler() {
        console.log("smile----:" + JSON.stringify("8888888888"));
        axiosRetry(axios, {retries: 3});
        axios.get('https://cdn.mini2.2020.com/better.json').then((res) => {
            console.log("登陆成功啊");
            console.log(JSON.stringify(res));
        }).catch(() => {
            console.error("登陆失败");
        });
    }
}
