export default function AboutPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            We are dedicated to providing high-quality educational content that empowers learners
            to achieve their goals. Our platform offers comprehensive courses designed by industry experts
            to help you master new skills and advance your career.
          </p>
          
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded in 2023, our platform grew from a simple idea: learning should be accessible,
            engaging, and effective. What started as a small collection of tutorials has evolved into
            a comprehensive learning ecosystem serving thousands of students worldwide.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22v-5"></path><path d="M9 7V2"></path><path d="m15 7 0-5"></path><path d="M12 7v12"></path><path d="M5 17H2"></path><path d="M5 12H3"></path><path d="M5 7H4"></path><path d="M19 17h3"></path><path d="M19 12h2"></path><path d="M19 7h1"></path></svg>
              </div>
              <div>
                <h3 className="font-medium">Accessibility</h3>
                <p className="text-gray-600">We believe education should be accessible to everyone, regardless of background or circumstances.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M7 11v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></path><path d="M14 10V4a2 2 0 0 0-2-2H8.5a2 2 0 0 0-2 2v6"></path><path d="M21 11v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"></path><path d="M14 10V4a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v6"></path></svg>
              </div>
              <div>
                <h3 className="font-medium">Excellence</h3>
                <p className="text-gray-600">We strive for the highest quality in our course content, teaching methods, and platform experience.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="bg-primary/10 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 17v5"></path><path d="M5 17v5"></path><path d="M19 17v5"></path><path d="M8.8 17a4 4 0 1 0-7.6 0"></path><path d="M22.8 17a4 4 0 1 0-7.6 0"></path><path d="M15.2 17a4 4 0 1 0-7.6 0"></path></svg>
              </div>
              <div>
                <h3 className="font-medium">Community</h3>
                <p className="text-gray-600">We foster a supportive learning community where students can connect, collaborate, and grow together.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Alex Johnson", role: "Founder & CEO", bio: "With over 15 years in education technology, Alex is passionate about making quality education accessible to all." },
            { name: "Sarah Chen", role: "Head of Curriculum", bio: "Sarah brings 10+ years of experience designing innovative learning experiences for diverse student populations." },
            { name: "Marcus Williams", role: "Technical Director", bio: "Marcus leads our engineering team, ensuring our platform delivers a seamless learning experience." }
          ].map((member, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-xl text-center">{member.name}</h3>
              <p className="text-primary text-center mb-3">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}