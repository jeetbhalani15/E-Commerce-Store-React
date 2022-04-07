import { useState } from "react";
import {BounceLoader, CircleLoader, ClipLoader, FadeLoader, HashLoader, MoonLoader, PropagateLoader, PuffLoader, PulseLoader, RingLoader, RiseLoader, RotateLoader, SyncLoader} from "react-spinners";
import "./Loader.css"
export const Loader = ()=>{
    const [loading, setLoading] = useState(true)
    return(
        <div className="loader"><HashLoader size={60} color={"orange"} loading={loading}/></div>
 
    );

}