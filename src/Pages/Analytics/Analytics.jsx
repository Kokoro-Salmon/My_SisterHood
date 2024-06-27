import React from 'react'
import "./Analytics.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { ViolenceAnalysisChart } from '../../Components/Charts/ViolenceAnalysisChart'
import { StateAnalysisChart } from '../../Components/Charts/StateAnalysisChart'

export const Analytics = () => {
  return (
    <>
    <Navbar />
    <div className="analyticspage">
        <ViolenceAnalysisChart />
        <div className="chartspacer"></div>
        <StateAnalysisChart />
    </div>
    <div className="chartfooter">
        <Footer />
    </div>
</>
  )
}
