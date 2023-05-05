import { appendQueryToUrl, removeQueryFromUrl } from './_actions'

interface IProps {
    searchParams: Record<string, string>
}

const Page = ({ searchParams }: IProps): JSX.Element => {
    async function appendFooToUrl() {
        'use server'
        return appendQueryToUrl({ foo: 'bar' })
    }
    async function appendBarToUrl() {
        'use server'
        return appendQueryToUrl({ bar: 'baz' })
    }
    return (
        <form>
            <p>{JSON.stringify(searchParams)}</p>
            {/* @ts-ignore */}
            <button formAction={appendFooToUrl}>Append Foo to URL</button>
            {/* @ts-ignore */}
            <button formAction={appendBarToUrl}>Append Bar to URL</button>
            {/* @ts-ignore */}
            <button formAction={removeQueryFromUrl}>Remove from URL</button>
        </form>
    )
}

export default Page
