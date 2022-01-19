import React, { useEffect, useRef, useState } from 'react';
import InputSearch from '../../components/InputSearch';
import { Formik, Form } from 'formik'
import pokemon from '../../consumers/pokemon';
import { APIResponse, IIndexData } from '../../types/api';
import { Card } from './components';
import usePageObserver from '../../hooks/usePageObserver';

interface ISearchProps {
  search: string
}

function MainPage() {
  const [list, setList] = useState<APIResponse<IIndexData[]>>({})
  const refRoot = useRef(null)
  const loadingElementRef = useRef(null)
  const { nextPageTrigger } = usePageObserver({ getNextPage, refRoot, loadingElementRef })
  const initialFetch = useRef(false)

  function onSearch(e: ISearchProps) {
    pokemon.show({ id: e.search })
  }

  async function getList(params?: { offset: string }) {
    try {
      const data = await pokemon.list(params)
      setList(data)
      initialFetch.current = true
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  async function getNextPage() {
    const nextUrl = list.next
    if (!nextUrl) return
    const offsetMatch = nextUrl.match(/offset=([0-9]*)/g)
    if (!offsetMatch) return
    const offset = offsetMatch[0].replace(/[^\d]/g, '')

    const params = {
      offset
    }

    try {
      const data = await pokemon.list(params)
      setList(prev => ({ ...data, results: [...(prev.results || []), ...(data.results || [])] }))
    } catch (err) {
      console.error(err)
    }

    return offset
  }


  useEffect(() => {
    if (!initialFetch.current) return
    getNextPage()
  }, [nextPageTrigger])

  return (
    <section className='main-page overflow-auto relative p-4 border-none' ref={refRoot}>
      <div className='main-search-bar sticky top-0 mb-4' style={{ opacity: 1 }}>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={onSearch}
        >
          <Form>
            <InputSearch />
          </Form>
        </Formik>
      </div>
      <div className='overflow-auto grid grid-cols-3 gap-4'>
        {
          list?.results?.map((listResult, idx) => <Card key={listResult.name + idx} pokemon={listResult} />)
        }
        {
          !!list.next && (
            <>
              <Card loading={true} pokemon={{ name: 'loading', url: '' }} refCard={loadingElementRef} />
              {Array(15).fill({ name: 'loading...', url: '' }).map((loadingResult, idx) => (
                <Card
                  key={`loading-card-${idx}-${list.next}`}
                  loading={true}
                  pokemon={loadingResult}
                />
              ))}
            </>
          )
        }
      </div>
    </section>
  )
}

export default MainPage