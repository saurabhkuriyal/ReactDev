'use client';

import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function PortfolioPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        bio: {
            name: '',
            whoYouAre: '',
            aboutYourself: ''
        },
        projects: [
            {
                projectName: '',
                projectPhotos: [],
                projectLink: '',
                aboutProject: ''
            }
        ],
        experience: [
            {
                companyName: '',
                role: '',
                about: ''
            }
        ],
        socialMedia: [
            {
                platformName: '',
                profileLink: ''
            }
        ],
        certifications: [
            {
                certificationName: '',
                issuingOrganization: '',
                about: ''
            }
        ]
    });

    const handleInputChange = (section, index, field, value) => {
        setFormData(prev => ({
            ...prev,
            [section]: prev[section].map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        }));
    };

    const handleBioChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            bio: { ...prev.bio, [field]: value }
        }));
    };

    const addItem = (section) => {
        const defaultItem = {
            projects: { projectName: '', projectPhotos: [], projectLink: '', aboutProject: '' },
            experience: { companyName: '', role: '', about: '' },
            socialMedia: { platformName: '', profileLink: '' },
            certifications: { certificationName: '', issuingOrganization: '', about: '' }
        };

        setFormData(prev => ({
            ...prev,
            [section]: [...prev[section], defaultItem[section]]
        }));
    };

    const removeItem = (section, index) => {
        if (formData[section].length > 1) {
            setFormData(prev => ({
                ...prev,
                [section]: prev[section].filter((_, i) => i !== index)
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data= JSON.stringify(formData);
        const obj={
            data:data,
            prompt:"Create a beautiful portfolio website"
        }

        router.push(`/workspace/123?prompt=${encodeURIComponent(obj)}`);
        // Here you can add API call to save the data
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
                    Portfolio Builder
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Bio Section */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-300">Bio Section</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.bio.name}
                                    onChange={(e) => handleBioChange('name', e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Who You Are</label>
                                <input
                                    type="text"
                                    value={formData.bio.whoYouAre}
                                    onChange={(e) => handleBioChange('whoYouAre', e.target.value)}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., Full Stack Developer, Designer, etc."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">A Little About Yourself</label>
                                <textarea
                                    value={formData.bio.aboutYourself}
                                    onChange={(e) => handleBioChange('aboutYourself', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Tell us about yourself..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Projects Section */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-blue-300">Projects Section</h2>
                            <button
                                type="button"
                                onClick={() => addItem('projects')}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                Add More
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.projects.map((project, index) => (
                                <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-medium">Project {index + 1}</h3>
                                        {formData.projects.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeItem('projects', index)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Project Name</label>
                                            <input
                                                type="text"
                                                value={project.projectName}
                                                onChange={(e) => handleInputChange('projects', index, 'projectName', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter project name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Project Link</label>
                                            <input
                                                type="url"
                                                value={project.projectLink}
                                                onChange={(e) => handleInputChange('projects', index, 'projectLink', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium mb-2">Project Photos</label>
                                        <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            onChange={(e) => handleInputChange('projects', index, 'projectPhotos', Array.from(e.target.files))}
                                            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium mb-2">About the Project</label>
                                        <textarea
                                            value={project.aboutProject}
                                            onChange={(e) => handleInputChange('projects', index, 'aboutProject', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Describe your project..."
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-blue-300">Experience Section</h2>
                            <button
                                type="button"
                                onClick={() => addItem('experience')}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                Add More
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.experience.map((exp, index) => (
                                <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-medium">Experience {index + 1}</h3>
                                        {formData.experience.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeItem('experience', index)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Company Name</label>
                                            <input
                                                type="text"
                                                value={exp.companyName}
                                                onChange={(e) => handleInputChange('experience', index, 'companyName', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter company name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Role</label>
                                            <input
                                                type="text"
                                                value={exp.role}
                                                onChange={(e) => handleInputChange('experience', index, 'role', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter your role"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium mb-2">About</label>
                                        <textarea
                                            value={exp.about}
                                            onChange={(e) => handleInputChange('experience', index, 'about', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Describe your experience..."
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Media Links Section */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-blue-300">Social Media Links</h2>
                            <button
                                type="button"
                                onClick={() => addItem('socialMedia')}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                Add More
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.socialMedia.map((social, index) => (
                                <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-medium">Social Link {index + 1}</h3>
                                        {formData.socialMedia.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeItem('socialMedia', index)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Platform Name</label>
                                            <input
                                                type="text"
                                                value={social.platformName}
                                                onChange={(e) => handleInputChange('socialMedia', index, 'platformName', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="e.g., LinkedIn, GitHub, Twitter"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Profile Link</label>
                                            <input
                                                type="url"
                                                value={social.profileLink}
                                                onChange={(e) => handleInputChange('socialMedia', index, 'profileLink', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="https://..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-blue-300">Certifications Section</h2>
                            <button
                                type="button"
                                onClick={() => addItem('certifications')}
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                            >
                                Add More
                            </button>
                        </div>
                        <div className="space-y-6">
                            {formData.certifications.map((cert, index) => (
                                <div key={index} className="border border-gray-600 rounded-lg p-4 bg-gray-700">
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-lg font-medium">Certification {index + 1}</h3>
                                        {formData.certifications.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeItem('certifications', index)}
                                                className="text-red-400 hover:text-red-300 text-sm"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Certification Name</label>
                                            <input
                                                type="text"
                                                value={cert.certificationName}
                                                onChange={(e) => handleInputChange('certifications', index, 'certificationName', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter certification name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2">Issuing Organization</label>
                                            <input
                                                type="text"
                                                value={cert.issuingOrganization}
                                                onChange={(e) => handleInputChange('certifications', index, 'issuingOrganization', e.target.value)}
                                                className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter organization name"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <label className="block text-sm font-medium mb-2">About</label>
                                        <textarea
                                            value={cert.about}
                                            onChange={(e) => handleInputChange('certifications', index, 'about', e.target.value)}
                                            rows={3}
                                            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Describe the certification..."
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-lg"
                        >
                            Save Portfolio
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}



