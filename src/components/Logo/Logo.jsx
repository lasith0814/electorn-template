// material-ui
import { useTheme } from "@mui/material/styles";

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from '~/assets/images/logo-dark.svg';
 * import logo from '~/assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
	const theme = useTheme();

	return (
		/**
		 * if you want to use image instead of svg uncomment following, and comment out <svg> element.
		 *
		 * <img src={logo} alt="Mantis" width="100" />
		 *
		 */
		<>
			<svg xmlns="http://www.w3.org/2000/svg" height={35} width={130} viewBox="0 0 290.68 94.18">
				<defs>{/* <style>.cls-1{fill:#ff0d0d;}</style> */}</defs>
				<title>Asset 1</title>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1">
						<path d="M18.79,75.52a1.37,1.37,0,0,1,.25.09,36.07,36.07,0,0,0,3.44,1.78,23.08,23.08,0,0,1,2.43,1.35,7.94,7.94,0,0,1,3.16,3.93,5.39,5.39,0,0,0,1.38,2,11.64,11.64,0,0,0,2,1.51c.46.28.93.53,1.4.8a5.18,5.18,0,0,0,4,.41,6.57,6.57,0,0,0,2.22-1.09,5.06,5.06,0,0,0,2-3.67,4.49,4.49,0,0,0-.63-2.74A6.84,6.84,0,0,0,39,78.09c-.86-.72-1.77-1.38-2.7-2-.38-.27-.76-.52-1.15-.77-3.92-2.53-7.84-5-11.82-7.49a59.37,59.37,0,0,1-6.37-4.43,27.49,27.49,0,0,1-4.72-4.8,19.6,19.6,0,0,1-3.42-6.83,16.85,16.85,0,0,1,1.69-13,21.77,21.77,0,0,1,5.4-6.3,31.63,31.63,0,0,1,11.81-6,31.28,31.28,0,0,1,10.46-1,27.1,27.1,0,0,1,14.36,5.11,17.58,17.58,0,0,1,6.92,10.13,17.29,17.29,0,0,1-3.67,16,10.55,10.55,0,0,1-2.85,2.39,16,16,0,0,1-4.94,2,5.43,5.43,0,0,1-4.5-1,6.4,6.4,0,0,1-1.88-2.31,3.86,3.86,0,0,1-.35-1.48c0-.83,0-1.67,0-2.5,0-.15.08-.21.23-.22l2.26-.15a4.86,4.86,0,0,1,1.81.24,5.74,5.74,0,0,0,2.67.25,5.09,5.09,0,0,0,2.37-1.08A6.66,6.66,0,0,0,52.05,51a10.52,10.52,0,0,0,1.43-4.72,15,15,0,0,0-6.29-12.95,17.64,17.64,0,0,0-7-2.92,19.19,19.19,0,0,0-5-.27,17.41,17.41,0,0,0-9,3.11,12.15,12.15,0,0,0-4.63,6,11.58,11.58,0,0,0,.62,9.17,14.34,14.34,0,0,0,2.67,3.74,23.62,23.62,0,0,0,3.48,2.92c3,2.06,5.95,4.1,9,6,1.6,1,3.2,2,4.73,3.08.79.57,1.57,1.16,2.32,1.78A15.91,15.91,0,0,1,50,75.3a15.12,15.12,0,0,1-2.84,12.6,15.79,15.79,0,0,1-7.9,5.44,17.77,17.77,0,0,1-9,.46,22.64,22.64,0,0,1-12.6-7,7.52,7.52,0,0,1-1.1-1.47,3.77,3.77,0,0,1-.26-3.24,3,3,0,0,1,.17-.41,28.35,28.35,0,0,0,1.71-4.43C18.36,76.7,18.58,76.11,18.79,75.52Z" />
						<path
							fill="#ff0d0d"
							d="M5.14,12.72c.13-.2.37-.21.57-.29L18.93,7.28,30.85,2.64q.34-.14.69-.24a.14.14,0,0,1,.2.14c.06.41.11.83.15,1.24.22,1.89.43,3.78.65,5.68s.45,3.78.66,5.67c.18,1.55.35,3.1.52,4.66,0,.38,0,.39-.34.51L28.3,21.92q-5.24,1.65-10.46,3.32A.87.87,0,0,1,16.77,25C13,21,9.22,17.08,5.44,13.12,5.33,13,5.17,12.91,5.14,12.72Z"
						/>
						<path
							fill="#ff0d0d"
							d="M66.35,12.82c0,.23-.21.31-.34.41L53.17,24.6c-.62.55-.43.51-1.21.26L38,20.34c-.74-.24-.66-.12-.58-.9.28-2.55.58-5.09.87-7.64.27-2.35.55-4.71.82-7.06.08-.68.14-1.36.22-2,0-.32.12-.37.43-.25L43.21,3.8,65.7,12.54Z"
						/>
						<path d="M138.59,54.79c0-2.59,0-5.18,0-7.77V35.33c0-.23,0-.46,0-.69,0-.06.1-.13.17-.15a.94.94,0,0,1,.34,0h4.35c.3,0,.36.07.37.34s0,.34,0,.51V69.54c0,.89.09.83-.82.83-1.14,0-2.28,0-3.41,0a.6.6,0,0,1-.67-.49c-.85-2.26-1.72-4.51-2.57-6.77q-2.58-6.77-5.15-13.54c0-.13-.11-.26-.17-.39a1.3,1.3,0,0,1-.27-.57c-.11-.13,0,0,0,0s0,.09,0,.14c.13.31-.12.64.05.94q0,7.56,0,15.12c0,1.56,0,3.13,0,4.7,0,.19,0,.39,0,.59a.21.21,0,0,1-.21.22h-4.52c-.48,0-.5,0-.51-.46V35.49c0-1.17-.17-1,1.05-1h3c.74,0,.65-.07.92.61.78,2,1.57,4,2.35,6l5.31,13.67c.05.13.12.26.18.39a1.12,1.12,0,0,1,.27.57s0,0,0,0a1.31,1.31,0,0,1-.05-.15C138.51,55.32,138.73,55,138.59,54.79Z" />
						<path d="M187.08,39.72A6,6,0,0,0,183.34,35a7.45,7.45,0,0,0-2.92-.53h-10.5a1.94,1.94,0,0,0-.42,0c-.06,0-.16.11-.16.16a6.6,6.6,0,0,0,0,.77V70.08c0,.22.12.29.32.29h10.67a7.52,7.52,0,0,0,1.78-.17A6,6,0,0,0,187,65.64a9,9,0,0,0,.26-2.37q0-10.85,0-21.69A10.45,10.45,0,0,0,187.08,39.72Zm-5.27,22.73a5.14,5.14,0,0,1-.12,1.35,2.42,2.42,0,0,1-1.78,1.78,4.45,4.45,0,0,1-1,.17h-3.84c-.31,0-.37-.07-.38-.34s0-.46,0-.68V40.14c0-.23,0-.46,0-.69s.08-.37.33-.37l4.19,0a2.88,2.88,0,0,1,.59.07,2.45,2.45,0,0,1,2,2.27,8.14,8.14,0,0,1,0,.86Z" />
						<path d="M263.33,54.13c1.93,5.41,3.91,10.75,5.8,16.06a.27.27,0,0,1-.32.18h-4.7c-.49,0-.5,0-.66-.47l-2.52-7.07-3-8.52a3.72,3.72,0,0,1-.24-1.32c0-.74,0-1.49,0-2.23,0-.28.07-.35.36-.35h4c1.06,0,.91.11.91-.9,0-3.19,0-6.38,0-9.57,0-.22,0-.45,0-.68a.27.27,0,0,0-.17-.16,1.19,1.19,0,0,0-.33,0h-6c-.16,0-.27.09-.27.26s0,.51,0,.77q0,14.61,0,29.21c0,.33.14.73-.11,1s-.59.08-.9.08h-3.93c-.38,0-.4,0-.41-.38s0-.45,0-.68q0-16.9,0-33.82c0-1.2-.18-1,1-1H264.6l1.19,0a2.91,2.91,0,0,1,1.22.35,2.24,2.24,0,0,1,1.24,1.73,7.11,7.11,0,0,1,.05,1V50.92a7.39,7.39,0,0,1,0,.94,2.24,2.24,0,0,1-1.76,2,10.86,10.86,0,0,1-2.2.21A2.77,2.77,0,0,0,263.33,54.13Z" />
						<path d="M191.36,52.35V34.75c0-.22.13-.29.32-.29h4.7c.29,0,.33,0,.34.36V48.23c0,.23,0,.46,0,.68s.12.3.32.3h6.75c.13,0,.19-.1.2-.23V35.3c0-.93-.09-.84.8-.84h4.36a.27.27,0,0,1,.27.27V69.5c0,1,.09.87-.86.87h-4.1c-.45,0-.46,0-.47-.49V54.5a.25.25,0,0,0-.26-.27H197a.27.27,0,0,0-.26.28c0,.25,0,.51,0,.77V69.46c0,1,.11.91-.9.91h-4.18c-.16,0-.27-.08-.27-.25s0-.52,0-.77Z" />
						<path d="M94.16,34.46h5.29a5.19,5.19,0,0,1,1.61.19,2.27,2.27,0,0,1,1.66,1.87,8,8,0,0,1,.09.84v7.78c0,.11,0,.22,0,.34a.27.27,0,0,1-.29.25H97.9l-.25,0a.23.23,0,0,1-.22-.22c0-.23,0-.45,0-.68v-5c0-.22,0-.45,0-.68a.22.22,0,0,0-.22-.21H91.11a.21.21,0,0,0-.22.2c0,.14,0,.29,0,.43,0,1.76,0,3.53,0,5.29a1.18,1.18,0,0,0,.43,1q4.78,4.5,9.56,9c.19.17.37.36.56.52a4,4,0,0,1,1.4,3.18v8.63a5.19,5.19,0,0,1-.11,1.18,2.24,2.24,0,0,1-1.43,1.68,4.3,4.3,0,0,1-1.67.3H88.84a5.16,5.16,0,0,1-1.52-.19,2.29,2.29,0,0,1-1.76-2,7.28,7.28,0,0,1-.07-.93c0-2.68,0-5.35,0-8v-.43a.25.25,0,0,1,.27-.26h4.79c.19,0,.32.08.32.3v6.06c0,.23,0,.46,0,.69a.21.21,0,0,0,.2.22l.43,0h5.64a.24.24,0,0,0,.26-.26v-.43c0-1.9,0-3.81,0-5.72a1.37,1.37,0,0,0-.5-1.1c-3.27-3.09-6.5-6.21-9.8-9.27a4.83,4.83,0,0,1-1.66-3.85c0-2.47,0-5,0-7.43a7.93,7.93,0,0,1,.08-1.19,2.25,2.25,0,0,1,1.61-1.91,4.31,4.31,0,0,1,1.51-.21h5.47Z" />
						<path d="M166.16,69.52c-.65-3.44-1.32-6.87-2-10.3s-1.3-6.76-1.94-10.14l-2-10.39c-.23-1.23-.47-2.45-.7-3.68-.12-.61-.12-.61-.79-.62h-4.27c-.79,0-.71-.07-.86.72q-1.63,8.37-3.25,16.75-1.71,8.79-3.4,17.58a3.08,3.08,0,0,0-.11.93h5a.28.28,0,0,0,.29-.25c0-.14.05-.28.07-.42.3-1.91.6-3.83.89-5.73.06-.38.11-.43.5-.43h6.06a.77.77,0,0,1,.23.06c.06.31.12.59.16.87.3,1.82.58,3.65.87,5.47.06.41.07.42.48.42H166a.85.85,0,0,0,.25-.09C166.24,70,166.21,69.77,166.16,69.52ZM153.93,58.84c.14-.87.27-1.74.41-2.61.38-2.33.77-4.65,1.15-7q.44-2.78.9-5.55a1.21,1.21,0,0,1,.11-.32l.07,0h.08l2,12.54c.11.7.23,1.41.34,2.11,0,.27.05.54.08.82A42.43,42.43,0,0,1,153.93,58.84Z" />
						<path d="M290.16,67.68l-2.64-13.83q-1.61-8.41-3.23-16.84c-.15-.78-.31-1.56-.46-2.34,0-.17-.12-.25-.28-.26a4.43,4.43,0,0,0-.52,0h-4.18c-.63,0-.7-.12-.87.73-.62,3.32-1.27,6.64-1.91,10l-2.16,11q-1.08,5.61-2.17,11.22c-.19,1-.38,2-.56,2.93a47.87,47.87,0,0,0,5.26,0c.05-.23.13-.47.17-.72.29-1.88.59-3.76.88-5.65.06-.38.08-.4.49-.41h6a1.32,1.32,0,0,1,.32.07c.12.78.25,1.54.36,2.3s.23,1.46.35,2.19a21.45,21.45,0,0,0,.4,2.24h5.28C290.5,69.41,290.32,68.54,290.16,67.68Zm-11.84-8.82c.1-1.27.39-2.5.57-3.76s.42-2.53.63-3.79.4-2.52.61-3.79.41-2.53.62-3.79a2.69,2.69,0,0,0,.29-.16l1,6q.57,3.45,1.12,6.9c.13.79.25,1.57.38,2.35A33.56,33.56,0,0,1,278.32,58.86Z" />
						<path d="M232.28,52.43V34.83c0-.29.08-.36.34-.37H246.2c.94,0,.85-.06.85.8v3.5c0,.35-.06.41-.39.42h-8.54c-.44,0-.45,0-.46.5v9.23c0,.79,0,.75.74.74h7.09a.22.22,0,0,1,.22.2.28.28,0,0,1,0,.09c0,1.34,0,2.68,0,4,0,.29-.06.34-.36.34H238c-.3,0-.35,0-.36.34V65.34a.24.24,0,0,0,.25.27H247a.23.23,0,0,1,.22.22,2.09,2.09,0,0,1,0,.25c0,1.26,0,2.51,0,3.76,0,.5,0,.51-.54.51H233.16l-.69,0a.16.16,0,0,1-.16-.16c0-.25,0-.51,0-.77v-17Z" />
						<path d="M213.71,52.38V35.21c0-.82-.05-.75.72-.75h13.33a2.9,2.9,0,0,1,.51,0c.06,0,.13.1.17.16a.46.46,0,0,1,0,.17v4c0,.3,0,.35-.34.36h-8.72c-.19,0-.32.08-.32.3s0,.23,0,.34V49c0,.14,0,.29,0,.43a.27.27,0,0,0,.28.26h7.43c.3,0,.36,0,.36.33,0,.46,0,.91,0,1.37,0,.85,0,1.71,0,2.56,0,.34,0,.38-.41.38H219.3a.22.22,0,0,0-.22.21,3,3,0,0,0,0,.42V65c0,.12,0,.23,0,.35a.21.21,0,0,0,.21.22l.68,0h8.37a.25.25,0,0,1,.26.27c0,.34,0,.68,0,1V70c0,.28,0,.4-.4.39H214.1c-.35,0-.37,0-.38-.4,0-.22,0-.45,0-.68Z" />
						<path d="M120.51,54.31h-7.8a.24.24,0,0,0-.27.25V55c0,3.3,0,6.61,0,9.91,0,.14,0,.28,0,.43a.24.24,0,0,0,.25.27h9.06a.21.21,0,0,1,.21.22,2.09,2.09,0,0,1,0,.25c0,1.28,0,2.56,0,3.85,0,.39,0,.41-.45.42H107.34a.24.24,0,0,1-.25-.27c0-.26,0-.51,0-.77V35.5c0-.23,0-.45,0-.68s0-.35.33-.36h13.93c.46,0,.47,0,.47.48q0,1.92,0,3.84c0,.36,0,.39-.39.4h-8c-.23,0-.45,0-.68,0a.25.25,0,0,0-.28.25c0,.14,0,.29,0,.43v9c0,.12,0,.23,0,.35,0,.33,0,.38.41.38,2.19,0,4.39,0,6.58,0h.77c.2,0,.31.08.31.29Z" />
						<path d="M71.21,13.43c-.1.63-.19,1.18-.27,1.74a2.27,2.27,0,0,1-1,1.56c-3.77,2.79-7.61,5.47-11.46,8.14-.6.42-1.21.82-1.8,1.26a3.06,3.06,0,0,1-1.37.46.23.23,0,0,1-.25-.1l-.48-.61c0-.23.2-.31.32-.42l2.14-1.89c2-1.75,4-3.55,5.87-5.41,1.48-1.45,3-2.87,4.57-4.23a2.41,2.41,0,0,1,1.74-.61C69.89,13.34,70.52,13.39,71.21,13.43Z" />
						<path d="M35.49,0,36.9,1.18a1.51,1.51,0,0,1,.59,1.4c-.16,1.85-.25,3.7-.38,5.55-.11,1.59-.23,3.17-.35,4.75s-.25,3-.38,4.52c-.07.85-.13,1.7-.2,2.56,0,.17,0,.34,0,.51a.2.2,0,0,1-.19.18.81.81,0,0,1-.22,0c-.76-.07-.68,0-.74-.74-.17-2.29-.35-4.58-.52-6.86-.12-1.68-.24-3.36-.34-5-.12-1.83-.22-3.66-.32-5.48,0-.1,0-.2,0-.3a1.06,1.06,0,0,1,.34-.92Z" />
						<path d="M15.75,26.85a.57.57,0,0,1-.35-.13c-4.79-3.19-9.53-6.46-14.13-9.91A2.56,2.56,0,0,1,.14,14.87c0-.12,0-.25,0-.37,0-.38-.19-.75-.08-1.14l1.08-.17a2.2,2.2,0,0,1,.36,0c1.26-.08,1.16,0,1.83.63,4.16,3.84,8.18,7.82,12.23,11.78l.21.2a.44.44,0,0,1,.14.46C15.83,26.43,15.79,26.64,15.75,26.85Z" />
					</g>
				</g>
			</svg>
		</>
	);
};

export default Logo;
