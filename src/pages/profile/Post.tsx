import * as dto from "../../dto/Post";
export const Post: React.FC<dto.post> = ({ data }) => {
  return (
    <div style={{ width : 280,height : 280, marginRight : 20}}>
        <img style={{width : 280,height : 280}} src={data.photourl}></img>
    </div>
  );
};
