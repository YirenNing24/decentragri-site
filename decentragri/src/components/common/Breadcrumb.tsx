import Link from "next/link";

interface PropsType {
   sub_title: string;
   title: string;
}
const Breadcrumb = ({ title, sub_title }: PropsType) => {
   return (
      <section className="page-banner">
         <div className="page-banner-wrapper bg_cover">
            <div className="shape shape-one"><span className="circle"></span></div>
            <div className="shape shape-two"><span className="circle"></span></div>
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="ac-breadcrumb__content text-center p-relative z-index-1">
                        <h3 className="ac-breadcrumb__title">{title}</h3>
                        <div className="ac-breadcrumb__list">
                           <span><Link href="/">Home</Link></span>
                           <span className="dot"></span>
                           <span>{sub_title}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Breadcrumb
