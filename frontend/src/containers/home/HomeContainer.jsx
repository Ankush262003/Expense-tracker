import React from 'react'

// Components:
import Dashboard from '../../components/home/Dashboard'
import RecentTransections from '../../components/home/RecentTransections'

const HomeContainer = () => {
  return (
    <div>
        <Dashboard/>
        <RecentTransections/>
    </div>
  )
}

export default HomeContainer