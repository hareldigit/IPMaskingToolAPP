import { useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import axios from '../axios'

function useData() {
  const [{}, dispatch] = useStateValue()

  const buildParameters = () => {
    const parameters = {}
    return parameters
  }

  const prepareResult = (data) => {
    let result = []
    if (data) {
    }
    return result
  }

  const onSuccess = (data) => {
    let result = prepareResult(data)
    dispatch({ type: 'SUCCESS' })
    dispatch({ type: 'SET_INDETERMINATE', indeterminate: false })
  }

  const onError = (error) => {
    dispatch({ type: 'SET_INDETERMINATE', indeterminate: false })
    dispatch({ type: 'SET_ERROR', error: error })
    throw error.message
  }

  useEffect(() => {
    const maskFile = async () => {
      dispatch({ type: 'SET_INDETERMINATE', indeterminate: true })
      await axios({
        method: 'post',
        url: `/cumulativeViews/get`,
        dataType: 'json',
        contentType: 'application/json;',
        data: buildParameters(),
      })
        .catch((err) => {
          onError(err)
        })
        .then((response) => {
          onSuccess(response.data)
        })
    }
    maskFile()
  }, [dateRange])

  return [data]
}

export default useData
