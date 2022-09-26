import * as React from 'react'
import Image from 'next/future/image'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import lubb from '~/assets/lubb.png'
import { X } from 'react-feather'
import { useRouter } from 'next/router'

export const ANNOUNCEMENT_KEY = 'flag-announcement'
// change this key to show new announcements
export const ANNOUNCEMENT_VALUE = 'llama1'

export default function Announcement({ children }: { children: React.ReactNode }) {
	const router = useRouter()
	const closeAnnouncement = () => {
		Cookies.set(ANNOUNCEMENT_KEY, ANNOUNCEMENT_VALUE)
		router.push('/', undefined, { shallow: true })
	}

	if (!router.query.announcement) {
		return null
	}

	return (
		<Wrapper>
			{children}
			<Image src={lubb} width={18} height={18} alt="llama love" />
			<Close onClick={closeAnnouncement}>
				<X size={16} />
			</Close>
		</Wrapper>
	)
}

const Wrapper = styled.p`
	position: relative;
	padding: 12px;
	font-size: 1rem;
	color: ${({ theme }) => (theme.mode === 'dark' ? 'white' : 'black')};
	background-color: hsl(215deg 79% 51% / 12%);
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadowSm};
	border-radius: 8px;

	a {
		font-weight: 500;
	}

	img {
		position: relative;
		top: 2px;
		left: 4px;
		display: inline-block;
	}
`

const Close = styled.button`
	position: absolute;
	top: 6px;
	bottom: 6px;
	right: 12px;
	margin: auto 0;
	padding: 6px 8px;
	border-radius: 12px;
	:hover,
	:focus-visible {
		background-color: hsl(215deg 79% 51% / 24%);
	}

	svg {
		position: relative;
		top: 1px;
	}
`
