import { Layout, Space } from 'antd';
import React from 'react';
import './App.css';
import { BrowserRouter as Router,
 Routes, Route, Link
 } from 'react-router-dom'
import Home from './components/Home';
import Cat from './components/Cat';
import About from './components/About';
import DetailArticle from './components/DetailArticle';
import NewCat from './components/NewCat';
import Login from './components/Login';
import Signup from './components/Signup';
import UpdateCat from './components/UpdateCat'
import UserPro from './components/UserPro';
const { Header, Content, Footer } = Layout;

const App = () => {
 return (
 <Router>
   <Header>
  
     <nav>
       <Space>
       <Link to="/">Home</Link>
       <Link to="/cat">Cat</Link>
         <Link to="/newcat">New Cat</Link>
       <Link to="/about">About</Link>
          <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
       </Space>
     </nav>
   </Header>
 <Content style={{padding: '0 50px'}}>
   <Layout style={{padding:'0 24px', minHeight : 600}}>
     <Routes>
       <Route index element={ <Home />} />
       <Route path="/newcat" element={ <NewCat/>} />
       <Route path="/about" element={ <About />} />
       <Route path="/cat" element={ <Cat /> } />
      <Route path="/a/:aid" element={ <DetailArticle/> } />
      <Route path="/login" element= {<Login />} />
      <Route path="/signup" element= {<Signup />} />
    <Route path="/update/:id" element= {<UpdateCat />} />
           <Route path="/userpro" element= {<UserPro />} />
     </Routes>
    </Layout>
 </Content>
 <Footer style={{textAlign: "center"}}>
 <p>The Pet Shelter</p>
 </Footer>

 </Router>
 );
}
export default App;