
import { servicesdata } from '@/data/commanData';
import styles from './Services.module.css'
import Link from "next/link";
import  RvBreadcrumbs  from "@/components/landing/page-breadcrumbs/rvbreadcrumbs";
export default async function ServicePage({ params }) {
  const { slug } = await params;
 

  const service = servicesdata.find((item) => item.slugUrl === slug);
  return (
    <div className="">
          <RvBreadcrumbs 
            haddingname={service.title}
            // rvh1title={service.title}
            />
    <div className={`${styles.servicesPage} section`}>
      
        <div className="container">
          {/* <h1 className={styles.rvsptitle}>{service.fullTitle}</h1> */}
          <div className={`${styles.rvspcontent}`}>
            
          <div dangerouslySetInnerHTML={{ __html: service.description }} />
          </div>
        </div>
      </div>
      <div className={`${styles.calltoacton} section`}>
        <div className="container">
          <div className={`${styles.rvcard}`}>
          <div className="">{service.getInTouchDescription}</div>
          <div className={`${styles.rvcardBody}`}>
          <Link href={service.getInTouchButtonLink} className={`${styles.calltoactonbtn} btn btn-primary`}>
            <span>{service.getInTouchButton}</span>
          </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}