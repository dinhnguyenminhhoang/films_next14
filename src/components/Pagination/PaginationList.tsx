import { useState } from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination'

const PaginationList = ({
    totalPage,
    page,
    setCurrentPage,
}: {
    totalPage: number
    page: number
    setCurrentPage: (currentPage: number) => void
}) => {
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPage) {
            setCurrentPage(newPage)
        }
    }

    const renderPageNumbers = () => {
        const pages = []
        const maxPagesToShow = 10
        const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2))
        const endPage = Math.min(totalPage, startPage + maxPagesToShow - 1)

        if (startPage > 1) {
            pages.push(
                <PaginationItem key={1}>
                    <PaginationLink onClick={() => handlePageChange(1)}>
                        1
                    </PaginationLink>
                </PaginationItem>,
            )
            if (startPage > 2) {
                pages.push(
                    <PaginationItem key="ellipsis-start">
                        <PaginationEllipsis />
                    </PaginationItem>,
                )
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <PaginationItem key={i}>
                    <PaginationLink
                        isActive={i === page}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>,
            )
        }

        if (endPage < totalPage) {
            if (endPage < totalPage - 1) {
                pages.push(
                    <PaginationItem key="ellipsis-end">
                        <PaginationEllipsis />
                    </PaginationItem>,
                )
            }
            pages.push(
                <PaginationItem key={totalPage}>
                    <PaginationLink onClick={() => handlePageChange(totalPage)}>
                        {totalPage}
                    </PaginationLink>
                </PaginationItem>,
            )
        }

        return pages
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={() => handlePageChange(page - 1)}
                        className={`disabled:${page === 1 ? true : false} cursor-pointer`}
                    />
                </PaginationItem>
                {renderPageNumbers()}
                <PaginationItem>
                    <PaginationNext
                        onClick={() => handlePageChange(page + 1)}
                        className={`disabled:${page === totalPage ? true : false} cursor-pointer`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
export default PaginationList
