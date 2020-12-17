
const ProfileSection: React.FC = () => (
  <section className="px-36 py-12 bg-gray-800 text-white">
    <h2 id="story" className="text-4xl font-bold text-center underline mb-8">Profile</h2>
    <div className="flex">
      <img src="https://randomfox.ca//images//54.jpg" className="h-96" alt="profile" />
      <div className="h-96 flex flex-col justify-center px-24">
        <span className="text-2xl text-center font-bold">名前　名前</span>
        <p className="text-xl">〇〇大学卒業後、新卒で〇〇へ入社。その後いくつかのベンチャー企業でエンジニアをしたのちに独立。主に Web フロントを得意とし、特に React が大好き。</p>
      </div>
    </div>
  </section>
)

export default ProfileSection;