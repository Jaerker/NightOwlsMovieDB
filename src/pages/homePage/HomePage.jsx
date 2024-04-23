import BirthdaysItem from '../../components/birthdaysItem/BirthdaysItem';
import NewsItem from '../../components/newsItem/NewsItem';
import TestItem from '../../components/testItem/TestItem';

function HomePage() {


	return (
		<div>
			<TestItem />
			<BirthdaysItem />
			<NewsItem />
		</div>
	);
}

export default HomePage;
