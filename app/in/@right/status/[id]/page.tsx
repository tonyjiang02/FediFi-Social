"use client";

import StatusComponent from "@/components/feed/StatusComponent";
import AdsContainer from "@/components/feed/AdsContainer";
import useStatus from "@/lib/hooks/useStatus";
import { useEffect } from "react";

export default function StatusPage({ params }: { params: { id: string } }) {
  const { status, loading } = useStatus(params.id);
  useEffect(()=>{
    console.log(status)
  })
  return (
    <div className="flex justify-center flex-col">
      {!loading && status != undefined && <StatusComponent status={status} />}
      {!loading && status != undefined && <AdsContainer creatorId={status.authorUrl}/>}
    </div>

  );
}
