export interface Analyst {
      fileName:string;
      reportTitle:string;
      state:string;
      upsidePercent:number;
      Target:string;
     fivedaytrend:number;
      remainingdownloads:number;
      purchase:string;
       analystFirm:string;   
      uploaderName:string;  
      uploadDate:string; 
}

export interface ProductSource {
    source: Analyst;
}
