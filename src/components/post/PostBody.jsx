

const PostBody = ({title, bodyHtml}) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold my-3">
        {title}
      </h2>

      <div className="prose prose-sm max-w-none text-black text-sm"
      dangerouslySetInnerHTML={{__html: bodyHtml}}>
        
      </div>
    </div>
  )
}

export default PostBody