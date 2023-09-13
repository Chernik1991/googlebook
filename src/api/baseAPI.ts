import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { BaseUrl } from 'constant/constant'

export const baseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: () => ({}),
})
