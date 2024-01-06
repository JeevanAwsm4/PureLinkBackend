import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import Nav from './components/includes/Nav';
import Dashboard from './components/screens/Dashboard';
import Profile from './components/includes/Profile';
import Notification from './components/screens/Notification';
import WantBlood from './components/screens/WantBlood';
import History from './components/screens/History';

function App() {
  return (
    <Router>
      <Container>
        <Nav />
        <RouteContainer>
          <Routes>
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='notification' element={<Notification/>} />
            <Route path='want-blood' element={<WantBlood/>} />
            <Route path='history' element={<History/>} />
          </Routes>
        </RouteContainer>
        <Profile />
      </Container>
    </Router>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`
const RouteContainer = styled.div`
  padding: 55px 30px 0px;
  width: 77%;
  padding-left: 12%;
`