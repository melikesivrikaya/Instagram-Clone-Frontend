import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/Store"
import {fetchPostListByUserId} from "../../slice/PostListSlice"
import { useEffect } from "react";
import {Post} from "./Post";
export default function Posts() {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state : RootState) => state.postList.data)
  useEffect(() => {
    dispatch(fetchPostListByUserId());
  })
  return (
    <div style={{display : "flex", flexWrap : "wrap", gap : 20}}>
      {posts.map((post) => (<Post data={post}/>))}
    </div>
  )
}
