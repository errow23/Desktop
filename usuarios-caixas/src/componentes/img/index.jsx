import Userimg from '../../assets/users.png'; // Verifique se o caminho está correto
import {BRACKIMG} from './style'

function TopBackgroud(){

  //Userimg

    return(
        <BRACKIMG>
        <Img src={Userimg} alt="User" />
      </BRACKIMG>
    )
}

export default TopBackgroud
