import { useState } from 'react';
import './player.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext';

export default function PlayerLogin() 
{
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsPlayerLoggedIn } = useAuth();

  const handleChange = (e) => 
  {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
  
    try 
    {
      const response = await axios.post(`${config.url}/player/checkplayerlogin`, formData);
  
      if (response.status === 200) 
      {
        setIsPlayerLoggedIn(true); // Set player as logged in
        navigate("/playerhome");
      }
      else
      {
        setMessage(response.data);
      }
    } 
    catch (error) 
    {
      if (error.response) 
      {
        setError(error.response.data);
      }
      else 
      {
        setError("An unexpected error occurred.");
      }
    }
  };
  

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline"}}>Player Login</h3>
      {
        message ?
        <p style={{ textAlign: "center", color:"green", fontWeight:"bolder" }}>{message}</p> :
        <p style={{ textAlign: "center", color:"red", fontWeight:"bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" id="player_uname" value={formData.player_uname} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="player_pwd" value={formData.player_pwd} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
