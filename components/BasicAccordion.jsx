// import * as React from 'react';
"use client"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

export default function BasicAccordion() {
	return (
		<div className='p-2 cellphone:p-2 tablet:p-4 desktop:p-8'>
			<Accordion>
				<AccordionSummary
					expandIcon={<AddIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
					sx={{ padding: '0.5rem 1.5rem' }}
				>
					<Typography>
						Primeira Pergunta frequente, pergunta curta?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{  color: 'purple' }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<AddIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
					sx={{ padding: '0.5rem 1.5rem' }}
				>
					<Typography>
						Segunda Pergunta frequente, pergunta realmente longa que deveria ser melhor estudada, este é um caso de uso pouco comum, utilizado apenas para visualizar como ficaria um grande texto nessa situação?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{  color: 'purple' }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<AddIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
					sx={{ padding: '0.5rem 1.5rem' }}
				>
					<Typography>
						Terceira Pergunta frequente, pergunta mediana, provavelmente a maior parte das perguntas terá este tamanho?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{  color: 'purple' }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary
					expandIcon={<AddIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
					sx={{ padding: '0.5rem 1.5rem' }}
				>
					<Typography>
						Quarta Pergunta frequente, pergunta com muito longa, 5 paragrafos?
					</Typography>
				</AccordionSummary>
				<AccordionDetails style={{  color: 'purple' }}>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a egestas mauris, eu laoreet neque. Cras in posuere felis, eget dignissim metus. Sed venenatis, sapien quis eleifend sodales, tellus arcu malesuada urna, non molestie nisl nunc ut dui. Etiam sollicitudin lorem a sapien venenatis tempus. Quisque sapien risus, ullamcorper vel massa commodo, posuere aliquet lectus. Sed pulvinar metus odio, vitae maximus mi sagittis et. Praesent aliquet lectus feugiat accumsan sollicitudin.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}