import Card from '../Card'; 
import { redirectToPupTunes } from "../utils/utils";
import { redirectToPupTunes2 } from "../utils/utils";

const PlayListSection = () => {
    return (
        <div className="playlist-section">
            <div className="content">
                <h1 className="title">Relax with PupPlaylists</h1>
                <p className="subtitle">Mood-Boosting Playlists for You and Your Pup</p>

                <div className="playlists">
                    <Card
                        title="PlayTime Track 🐕"
                        subtitle="11 Songs • 37m"
                        imageSrc={`${process.env.PUBLIC_URL}/image/playlist/playlist1.jpg`}
                        onClick={() => redirectToPupTunes('chicken-tenders')}
                    />
                    <Card
                        title="Relax Track 🐶"
                        subtitle="13 Songs • 1h 4m"
                        imageSrc={`${process.env.PUBLIC_URL}/image/playlist/playlist2.jpg`}
                        onClick={() => redirectToPupTunes2('crazy-pilots')}
                    />
                </div>
                <div className="staus">
                    <span>Discover unique playlists inspired by your dog's favorite toys and activities. Perfect for playtime, relaxation, and everything in between!</span>
                    <span className="staus-span">2 Playlists with 25+ Tracks for You and Your Dog</span>
                </div>
            </div>
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/image/playlist.gif`} alt="Music App Mockup" className="Music List Image" />
            </div>
        </div>
    );
};

export default PlayListSection;