import { fetchTasks } from "@/services";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

export default function todo() {
  const [dataList, setDataList]: any = useState([]);

  useEffect(() => {
    fetchTasks()
      .then((dataList) => {
        setDataList(dataList);
      })
      .catch((error) => {
        // Handle errors if needed
        console.error(error);
      });
  }, []);


  console.log(`data `, dataList) ;
  return ( 

    < >
      <div className={styles.container}>
        {dataList.map((element: any, index: number) => (
          <p key={index}>{element.title}</p>
        ))}
      </div>
    </>
  );
}
