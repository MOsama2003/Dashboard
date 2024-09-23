import React from 'react'
import { Link } from 'react-router-dom'
import { employeeData } from './data'
import RequestTableRow from './RequestTableRow'

const Requests = () => {
  return (
    <div>
        <div className='flex w-full justify-between p-1'>
            <span className="text-xl font-semibold">Requests</span>
            <Link to='/admin/orders' className='text-primaryText font-semibold'>View all</Link>
        </div>
        <div className='p-1'>
        {
           employeeData.slice(0, 5).map((item, index) => (
                <RequestTableRow {...item} key={index} />
        ))}
        </div>
    </div>
  )
}

export default Requests