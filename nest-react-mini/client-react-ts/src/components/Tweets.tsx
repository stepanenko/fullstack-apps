import { useEffect, useState } from "react";

type Tweet = {
  id: string;
  text: string;
}

const list: Tweet[] = [
  { id: '111', text: 'My first tweet' },
  { id: '112', text: 'My second tweet' },
]

export default function Tweets() {
  const [tweets, setTweets] = useState([] as Tweet[]);

  useEffect(() => setTweets(list), []);

  // TODO: Fetch real tweets from my twitter account

  return (
    <div>
      <h2>Tweets</h2>
      {tweets.map((t: Tweet) => <div key={t.id}>{t.text}</div>)}
    </div>
  )
}
