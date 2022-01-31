import { NextPage } from "next";
import UseState from "../components/UseState";
import UseEffect from "../components/UseEffect";
import styles from '../styles/Home.module.css'
import UseContext from "../components/UseContext";
import UseReducer from "../components/UseReducer";
import UseRef from "../components/UseRef";
import CustomHook from "../components/CustomHook";
import EvenMoreReactComponent from "../components/EvenMoreReactComponent";

const Hooks :NextPage = ()=>{
    return(
        <div className={styles.container}>
            <p>useState</p>
            <UseState/>
            <p>------------------------------</p>
            <p>useEffect</p>
            <UseEffect/>
            <p>------------------------------</p>
            <p>useContext</p>
            <UseContext/>
            <p>------------------------------</p>
            <p>useReducer</p>
            <UseReducer/>
            <p>------------------------------</p>
            <p>useRef</p>
            <UseRef/>
            <p>------------------------------</p>
                <p>CustomHook</p>
                <CustomHook/>
                <p>------------------------------</p>
            <h1>Even more React component TS stuff</h1>
            <EvenMoreReactComponent />
        </div>
    )

}

export default Hooks