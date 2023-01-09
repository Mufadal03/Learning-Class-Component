import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Flex, Grid, Heading } from '../style/StyleComponents'

const Layout = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log(users)
    },[users])
    const handleClick = async() => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=20")
            setUsers([...data])
        } catch(e) {
            console.log("error",e)
        }       
    }
  return (
      <Container height={"50vh"}>
          <Heading color="blue">This is heading</Heading>
          <Button onClick={handleClick}>Fetch Data</Button>
          <Grid grid-template-colums={4}>
              {
              users.length > 0 && users.map((curr) => {
                  return (
                      <Flex>{curr.title}</Flex>
                  )
              })
          }
          </Grid>
    </Container>
  )
}

export default Layout