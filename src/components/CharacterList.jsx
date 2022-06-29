import React, { useEffect, useState } from "react"
import Character from "./Character"
import NavPage from "./NavPage"

function CharacterList() {
	const [characters, setCharacters] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)

	useEffect(() => {
		async function fetchData() {
			setLoading(true)
			const response = await fetch(
				`https://rickandmortyapi.com/api/character?page=${page}`
			)
			const data = await response.json()
			setLoading(false)
			setCharacters(data.results)
		}
		fetchData()
	}, [page])

	return (
		<div className="container">
			<NavPage page={page} setPage={setPage} />

			{loading ? (
				<div className="text-center">
					<img
						src="https://beatrizsmerino.github.io/rick-and-morty/assets/images/portal-rick-and-morty.gif"
						alt=""
					/>
				</div>
			) : (
				<div className="row">
					{characters.map((character) => {
						return (
							<div className="col-md-4" key={character.id}>
								<Character character={character} />
							</div>
						)
					})}
				</div>
			)}
			<NavPage page={page} setPage={setPage} />
		</div>
	)
}

export default CharacterList
