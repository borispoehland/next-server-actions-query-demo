import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

function getUrl() {
    return new URL(headers().get('x-url') || '')
}

export async function appendQueryToUrl(query: Record<string, string>) {
    'use server'
    const url = getUrl()
    const oldSearch = Object.fromEntries(url.searchParams)
    const newSearch = new URLSearchParams({
        ...oldSearch,
        ...query,
    })
    url.search = ''
    const newUrl = `${url.toString()}?${newSearch.toString()}`
    redirect(newUrl)
}

export async function removeQueryFromUrl() {
    'use server'
    const url = getUrl()
    url.search = ''
    redirect(url.toString())
}
