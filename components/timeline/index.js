import {
	Box,
	Flex,
	Heading,
	Icon,
	List,
	ListItem,
	Text,
	Link,
} from '@chakra-ui/react'
import { HiBadgeCheck } from 'react-icons/hi'
import useColorModeSwitcher from '@/hooks/useColorModeSwitcher'

const Divider = () => {
	const { colorGrey } = useColorModeSwitcher()
	return <Box height='2px' mt={10} mb={10} bg={colorGrey} />
}

const Year = ({ children }) => (
	<Heading as='h4' variant='h4' mb={4}>
		{children}
	</Heading>
)

const Checkpoint = ({ title, children }) => {
	const { colorGrey, successColor } = useColorModeSwitcher()
	return (
		<>
			<Flex alignItems='center' mb={1}>
				<Icon as={HiBadgeCheck} fill={successColor} boxSize={5} />
				<Heading variant='bodyBold' as='h5' ml={2}>
					{title}
				</Heading>
			</Flex>
			<ListItem
				pb={4}
				ml={2}
				borderLeft='2px solid'
				borderColor={colorGrey}
				position='relative'
				_last={{
					border: '0px',
					paddingBottom: '0px',
				}}
			>
				<Text ml={5}>{children}</Text>
			</ListItem>
		</>
	)
}

const FullTimeline = () => (
	<>
		<Year>2021</Year>
		<List>
			<Checkpoint title='Joining a Startup as a Software Engineer'>
				Will be joining a startup as a Software Engineer in the month of October
			</Checkpoint>
			<Checkpoint title='Started Open Source contribution ❤️'>
				Started Open Source contribution mainly in{' '}
				<Link
					href='https://github.com/kubernetes/website/pulls?q=author%3Aniteshseram+'
					aria-label='kubernetes contribution'
					target='_blank'
					rel='noopener noreferrer'
				>
					Kubernetes
				</Link>{' '}
				docs and other projects here and there. Although there were not any big
				major contributions being made, I learnt a lot about how to contribute
				and collaborate in such a big project in general. I am still exploring
				Open Source and trying to be active as much as possible.
			</Checkpoint>
		</List>
		<Divider />
		<Year>2020</Year>
		<List>
			<Checkpoint title='Joined Cognizant'>
				At the end of 2020 after graduation, I joined Cognizant as a Programmer
				Analyst Trainee. I learnt about Java Full Stack development while
				working here.
			</Checkpoint>
			<Checkpoint title='Graduated 🧑‍🎓'>
				Sadly graduated with a virtual convocation
			</Checkpoint>
			<Checkpoint title='Hit by pandemic 😷'>
				The pandemic hit when we were just in the mid of our last semester and
				we all had to go home. Last semester is always special because that is
				the last time we could enjoy to the fullest with all our college friends
				before parting ways 😔.
			</Checkpoint>
		</List>
		<Divider />
		<Year>2016</Year>
		<List>
			<Checkpoint title='Started learning coding 💻'>
				I was so intimidated at first and had to struggle in my freshman year. I
				literally used to memorize the programs 😂.
			</Checkpoint>
			<Checkpoint title='Started at Assam Don Bosco University'>
				Took Computer Science and Engineering just because I like computer and I
				had no idea about other branches. And I am glad I chose this.
			</Checkpoint>
			<Checkpoint title='Moved out of hometown 🏠'>
				This was the first time I moved of hometown to do my graduation.
			</Checkpoint>
		</List>
		<Divider />
		<Year>2015</Year>
		<List>
			<Checkpoint title='Took a year gap'>
				Prepared for the medical entrance examination. Unfortunately,
				couldn&apos;t clear it. I couldn&apos;t think of any other option that I
				liked other than engineering.
			</Checkpoint>
			<Checkpoint title='Completed higher secondary 🧑‍🏫'>
				Completed my higher secondary and decided to try for medical entrance
				examination
			</Checkpoint>
		</List>

		<Divider />
		<Year>2013</Year>
		<List>
			<Checkpoint title='Started higher secondary'>
				Got into the best college in my hometown
			</Checkpoint>
		</List>
		<Divider />
		<Year>1997</Year>
		<List>
			<Checkpoint title='Born 👶' />
		</List>
	</>
)

const Timeline = () => <FullTimeline />

export default Timeline
