import {blogJson} from "../json/BlogJson";

export default function Blog() {
  return (
      <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"
           style={{padding: "0 100px 0 100px"}}>
        {blogJson.map((blog, index) => (
            <figure style={{width: '400px'}}
                    key={index}
                    className="rounded-xl bg-white bg-clip-border mx-auto text-gray-700 shadow-md relative ">
              <div className="relative mx-4 -mt-20 h-50">
                <img
                    className="w-48 h-48 md:w-48 md:h-48 object-cover rounded-full mx-auto"
                    src={blog.book}
                    alt=""/>
              </div>
              <div className="pt-3 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-medium">{blog.summary_content}</p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-sky-500 dark:text-sky-400">
                    {blog.author}
                  </div>
                  <div className="text-slate-700 dark:text-slate-500">
                    {blog.from}
                  </div>
                </figcaption>
              </div>
            </figure>
        ))}
      </div>
  );
}
// <div className="col" key={index}>
//   <div className="card">
//     <img
//         className="card-img-top w-100 d-block fit-cover"
//         style={{height: 200}}
//         src={blog.book}
//     />
//     <div className="card-body p-4">
//       <p className="text-primary card-text mb-0">Article</p>
//       <h4 className="card-title">{blog.title}</h4>
//       <p className="card-text">
//         {blog.summary_content}
//       </p>
//       <div className="d-flex">
//         <img
//             className="rounded-circle flex-shrink-0 me-3 fit-cover"
//             width={50}
//             height={50}
//             src={blog.avatar}
//         />
//         <div>
//           <p className="fw-bold mb-0">{blog.author}</p>
//           <p className="text-muted mb-0">{blog.from}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>