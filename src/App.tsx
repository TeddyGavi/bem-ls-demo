import { Profile } from './components/Profile';

const user = {
  avatar: 'https://i.pravatar.cc/128?img=12',
  name: 'Alex Morgan',
  posts: 42,
};

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '3rem auto' }}>
      <h1>bem-ls Demo</h1>

      <Profile user={user} />

      <Profile user={user} compact />
    </main>
  );
}
