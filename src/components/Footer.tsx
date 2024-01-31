import React from 'react'
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="doc-footer">
      <div className="inner_footer">
        <small>&copy; 2021 dktechin.com</small>
        <div className="area_link">
          <Link target="_blank" to="https://dktechin.com/service/introduce/company">회사소개</Link>
          <Link target="_blank" to="https://dktechin.com/service/careers/process">채용절차</Link>
          <Link target="_blank" to="https://dktechin.com/service/careers/job">직무소개</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
