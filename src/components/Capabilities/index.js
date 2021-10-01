import React from 'react'
import styles from './Capabilities.module.css'
import CapabilityCard from '../CapabilityCard/index'

const Capabilities = () => {
  return (
    <div className={styles.MyCapabilities}>
      <div className="container">
        <h2>My Capabilities</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
          nostrud exercitation.
        </p>
        <div className={styles.Capability}>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
          <CapabilityCard
            capability="Web Design"
            explaination="Get awesome design services from inkyy.com"
          ></CapabilityCard>
        </div>
      </div>
    </div>
  )
}

export default Capabilities
