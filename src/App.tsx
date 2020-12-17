import HeroHeader from "./components/HeroHeader";
import ListSection from "./components/FeatureSection";
import SingleSection from "./components/StorySection";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis diam ac iaculis eleifend. Nullam quis nibh aliquam, hendrerit justo nec, imperdiet tellus. Aenean aliquet, ligula ac euismod blandit, lorem odio euismod velit, sit amet tincidunt ligula ipsum vel ante. Fusce condimentum ac neque nec posuere. Ut rhoncus eu leo sit amet molestie. Fusce viverra at nunc id ornare. Nulla augue sem, elementum ac maximus vel, gravida vel ante. Ut nisl lacus, hendrerit nec dapibus eu, sagittis vel eros. Mauris et leo nisl. Nam mattis ante ut dolor pulvinar, vulputate euismod massa fringilla. Nunc quis urna egestas, imperdiet quam sit amet, iaculis ipsum. Nulla mattis est eget consequat consectetur."

const App = () => {
  return <>
    <HeroHeader />
    <ListSection title="feature" />
    <SingleSection title="story" description={description} />
  </>
}

export default App;
