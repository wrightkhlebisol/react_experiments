import {useState, useCallback, useEffect, useRef} from 'react'

function PasswordGenerator() {
	const [length, setLength] = useState(0)
	const [numberAllowed, setNumberAllowed] = useState(0)
	const [charAllowed, setCharAllowed] = useState(0)
	const [password, setPassword] = useState('')

	const passwordRef = useRef(null)

	const generatePassword = useCallback(() => {
		let _password = ''
		let _allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
		if (numberAllowed) _allowed += '0123456789'
		if (charAllowed) _allowed += '!@#$%^&*()_+'
		for (let i = 0; i < length; i++) {
			_password += _allowed.charAt(Math.floor(Math.random() * _allowed.length))
		}
		setPassword(_password)
	}, [length, numberAllowed, charAllowed])

	useEffect(() => { 
		generatePassword()
	}, [length, numberAllowed, charAllowed])

	const copyPasswordToClipboard = () => { 
		navigator.clipboard.writeText(password)
		passwordRef.current?.select()
	}

	return (
		<div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
			<h1 className='text-white text-center my-3'>Password Generator</h1>
			<div className='flex shadow rounded-lg my-3 overflow-hidden'>
				<input
					type="text"
					value={password}
					className='outline-none w-full py-1 px-3'
					placeholder='Password'
					readOnly
					ref={passwordRef}
				/>
				<button
					className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
					onClick={copyPasswordToClipboard}
				>copy</button>
			</div>
			<div className="flex text-sm gap-x-2">
				<div className="flex items-center gap-x-1">
					<input
						type="range"
						min={6}
						max={30}
						value={length}
						className='cursor-pointer'
						onChange={(e) => setLength(e.target.value)}
					/>
					<label htmlFor="length">Length: {length}</label>
				</div>
				<div className="flex text-sm gap-x-2">
					<input
						type="checkbox"
						defaultChecked={numberAllowed}
						onChange={() => setNumberAllowed((prev) => !prev)}
						name='numberAllowed'
					/>
					<label htmlFor="numberAllowed">Numbers</label>
				</div>
				<div className="flex text-sm gap-x-2">
					<input
						type="checkbox"
						defaultChecked={charAllowed}
						onChange={() => setCharAllowed((prev) => !prev)}
						name='charAllowed'
					/>
					<label htmlFor="charAllowed">Characters</label>
				</div>
			</div>
		</div>
	)
}

export default PasswordGenerator
