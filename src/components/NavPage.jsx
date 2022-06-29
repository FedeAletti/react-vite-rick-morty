function NavPage({ page, setPage }) {
	return (
		<header className="d-flex justify-content-between align-items-center">
			<p>Page: {page}</p>
			<div>
				{page !== 1 && (
					<button
						className="btn btn-secondary mx-3"
						onClick={() => {
							setPage(page - 1)
						}}
					>
						Page {page - 1}
					</button>
				)}
				<button
					className="btn btn-primary"
					onClick={() => {
						setPage(page + 1)
					}}
				>
					Page {page + 1}
				</button>
			</div>
		</header>
	)
}

export default NavPage
