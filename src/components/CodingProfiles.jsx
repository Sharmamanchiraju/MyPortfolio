
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from 'react-icons/si';
import './CodingProfiles.css';

const CodingProfiles = () => {
    const profiles = [
        {
            name: 'LeetCode',
            handle: 'sharmamanchiraju',
            link: 'https://leetcode.com/sharmamanchiraju',
            icon: <SiLeetcode />,
            color: '#ffa116',
            bgColor: '#fff',
            borderColor: '#e2e8f0'
        },
        {
            name: 'GeeksForGeeks',
            handle: 'sharmamanchiraju',
            link: 'https://auth.geeksforgeeks.org/user/sharmamanchiraju',
            icon: <SiGeeksforgeeks />,
            color: '#2f8d46',
            bgColor: '#fff',
            borderColor: '#e2e8f0'
        },
        {
            name: 'GitHub',
            handle: 'sharmamanchiraju',
            link: 'https://github.com/sharmamanchiraju',
            icon: <SiGithub />,
            color: '#24292e',
            bgColor: '#fff',
            borderColor: '#e2e8f0'
        }
    ];

    return (
        <section className="coding-profiles-section" id="coding-profiles">
            <h2 className="section-title">Coding Profile</h2>
            <div className="profiles-grid">
                {profiles.map((profile, index) => (
                    <motion.a
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="profile-card"
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                        style={{ borderLeft: `5px solid ${profile.color}` }}
                    >
                        <div className="profile-icon" style={{ color: profile.color }}>
                            {profile.icon}
                        </div>
                        <div className="profile-info">
                            <h3>{profile.name}</h3>
                            <span>View Profile ➜</span>
                        </div>
                    </motion.a>
                ))}
            </div>

            <div className="github-chart-container">
                <h3 className="chart-title">My GitHub Contributions</h3>
                {/* Placeholder for GitHub Chart - in real app would be a component or image */}
                <div className="github-chart-placeholder">
                    <img src="https://ghchart.rshah.org/sharmamanchiraju" alt="GitHub Chart" className="gh-chart" />
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
