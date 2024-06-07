import useSWR from 'swr'
import { fetcher } from '@/helper'
export function getMovieTreding({ type = 'day' }: { type: string }) {
    const { data, error } = useSWR(
        `/3/trending/movie/${type}?language=en-US`,
        fetcher,
    )
    return { data, error }
}
