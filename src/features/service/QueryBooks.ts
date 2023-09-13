import { baseAPI } from 'api/baseAPI'
import { SearchType } from 'components/SerchTermForm/SearchSchema'
import { APIKey } from 'constant/constant'
import { BookType } from 'features/service/GetItemsShema'

export const QueryBooks = baseAPI.injectEndpoints({
  endpoints: build => ({
    getBooks: build.query<BookType, SearchType>({
      query: (arg: SearchType) => ({
        url: `volumes?q=${arg.searchTerm}+subject:${arg.category}&maxResults=30&startIndex=${arg.page}&orderBy=${arg.sort}&key=${APIKey}`,
        method: 'GET',
        arg: { arg },
      }),
    }),
  }),
})

export const { useGetBooksQuery } = QueryBooks
