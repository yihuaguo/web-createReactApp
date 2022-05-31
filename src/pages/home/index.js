// 使用钩子函数调用redux
// import React from 'react'
// import styles from './index.less'
// import { Button } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { asyncIncrement } from '../../store/features/counterSlice';

// const Home = () => {

//     const { count } = useSelector((state) => state.counter);
//     const dispatch = useDispatch();

//     const clickDispatch = () => {
//         dispatch(asyncIncrement())
//     }

//     return <div className={styles.global} style={{ height: 800 }}>
//         <Button onClick={clickDispatch}>home: {count}</Button>
//     </div>
// }

// export default Home

// 使用connect调用redux
import React from 'react'
import styles from './index.less'
import { Button } from 'antd';
import { connect } from "react-redux";
import { asyncIncrement } from '../../store/features/counterSlice';

const Home = (props) => {
    const { count, onIncrement } = props
    return <div className={styles.global} style={{ height: 800 }}>
        <Button onClick={onIncrement}>home: {count}</Button>
    </div>
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(asyncIncrement()),
        // 不传方法只能调用同步方法
        // onIncrement: () => dispatch({ type: 'counter/decrement' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)