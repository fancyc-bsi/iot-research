// src/app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-base">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-text mb-8">About</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-subtext0">
            Welcome to my IoT Security Research blog. This platform serves as a repository
            of my findings and analyses of various IoT devices, focusing on their security
            implications and potential vulnerabilities.
          </p>
          <h2 className="text-text">Research Focus</h2>
          <p className="text-subtext0">
            My research primarily focuses on consumer IoT devices, examining their:
          </p>
          <ul className="text-subtext0">
            <li>Security protocols and implementations</li>
            <li>Network communication patterns</li>
            <li>Firmware security</li>
            <li>Hardware security measures</li>
            <li>Privacy considerations</li>
          </ul>
          <h2 className="text-text">Methodology</h2>
          <p className="text-subtext0">
            Each device analysis follows a systematic approach to ensure thorough coverage
            of potential security concerns and vulnerabilities. All research is conducted
            in a controlled environment with proper ethical considerations.
          </p>
        </div>
      </div>
    </div>
  );
}