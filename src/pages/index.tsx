import * as React from 'react'
import { RestaurantsContext } from '@providers/Restaurants'
import Head from 'next/head'
import Header from '@components/Header'
import Filters from '@components/Filters'
import Showcase from '@components/Showcase'
import { useQuery } from '@apollo/client'
import { getFiltersList } from '@utils/filters'
import { GET_CATEGORIES, GET_RESTAURANTS } from '@utils/queries'

const HomePage: React.FunctionComponent = () => {
  const { restaurantsList, setRestaurantsList, categoriesFilter } = React.useContext(RestaurantsContext)
  const [filtersList, setFiltersList] = React.useState([])
  const { loading: categoriesLoading, error: categoriesError, data: categoriesData } = useQuery(GET_CATEGORIES, {
    variables: {
      term: "restaurants",
      location: process.env.DEFAULT_LOCATION,
    }
  })

  const { loading: restaurantsLoading, error: restaurantsError, data: restaurantsData } = useQuery(GET_RESTAURANTS, {
    variables: {
      term: "restaurants",
      location: process.env.DEFAULT_LOCATION,
      categories: categoriesFilter.join(','),
      limit: 8
    }
  })

  React.useEffect(() => {
    if(!categoriesLoading && categoriesData) {
      setFiltersList(getFiltersList(categoriesData?.search.business))
    }
  }, [categoriesLoading, categoriesError, categoriesData])

  React.useEffect(() => {
    if(!restaurantsLoading && restaurantsData) {
      setRestaurantsList(restaurantsData?.search.business)
    }
  }, [restaurantsLoading, restaurantsError, restaurantsData])

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header />
      <Filters 
        list={filtersList} 
      />
      <Showcase 
        title="All Restaurants"
        list={restaurantsList}
      />
    </>
  )
}

export default HomePage