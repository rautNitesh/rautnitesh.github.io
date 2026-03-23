'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                    }
                })
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -80px 0px',
            }
        )

        // Delay observation until hero finishes animating (~1s delay + ~1.2s content)
        const timer = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
        }, 1700)

        return () => {
            clearTimeout(timer)
            observer.disconnect()
        }
    }, [])

    return null
}
