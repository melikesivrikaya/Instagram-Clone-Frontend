import * as item from "../../datas/postItem";
export default function Posts() {
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-header">
          <div>
            <img
              className="story-image"
              src="https://picsum.photos/id/237/200/300"
            ></img>
            <a>meliejldkf</a>
          </div>
          <item.more />
        </div>
        <div className="post-image">
          <img src="https://picsum.photos/id/37/400/600"></img>
        </div>
        <div className="post-options">
          <div >
            <item.like />
            <item.comment />
            <item.share />,
          </div>
          <item.save />
        </div>
        <div style={{marginBottom : 20}}>
          <a>Bi şeyden eksik kalayım🤣 #dogancem #ai</a>
          <br></br>
          <a>72 yorumun tümünü gör</a>
          <br></br>
          <a>mehmetalicatal_ Hahahahaa 😄</a>
        </div>
      </div>
    </div>
  );
}
