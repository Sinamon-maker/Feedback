import React from 'react'
import styled from 'styled-components'

import MainContent from './maincontent'
import Footer from './footer'

const AppWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`

const App = () => {
  return (
    <AppWrapper>
      <MainContent />
      <Footer />
    </AppWrapper>
  )
}

export default App
