import React, {Component, useReducer } from 'react';
import { Provider } from 'react-redux'
import store from '../src/components/redux/store'
import './App.css';
import  Greet  from './components/Greet';
import  Welcome  from './components/Welcome'; 
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import LifecycleA from './components/LifecycleA'
import LifecycleB from './components/LifecycleB'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './ErrorBoundary';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter';
import ComponentC from './components/ComponentC';
import {UserProvider} from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import CakeContainer from './components/CakeContainer';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import DataFetching from './components/DataFetching';
import ComponentC1 from './components/useContext/ComponentC1';
import CounterOne from './components/useReducer/CounterOne'
import CounterTwo from './components/useReducer/CounterTwo'
import CounterThree from './components/useReducer/CounterThree';
import Component11 from './components/useContextAnduseReducer/Component11';
import Component12 from './components/useContextAnduseReducer/Component12';
import Component13 from './components/useContextAnduseReducer/Component13';
import DataFetching1 from './components/useReducerDataFetch/DataFetching1';
import DataFetching2 from './components/useReducerDataFetch/DataFetching2';
import MemoCounter from './components/useMemo/MemoCounter';
import FocusInput from './components/useRef/FocusInput';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';
import DocTitle1 from './components/customHook/DocTitle1';
import DocTitle2 from './components/customHook/DocTitle2';

// useContext hook
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
//

//useContext for global state management
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
        return state + 1
        case 'decrement':
        return state - 1
        case 'reset':
        return initialState

        default:
        return state
    }
}


function App() {

  
  // render() {
    const[count, dispatch] = useReducer(reducer, initialState)
    return (
      <Provider store={store}>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch}}>
      <div className="App" >
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
        <Greet name="Bruce" heroName="Batman"> 
        <p>This is children props</p>
        </Greet>
        <Greet name="Jon" heroName="Superman"> 
        <button>Action</button>
        </Greet>
        <Greet name="Joe" heroName="Hanuman" />

        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Jon" heroName="Superman"/>
        <Welcome name="Joe" heroName="Hanuman"/>
        <Message />
        <Counter />
        <FunctionClick />
        <ClassClick />
        <EventBind />
        <ParentComponent/>
        <UserGreeting />
        <NameList />
        <Stylesheet primary={true} />
        <Inline />
        <LifecycleA />
        <LifecycleB />
        <FragmentDemo />
        <Table />
        <ParentComp />
        <RefsDemo />
        <PortalDemo/>
        {/*<ErrorBoundary>
          <Hero heroName="Batman"/>
          </ErrorBoundary>
          <ErrorBoundary> 
          <Hero heroName="Superman"/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName="Joker"/>
        </ErrorBoundary>*/}
        <ClickCounter />
        <HoverCounter />
        <UserProvider value="Yash">
          <ComponentC />
        </UserProvider>
        <PostList />
        <PostForm />
        <CakeContainer />
        <ClassCounter />
        <HookCounter />
        /*useState Hooks */
        <HookCounterTwo />
        <HookCounterThree />
        <HookCounterFour />
        /*comp did update and mount using class fn */
        <ClassCounterOne />
        /*useEffect Hooks */
        <HookCounterOne />
        /*useEffect Hooks to call just one time*/
        <HookMouse />
        /*useEffect Hooks to fetch data/
       <DataFetching />

       /*useContext to pass data through component tree ComponentF1 traditonal approach. Component E1 useContext approach*/
       <UserContext.Provider value={'Yash'}>
        <ChannelContext.Provider value={'useContext hook'}>
          <ComponentC1 />
        </ChannelContext.Provider>
       </UserContext.Provider>

       /*useReducer Hook/
       <CounterOne />
       <CounterTwo />
       /*Multiple useReducer Hook/
       <CounterThree />

       /* useReducer + useContext - Global state management/ <br />
       Count - {count}
        <Component11 />
        <Component12 />
        <Component13 />

        /* useState and useEffect to fetch data/ <br />
       <DataFetching1 />

       /* useReducer and useEffect to fetch data/ <br />
       <DataFetching2 />

       /* useMemo/ <br />
       <MemoCounter />

       /* useRef focus on input field*/ <br />
        <FocusInput />
       <ClassTimer />
       <HookTimer />
       
       /* Custom Hooks*/ <br />
       <DocTitle1 />
       <DocTitle2 />
       
        
       { /*<Hello />*/}
       
      </div>
      </CountContext.Provider>
      </Provider>
    );
  // }
  
}

export default App;
