import { useEffect, useReducer } from 'react'
import axios from 'axios';

export default function useApplicationData(props) {
  const [state, dispatch] = useReducer( {
    insPosts: [],
    facebookPosts: [],
    tweeterPosts: [],
  })
  useEffect(() => {
    const ws = new WebSocket();
    Promise.all([
      axios.get()
    ])
  })
}