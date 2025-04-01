import { Session } from "inspector";
import Image from "next/image";

let web_data = {
  'is_logged_in': false,
  'user': {
    'name': 'John Doe',
    'picture': 'https://example.com/picture.jpg',
  },
  'session': {'user_web_acc_key' : '1234567890'},
}

// controlling unit
export default function ControllerX() {

  // if user data was already losted
  if (web_data.is_logged_in === false) {
    // redirect to login page
    window.location.href = '/login';
  }

  // if user data was not supposed to be losted
  if (web_data.user === null) {
    // redirect to home page
    web_data.is_logged_in = false;
    window.location.href = '/';
  }

  // sign out
  function signOut(User_id: string = '', user_web_acc_key: string = '') {
    if (web_data.user.name === User_id && web_data.session.user_web_acc_key === user_web_acc_key) {
      web_data.is_logged_in = false;
      web_data.user = { name: '', picture: '' };
      window.location.href = '/';
    }else{
      // -----++++---- create alert window after
      alert('Invalid user data');
    };
  }
  return (
    <></>
  );
}
